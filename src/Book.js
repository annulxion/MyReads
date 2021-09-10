import React, { Component } from 'react'
import SelectButton from './SelectButton'


class Book extends Component {
   // pass filtered book data, books state, and update fxn as props
   // create list item with book id, image, author, and title

    render() {
        const { book, books, onUpdateBook } = this.props
        
        return(
            <li key={book.id} className='book-list-item'>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        <SelectButton book={book} books={books} onUpdateBook={onUpdateBook} />
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
                    </div>
                  </li>
        );
    }
}

export default Book;