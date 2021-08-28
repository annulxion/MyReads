import React, { Component } from 'react'
import Book from './Book';

class SearchResults extends Component {
render() {
    const { criteria, onUpdateBook } = this.props

    if (criteria.length === 0) return <h2>No data found</h2>
    return(
        
        <div className="search-books-results">
            <ol className="books-grid">
              {criteria.map((book)=> (
                    <Book book={book} onUpdateBook={onUpdateBook}/>
                ))}
            </ol>
        </div>
    )
}


}

export default SearchResults;