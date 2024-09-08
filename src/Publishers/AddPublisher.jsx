import React from "react";
import "./AddPublisher.css";
import Template from "../InputTemplate.jsx";
import axios from "axios";
import { useState } from "react";

function AddPublisher() {
  const [input, setInput] = useState({
    publisher_name: "",
    address: "",
    contact_number: "",
    email: "",
    website: "",
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
      .post("http://localhost/LMS_backend-files/api/addPublisher.php", input, {
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
      <div className="addPubContainer">
        <center>
          <h3 className="addPub">Add a new Publisher!</h3>
          <hr className="line" />
          <form onSubmit={handleSubmit}>
            {/* input start */}
            <Template
              desc="Name"
              type="text"
              name="publisher_name"
              value={input.publisher_name}
              onChange={handleChange}
            />
            <Template
              desc="Address"
              type="text"
              name="address"
              value={input.address}
              onChange={handleChange}
            />
            <Template
              desc="Contact Number"
              type="text"
              name="contact_number"
              value={input.contact_number}
              onChange={handleChange}
            />
            <Template
              desc="Email"
              type="text"
              name="email"
              value={input.email}
              onChange={handleChange}
            />
            <Template
              desc="Website"
              type="text"
              name="website"
              value={input.website}
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

export default AddPublisher;
