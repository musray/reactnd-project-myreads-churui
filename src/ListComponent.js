import React, { Component } from 'react';

class Selector extends Component {
    constructor(props) {
        super(props);
        this.handleSelected = this.handleSelected.bind(this);
        this.state = { selected: '' };
    }

    handleSelected = (e) => {
        e.preventDefault();
        this.setState({ selected: e.target.value })
    };

    componentDidMount() {
        this.setState({ selected: this.props.book.status })
    }

    render() {
        return (
            // TODO 如何处理selector的勾选状态？
            <div className="book-shelf-changer">
                <select
                    value={ this.state.selected }
                    onChange={(e) => {
                        this.handleSelected(e);
                        this.props.handleChange(this.props.book, e.target.value);
                }}>
                    <option value="none" disabled>Move to...</option>
                    <option value="reading">Currently Reading</option>
                    <option value="toRead">Want to Read</option>
                    <option value="read">Read</option>
                </select>
            </div>
        )
    }
}

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
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.props.books
                                        .filter(book => book.status === 'reading')
                                        .map((book, index) => (
                                            <li key={index}>
                                                <div className="book">
                                                    <div className="book-top">
                                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.url }}></div>
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
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.props.books
                                        .filter(book => book.status === 'toRead')
                                        .map((book, index) => (
                                            <li key={index}>
                                                <div className="book">
                                                    <div className="book-top">
                                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.url }}></div>
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
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.props.books
                                        .filter(book => book.status === 'read')
                                        .map((book, index) => (
                                            <li key={index}>
                                                <div className="book">
                                                    <div className="book-top">
                                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.url }}></div>
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
                    </div>
                </div>
                {/*<div className="open-search">*/}
                    {/*<a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default ListComponent;

