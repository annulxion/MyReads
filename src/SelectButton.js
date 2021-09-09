import React, { Component } from 'react'

class SelectButton extends Component {
    // make our select button and pull in state to identify 
    // each book's default shelf by looping through state object.
    // update function goes all the way up to state on App page
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