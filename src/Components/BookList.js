import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";
import BookForm from "./BookForm";

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className='book-list'>
      <ul>
        {books.map((book) => (
          <BookDetails key={book.id} book={book} />
        ))}
        <h4>Add your book from here</h4>
        <BookForm />
      </ul>
    </div>
  ) : (
    <div className='empty'>No Books to read :- hello free time</div>
  );
};

export default BookList;
