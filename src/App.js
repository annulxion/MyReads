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
    this.setState(() => ({
      
   }))

   BooksAPI.update(book, book.shelf)
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
          onUpdateBook={this.updateBook}
          />
          )} /> 
      </div> 
    );
  }
}

export default BooksApp
