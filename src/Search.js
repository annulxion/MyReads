import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchResults from './SearchResults';

class SearchBar extends Component {
  state = {
    criteria: [],
    error: false
  };

  searchBook =(search) => {
    if (search) {
    BooksAPI.search(search.trim(), 20)
    .then(books => {
        books.length > 0
        ? this.setState({ criteria: books, error: false })
        : this.setState({ criteria: [], error: true });
      });

      } else this.setState({ criteria: [], error: false })
}

fetchBooks = e => {
  this.searchBook(e.target.value)
}

    render() {
      const { criteria, error } = this.state
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
                error={error}  
           />

          </div>
        );
    }
}

export default SearchBar;