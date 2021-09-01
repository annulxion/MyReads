import React, { Component } from 'react'
import Book from './Book';

class SearchResults extends Component {
render() {
    const { criteria, books, onUpdateBook, error } = this.props
    const noThumbnail = criteria.filter(book => book.imageLinks)
    return( 
        <div className="search-books-results">
            {noThumbnail.length > 0 && (
            <ol className="books-grid">
              {noThumbnail.map((book)=> (
                    <Book key={book.id} book={book} books={books} onUpdateBook={onUpdateBook}/>
                ))}
                
            </ol>
            )}
            {error && (
                <h3>No results</h3>
            )}
            
        </div>
        
    )
    
}


}

export default SearchResults;