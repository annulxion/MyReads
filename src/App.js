import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import Shelves from './Shelves'
import SearchBar from './Search'

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: ["wantToRead", "currentlyReading", "read"]
  }
  componentDidMount() {
    BooksAPI.getAll()
.then((books) => {
  this.setState(() => ({
    books
  }))
  console.log(books)
})
  }
  
  updateBook = (book) => {
    BooksAPI.update(book, book.shelf)
   .then((book) => {
     this.setState((currentState) => ({
       contacts: currentState.books.concat([book])
     }))
   })
  }

  searchBook = (query) => {
    BooksAPI.search(query, 20)
  }
  
  render() {
    return (
      <div className="app">
           <Route path='/search' render={({ history }) => (
          <SearchBar 
              onUpdateBook={(book) => {
                this.updateBook(book)
                history.push('/')
              }}
              onSearchBook={this.searchBook}
              />
          )} />
            <Route exact path='/' render={() => (
          <Shelves 
          books={this.state.books}
          onUpdateBook={(book) => {
            this.updateBook(book)
          }}
          />
          )} /> 
      </div> 
    );
  }
}

export default BooksApp
