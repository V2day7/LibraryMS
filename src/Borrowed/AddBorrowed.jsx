import React from "react";
import "./AddBorrowed.css";
import Template from "../InputTemplate.jsx";
import { useState } from "react";
import axios from "axios";

export default function AddBorrowed() {
  const [selectedOption, setSelectedOption] = useState("3");

  const [input, setInput] = useState({
    book_id: "",
    member_id: "",
    return_date: "",
    status: "3",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    setInput((values) => ({ ...values, status: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    axios
      .post("http://localhost/LMS_backend-files/api/addBorrowBook.php", input, {
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
      <div className="addBorrowContainer">
        <center>
          <h3 className="addBorrow">Borrow a Book!</h3>
          <hr className="line" />
          {/* input start */}
          <form onSubmit={handleSubmit}>
            <Template
              desc="Book ID"
              type="text"
              name="book_id"
              value={input.book_id}
              onChange={handleChange}
            />
            <Template
              desc="Member ID"
              type="text"
              name="member_id"
              value={input.member_id}
              onChange={handleChange}
            />
            <Template
              desc="Return Date"
              type="text"
              name="return_date"
              value={input.return_date}
              onChange={handleChange}
            />
            <select
              class="form-select mt-4"
              aria-label="Default select example"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="3">Borrow Status</option>
              <option value="Borrowed">Borrowed</option>
              <option value="Returned">Returned</option>
            </select>
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
