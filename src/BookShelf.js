import React from 'react';
import Selector from './Selector';

class BookShelf extends React.Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books && this.props.books
                            .filter(book => book.shelf === this.props.readingStatus)
                            .map((book) => (
                                <li key={book.id}>
                                    <div className="book">
                                        <div className="book-top">
                                            <div
                                                className="book-cover"
                                                style={{
                                                    width: 128,
                                                    height: 193,
                                                    backgroundImage: `url("${book.imageLinks? book.imageLinks.thumbnail: ''}")`
                                                }} >
                                            </div>
                                            <Selector book={ book } handleChange={this.props.handleChange}/>
                                        </div>
                                        <div className="book-title">{ book.title }</div>
                                        <div className="book-authors">{ book.authors }</div>
                                    </div>
                                </li>
                            ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;
