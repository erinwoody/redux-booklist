import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started!</div>;
    }
    return (
      <div className="bookDetails">
        <h3> Details for: </h3>
        <h4 className="title">{this.props.book.title}</h4>
        <div>{this.props.book.pages} pages</div>
        <div>Author: {this.props.book.author}</div>
        <div>Price: ${this.props.book.price} USD</div>
        <div>
          Published: {this.props.book.published_date} by{" "}
          {this.props.book.publisher}
        </div>
        <div>Genre: {this.props.book.category.join(", ")} </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
