import React, { Component } from 'react'
import Book from './Book';

class Shelf extends Component {

    render() {
        const { shelf, books, onUpdateBook } = this.props
        return (
            <div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{`${shelf.title}`}</h2>
                  <div className="bookshelf-books">
                  <ol className='books-grid'>
                  {shelf.map((book)=> (
                    <Book key={book.id} book={book} books={books} onUpdateBook={onUpdateBook}/>
                ))}
                  </ol>
              </div>
              </div>
              </div>
              </div>
              </div>
              );
    }
}

export default Shelf;