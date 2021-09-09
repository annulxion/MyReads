import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import Shelves from './Shelves'
import SearchBar from './Search'

class BooksApp extends React.Component {
  // Our state for books on both pages
  state = {
    books: []
  }

  // Initialize by pulling all books through GET
  componentDidMount() {
    BooksAPI.getAll()
.then((books) => {
  this.setState(() => ({
    books
  }))
  console.log(books)
})
  }
  
  // update backend via API and then concat the new book 
  // to state object, while filtering out matching id's 
  updateBook = (newBook) => {
   BooksAPI.update(newBook, newBook.shelf)
   .then(response => {
     this.setState(prevState => ({
       books: prevState.books.filter(book => book.id !== newBook.id)
       .concat(newBook)
  }))
})
  }
  
  render() {
    return (
      // use BrowserRouter to generate home ('/') page, and search page
      // also use history.push so that we persist data when using 
      // browser's back button
      <div className="app">
           <Route path='/search' render={({ history }) => (
          <SearchBar 
          books={this.state.books}
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
