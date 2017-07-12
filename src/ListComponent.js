import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf';

class ListComponent extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                    {/*{JSON.stringify(this.props.books)}*/}
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf
                            books={this.props.books}
                            title="Currently Reading"
                            readingStatus="reading"
                            handleChange={this.props.handleChange}
                        />
                        <BookShelf
                            books={this.props.books}
                            title="Want to Read"
                            readingStatus="toRead"
                            handleChange={this.props.handleChange}
                        />
                        <BookShelf
                            books={this.props.books}
                            title="Read"
                            readingStatus="read"
                            handleChange={this.props.handleChange}
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
    }
}

export default ListComponent;
