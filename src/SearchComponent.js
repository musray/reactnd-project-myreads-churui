import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'

class SearchComponent extends Component {
    state = {
        books: []
    };
    handleChange = (e) => {
        // const books = BooksAPI.search(e.target.value, 20);
        // this.setStatus({books: books})
        console.log(e.target.value)
    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to="/"
                        className="close-search"
                    />
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={(e) => {
                                console.log(e.target.value)
                                this.handleChange(e)
                            }}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
            </div>
        )
    }
}

export default SearchComponent;
