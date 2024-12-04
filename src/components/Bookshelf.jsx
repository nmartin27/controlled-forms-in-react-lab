import { useState } from "react";

const Bookshelf = () => {
const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
  { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
])

const [newBooks, setNewBooks] = useState({
    title: '',
    author: '',
})

const handleInputChange = (event) => {
setNewBooks({...newBooks, [event.target.name] : event.target.value})
}

const handleSubmit = (event) => {
    event.preventDefault()
    setBooks(`title: ${newBooks.title} Author: ${newBooks.author}`)
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
    </form>
    <form onSubmit={handleSubmit}>
        <label htmlFor="author">Author: </label>
        <input id="author"
        name='author'
        value={newBooks.author}
        onChange={handleInputChange} />
        <button type="submit">Submit your Book</button>
    </form>

  </div>
  <div className="bookCardsDiv"></div>
  </div>
  </>
)
}