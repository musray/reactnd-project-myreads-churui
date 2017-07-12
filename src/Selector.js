import React, { Component } from 'react';

const Selector = (props) => {
   return (
       <div className="book-shelf-changer">
           <select
               value={ props.book.status }
               onChange={(e) => {
                   // this.handleSelected(e);
                   props.handleChange(props.book, e.target.value);
               }}>
               <option value="none" disabled>Move to...</option>
               <option value="reading">Currently Reading</option>
               <option value="toRead">Want to Read</option>
               <option value="read">Read</option>
           </select>
       </div>
   )
};

export default Selector;
