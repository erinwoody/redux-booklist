import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {
  render() {
    let books = this.props.books.map((book, index) => (
      <li
        key={book.id}
        className="bookItem"
        onClick={() => this.props.selectBook(book)}
      >
        {book.title}
      </li>
    ));

    return <ul className="bookList">{books}</ul>;
  }
}

function mapStateToProps(state) {
  console.log("mapstate", state.books);
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
