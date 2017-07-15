import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class SearchComponent extends Component {
    state = {
        books: [],
    };

    // componentDidMount() {
    //     BooksAPI.search(this.state.query, 20)
    //         .then(books => {
    //             this.setState({books})
    //         });
    // }

    render() {
        const { books } = this.state;
        //
        // let showingBooks;
        // if (query) {
        //     const match = new RegExp(escapeRegExp(query), 'i');
        //     showingBooks = books.filter((book) => match.test(book.title))
        // } else {
        //     showingBooks = books;
        // }
        //
        // showingBooks.sort(sortBy('title'))
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
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                {JSON.stringify(books.map(book => ({ book })))}
                {/*<div className="search-books-results">*/}
                    {/*<ol className="books-grid"></ol>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default SearchComponent;
