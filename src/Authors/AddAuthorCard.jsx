import React, { useState } from "react";
import "./AddAuthorCard.css";
import Template from "../InputTemplate.jsx";
import axios from "axios";

export default function AddAuthorCard() {
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
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
      .post("http://localhost/LMS_backend-files/api/addAuthor.php", input, {
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
      <div className="addAuthorContainer">
        <center>
          <h3 className="addAuthor">Add a new Author!</h3>
          <hr className="line" />
          {/* input start */}
          <form onSubmit={handleSubmit}>
            <Template
              desc="First Name"
              type="text"
              value={input.first_name}
              name="first_name"
              onChange={handleChange}
            />
            <Template
              desc="Last Name"
              type="text"
              value={input.last_name}
              name="last_name"
              onChange={handleChange}
            />
            {/* input end */}
            <button
              type="submit"
              className="btn btn-primary fw-bold mt-4 btn-lg"
            >
              Submit
            </button>
          </form>
        </center>
      </div>
    </>
  );
}
