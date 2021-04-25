//pre set of book
//remove a book/
// fn for adding a book
import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  //book list
  const [books, setBooks] = useState([
    { id: "1", title: "King Aurthr", author: "Well known Writter" },
    { id: "2", title: "Prince of Percia", author: "Camreon jeflegacy" },
  ]);

  //fn for adding a book
  const addBook = (title, author) => {
    setBooks([...books, { id: books.length + 1, title, author }]);
  };

  //fn remove a book
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
