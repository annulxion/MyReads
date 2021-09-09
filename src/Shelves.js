import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Book from './Book';

class Shelves extends Component {
  // pass state and update function through props
  // create shelves by filtering on shelf name
  // and mapping Book components
    render() {
      const { books, onUpdateBook } = this.props
      let read = books.filter((book) => (
        book.shelf === "read"
    ))
    let currentlyReading = books.filter((book) => (
      book.shelf === "currentlyReading"
  ))
  let wantToRead = books.filter((book) => (
    book.shelf === "wantToRead"
))
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                  <ol className='books-grid'>
                  {currentlyReading.map((book)=> (
                    <Book key={book.id} book={book} books={books} onUpdateBook={onUpdateBook}/>
                ))}

            </ol>
                
              </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                  <ol className='books-grid'>
                {wantToRead.map((book)=> (
                    <Book key={book.id} book={book} books={books} onUpdateBook={onUpdateBook}/>
                ))}

            </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                  <ol className='books-grid'>
                {read.map((book)=> (
                    <Book key={book.id} book={book} books={books} onUpdateBook={onUpdateBook}/>
                ))}

            </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
            <Link to='/search'
                        className='search-button'>
              <button>Add a book</button>
              </Link>
            </div>
          </div>
          </div>
        );
    }
}

export default Shelves;