import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
//import debounce from "lodash.debounce";
import SearchResults from './SearchResults';

class SearchBar extends Component {
  state = {
    criteria: []
  }

  searchBook = (query) => {
    BooksAPI.search(query, 20)
    .then((criteria) => {
      this.setState(() => ({
        criteria
      }))
      console.log(criteria)
    })
      }

    render() {
      const { onUpdateBook } = this.props
        
        return(
            <div className="search-books">
            <div className="search-books-bar">
            <Link to='/' className='close-search'>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="search" placeholder="Search by title or author"
                defaultValue=''
                autoFocus
                  onChange={this.searchBook} />
              </div>
            </div>
           <SearchResults 
                criteria={this.state.criteria} 
                onUpdateBook={onUpdateBook}  
           />

          </div>
        );
    }
}

export default SearchBar;