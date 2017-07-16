import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as _ from 'lodash';
import * as BooksAPI from './BooksAPI';
// import escapeRegExp from 'escape-string-regexp';
// import sortBy from 'sort-by';
import BookShelf from './BookShelf';

class SearchComponent extends Component {
    state = {
        result: []
    };

    handleQuery = _.debounce(q => {
        if (!q) return;
        BooksAPI.search(q, 20)
            .then(books => {
                this.setState({
                    result: books.error ? [] : books
                })
            });
    }, 500);

    render() {
        const { result } = this.state;
        const { handleChange } = this.props;
        return (
            <div className="list-books">
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
                                onChange={(event) => this.handleQuery(event.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div style={{height: 50}}></div>
                <div className="list-books-content">
                    <div>
                        {result.filter(book => book.shelf === 'currentlyReading').length > 0 && (
                            <BookShelf
                                books={result}
                                title="Currently Reading"
                                readingStatus="currentlyReading"
                                handleChange={handleChange}
                            />
                        )}
                        {result.filter(book => book.shelf === 'wantToRead').length > 0 && (
                            <BookShelf
                                books={result}
                                title="Want to Read"
                                readingStatus="wantToRead"
                                handleChange={handleChange}
                            />
                        )}
                        {result.filter(book => book.shelf === 'read').length > 0 && (
                            <BookShelf
                                books={result}
                                title="Read"
                                readingStatus="read"
                                handleChange={handleChange}
                            />
                        )}
                        {result.filter(book => book.shelf === 'none').length > 0 && (
                            <BookShelf
                                books={result}
                                title="None"
                                readingStatus="none"
                                handleChange={handleChange}
                            />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchComponent;
