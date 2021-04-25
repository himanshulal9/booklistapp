import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";
const BookForm = () => {
  const { addBook } = useContext(BookContext);

  //state for input fields
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  //handle form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        <input
          type='text'
          value={title}
          placeholder='Book Title'
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        <input
          type='text'
          value={author}
          placeholder='Book Author'
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </label>
      <button type='submit'>Add Book</button>
    </form>
  );
};

export default BookForm;
