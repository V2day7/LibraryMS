import React from "react";
import "./MainContentCard.css";
import BookTemplate from "./BookTemplate.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import cutie from "../assets/cutie.jpg";
import egg from "../assets/eggy.jpg";

export default function mainContentContainer() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
    console.log("useEffect ran");
  }, []);

  function getBooks() {
    axios
      .get("http://localhost/LMS_backend-files/api/readBook.php")
      .then(function (response) {
        console.log(response.data);
        setBooks(response.data.data);
      });
  }

  return (
    <>
      <div className="mainContentContainer">
        <h1 className="title">Cristian Blake Laviano</h1>
        <center>
          <div className="scrollable-container ">
            {books.map((book, key) => (
              <BookTemplate
                key={key}
                img={egg}
                title={book.title}
                year={book.publication_year}
                location={book.shelf_location}
                genre={book.genre}
              />
            ))}
          </div>
        </center>
      </div>
    </>
  );
}
