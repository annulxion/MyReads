import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import debounce from "lodash.debounce";
import SearchResults from './SearchResults';

class SearchBar extends Component {
  state = {
    criteria: []
  }

  handleCriteriaChange = criteria => {
    this.setState({ criteria: criteria });
  };

  notifyOnChange = newCriteria => {
    this.handleCriteriaChange(newCriteria);
  };

  handleMatchingChange = debounce(event => {
    const { value } = event.target;

    let newValue;
    if (value) {
      newValue = value;
    } else {
      newValue= undefined;
    }

    const newCriteria = {
      ...this.props.criteria,
      matching: newValue
    };
    
    this.notifyOnChange(newCriteria);
    
  }, 300);

  searchBook = (e) => {
    BooksAPI.search(e, 20)
    .then((criteria) => {
      this.setState({ criteria: criteria});
    })
  }

    render() {
      const criteria = this.state.criteria
      const { onUpdateBook } = this.props
        
        return(
            <div className="search-books">
            <div className="search-books-bar">
            <Link to='/' className='close-search'>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="search" placeholder="Search by title or author"
                defaultValue={criteria}
                autoFocus
                  onChange={(e) => {
                    e.persist();
                    this.searchBook(e);
                  }}
                   />
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