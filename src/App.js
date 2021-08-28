import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import Shelves from './Shelves'
import SearchBar from './Search'

class BooksApp extends React.Component {
  state = {
    books: []
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
    BooksAPI.get(book)
   .then((book) => {
     this.setState((prevState) => {
        prevState[book].shelf = book.shelf
     })
   })
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
