# NanoReact MyReads Project

This is built using the Git repo pulled from the MyReads Starter from Udacity

## Install Instructions

To get started:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Layout

This project uses BrowserRouter on the main App to switch between two pages:
'/' and '/search'

the home page is built with the Shelves component
the search page is built with the Search and SearchResults components
both pages utilize the Book and SelectButton components to build individual books, and the 'books' object carries the state between the two

The BooksApi file contains the API functions

