import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchBar extends Component {
    state = {
     books: []
    }

    updateQuery = (query) => {
      this.setState(() => ({
          query: query.trim()
      }))
  }

  searchBook = (books) => {
    BooksAPI.search(books)
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
   }

    render() {
        return(
            <div className="search-books">
            <div className="search-books-bar">
            <Link to='/' className='close-search'>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"
                  onChange={(event) => this.searchBook(event.target.value)}
                   />
              
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        );
    }
}

export default SearchBar;