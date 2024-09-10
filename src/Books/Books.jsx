import React from "react";
import AddBookCard from "./AddBookCard.jsx";
import MainContentCard from "./MainContentCard.jsx";
import WebSocketComponent from "../WebSocketComponent.jsx";
import "./Books.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
    console.log("useEffect ran");
  }, []);

  const getBooks = () => {
    axios
      .get("http://localhost/LMS_backend-files/api/readBook.php")
      .then(function (response) {
        console.log(response.data);
        setBooks(response.data.data);
      });
  };

  const handleWebSocketMessage = (message) => {
    console.log("wsc message received in books:", message);
    const newBook = JSON.parse(message); // Assuming the message is a JSON string
    console.log("Parsed new book:", newBook);
    setBooks((preveBook) => {
      const updatedBook = [...preveBook, newBook];
      console.log("Updated books state:", updatedBook);
      return updatedBook;
    });
  };

  return (
    <div className="wrapper">
      <MainContentCard books={books} />
      <AddBookCard />
      <WebSocketComponent onmessage={handleWebSocketMessage} />
    </div>
  );
}
