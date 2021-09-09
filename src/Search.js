import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchResults from './SearchResults';

class SearchBar extends Component {
  // state array (criteria) only needed at this level and below.
  // call search API, then determine if 'books' response is undefined
  // or length > 0, then pass json resp into 'criteria' array.
  // otherwise, change back to empty array. 
  state = {
    criteria: []
  };

  searchBook =(search) => {
    BooksAPI.search(search.trim())
    .then(books => {
        if(undefined !== books && books.length > 0) {
        this.setState({ criteria: books })}
        else {this.setState({ criteria: [] })}
      });

      }

fetchBooks = e => {
  this.searchBook(e.target.value)
}

    render() {
      const { criteria } = this.state
      const { books, onUpdateBook } = this.props
        
        return(
            <div className="search-books">
            <div className="search-books-bar">
            <Link to='/' className='close-search'>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"
                  autoFocus
                  onChange={this.fetchBooks} />
              </div>
            </div>
           <SearchResults 
                criteria={criteria}
                books={books} 
                onUpdateBook={onUpdateBook} 
           />

          </div>
        );
    }
}

export default SearchBar;