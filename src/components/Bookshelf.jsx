import { useState } from "react";

const Bookshelf = () => {
const [books, setBooks] = useState([])

const [newBooks, setNewBooks] = useState({
    title: '',
    author: '',
})

const handleInputChange = (event) => {
setNewBooks({...newBooks, [event.target.name] : event.target.value})
}

const handleSubmit = (event) => {
    event.preventDefault()
    setBooks((prevBooks) => [...prevBooks, newBooks])
    setNewBooks({title:'', author:''})
}
 
return (
    <>
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input id="title"
        name='title'
        value={newBooks.title}
        onChange={handleInputChange} />

        <label htmlFor="author">Author: </label>
        <input id="author"
        name='author'
        value={newBooks.author}
        onChange={handleInputChange} />
        <button type="submit">Submit your Book</button>
    </form>

  </div>
  <div className="bookCardsDiv">{books.map((book, index) => (
    <div className="bookCard"
     key={index}>
        <h3>Title: {book.title}</h3>
        <p>Author: {book.author}</p>
    </div>
  ))}
  </div>
  </div>
  </>
)
}
export default Bookshelf