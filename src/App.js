import React from 'react';
import { Route} from 'react-router-dom';
import SearchComponent from './SearchComponent';
import ListComponent from './ListComponent';
import * as BooksAPI from './BooksAPI';
import './App.css'

class App extends React.Component {

  state = {
      books: []
  };

  componentDidMount() {
      console.log('App.js componentDidMount');
      BooksAPI.getAll()
          .then(books => {
              this.setState({books})
          });
  };

  handleChange = (book, status) => {
      console.log(`App.js: handleChange(${book.title}, ${status})`);

      BooksAPI.update(book, status)
          .then(res => console.log('return resutl by update', res))
          .then(res => {
              BooksAPI.getAll()
                  .then(books => {
                      this.setState({books})
                  });
          });
  };

  render() {
    return (
      <div className="app">
          <Route
              exact path="/"
              render={() => (
                  <ListComponent
                      books={this.state.books}
                      handleChange={this.handleChange.bind(this)}
                  />
              )}
          />
          <Route
              path="/search"
              render={() => (
                  <SearchComponent
                      handleChange={this.handleChange.bind(this)}
                  />
              )}
          />
      </div>
    )
  }
}

export default App;
