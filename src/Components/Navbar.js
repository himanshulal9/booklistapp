import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

export default function Navbar(props) {
  //using context
  const { books, addBook, removeBook } = useContext(BookContext);
  console.log(books, addBook, removeBook);
  return (
    <div className='navbar'>
      <h1>Himanshu's' Book Lists</h1>
      <p>Currently you have {books.length} Books to get through ...</p>
    </div>
  );
}
