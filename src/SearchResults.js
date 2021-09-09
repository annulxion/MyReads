import React, { Component } from 'react'
import Book from './Book';

class SearchResults extends Component {
    // pull in criteria and books state, and update fxn.
    // filter out items with no thumbnail pics and build Book components
    // via mapping
render() {
    const { criteria, books, onUpdateBook } = this.props
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
            
        </div>
        
    )
    
}


}

export default SearchResults;