import React from "react";
import "./AddBookCard.css";
import Template from "../InputTemplate.jsx";
import { useState } from "react";
import axios from "axios";

export default function AddBookCard() {
  const [input, setInput] = useState({
    title: "",
    author_id: "",
    publisher_id: "",
    publication_year: "",
    genre: "",
    shelf_location: "",
    num_of_copies: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    axios
      .post("http://localhost/LMS_backend-files/api/addBook.php", input, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response.data);
      });
  };
  return (
    <>
      <div className="addCardContainer">
        <center>
          <h3 className="addBook">Add a new Book!</h3>
          <hr className="line" />
          <form onSubmit={handleSubmit}>
            {/* input start */}
            <Template
              desc="Title"
              type="text"
              name="title"
              value={input.title}
              onChange={handleChange}
            />
            <Template
              desc="Author"
              type="text"
              name="author_id"
              value={input.author_id}
              onChange={handleChange}
            />
            <Template
              desc="Pubsliher"
              type="text"
              name="publisher_id"
              value={input.publisher_id}
              onChange={handleChange}
            />
            <Template
              desc="Publication Year"
              type="date"
              name="publication_year"
              value={input.publication_year}
              onChange={handleChange}
            />
            <Template
              desc="Genre"
              type="text"
              name="genre"
              value={input.genre}
              onChange={handleChange}
            />
            <Template
              desc="Shelf Location"
              type="text"
              name="shelf_location"
              value={input.shelf_location}
              onChange={handleChange}
            />
            <Template
              desc="Total Copies"
              type="text"
              name="num_of_copies"
              value={input.num_of_copies}
              onChange={handleChange}
            />
            {/* input end */}
            <button type="submit" class="btn btn-primary fw-bold mt-4 btn-lg">
              Submit
            </button>
          </form>
        </center>
      </div>
    </>
  );
}
