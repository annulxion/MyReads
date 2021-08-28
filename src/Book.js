import React, { Component } from 'react'
//import * as BooksAPI from './BooksAPI'


class Book extends Component {
   

    render() {
        const { book, onUpdateBook } = this.props
        const handleShelfChange = (e) => {
          let shelf = e.value
          book.shelf = shelf;
          onUpdateBook(book);
        }
        return(
            <li key={book.id} className='book-list-item'>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                          <select defaultValue={book.shelf} onChange={handleShelfChange(this)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors[0]}</div>
                    </div>
                  </li>
        );
    }
}

export default Book;