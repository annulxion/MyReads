import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

class Shelves extends Component {
  // pass state and update function through props
  // create shelves by filtering on shelf name
  // and mapping Book components
    render() {
      const { books, onUpdateBook } = this.props
      let read = books.filter((book) => (
        book.shelf === "read"
    ))
    read.title = "Read"

    let currentlyReading = books.filter((book) => (
      book.shelf === "currentlyReading"
  ))
  currentlyReading.title = "Currently Reading"

  let wantToRead = books.filter((book) => (
    book.shelf === "wantToRead"
  ))
  wantToRead.title = "Want To Read"

        return (
          <div>
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books">
              <Shelf shelf= {currentlyReading} books={books} onUpdateBook={onUpdateBook}/>

              <Shelf shelf= {wantToRead} books={books} onUpdateBook={onUpdateBook}/>

              <Shelf shelf= {read} books={books} onUpdateBook={onUpdateBook}/>

      
            </div>
            <div className="open-search">
            <Link to='/search'
                        className='search-button'>
              <button>Add a book</button>
              </Link>
            </div>
          </div>
        );
    }
}

export default Shelves;