import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf';

const ListComponent = (props) => {
   return (
       <div className="list-books">
           <div className="list-books-title">
               <h1>MyReads</h1>
               {/*{JSON.stringify(this.props.books)}*/}
           </div>
           <div className="list-books-content">
               <div>
                   <BookShelf
                       books={props.books}
                       title="Currently Reading"
                       readingStatus="currentlyReading"
                       handleChange={props.handleChange}
                   />
                   <BookShelf
                       books={props.books}
                       title="Want to Read"
                       readingStatus="wantToRead"
                       handleChange={props.handleChange}
                   />
                   <BookShelf
                       books={props.books}
                       title="Read"
                       readingStatus="read"
                       handleChange={props.handleChange}
                   />
               </div>
           </div>
           <div className="open-search">
               <Link to="/search" className="open-search">
                   Add a book
               </Link>
           </div>
       </div>
   )
};

export default ListComponent;
