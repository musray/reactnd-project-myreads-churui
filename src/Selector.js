import React, { Component } from 'react';

const Selector = (props) => {
   return (
       <div className="book-shelf-changer">
           <select
               value={ props.book.shelf }
               onChange={(e) => {
                   // this.handleSelected(e);
                   props.handleChange(props.book, e.target.value);
               }}>
               <option value="none" disabled>Move to...</option>
               <option value="currentlyReading">Currently Reading</option>
               <option value="wantToRead">Want to Read</option>
               <option value="read">Read</option>
               <option value="none">None</option>
           </select>
       </div>
   )
};

export default Selector;
