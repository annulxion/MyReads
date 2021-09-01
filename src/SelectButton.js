import React, { Component } from 'react'

class SelectButton extends Component {
render() {
    const { book, books, onUpdateBook } = this.props
    const handleShelfChange = (e) => {
      book.shelf = e.target.value;
      onUpdateBook(book);
    }
    let defaultShelf = 'none';
    for (let i of books) {
        if (i.id === book.id) {
            defaultShelf = i.shelf;
            break;
        }
    }

return(
<div className="book-shelf-changer">
                          <select defaultValue={defaultShelf} onChange={(e) => handleShelfChange(e)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
)
}
}
export default SelectButton