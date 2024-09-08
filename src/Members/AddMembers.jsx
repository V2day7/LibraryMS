import React from "react";
import "./AddMembers.css";
import Template from "../InputTemplate.jsx";
import { useState } from "react";
import axios from "axios";

export default function AddMemberCard() {
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    email: "",
    dob: "",
    address: "",
    contact_number: "",
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
      .post("http://localhost/LMS_backend-files/api/addMember.php", input, {
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
      <div className="addMemContainer">
        <center>
          <h3 className="addMem">Add a new Member!</h3>

          <hr className="line" />
          <form onSubmit={handleSubmit}>
            {/* input start */}
            <Template
              desc="First Name"
              type="text"
              name="first_name"
              value={input.first_name}
              onChange={handleChange}
            />
            <Template
              desc="Last Name"
              type="text"
              name="last_name"
              value={input.last_name}
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
              desc="Phone No."
              type="text"
              name="contact_number"
              value={input.contact_number}
              onChange={handleChange}
            />
            <Template
              desc="Date of Birth"
              type="date"
              name="dob"
              value={input.dob}
              onChange={handleChange}
            />
            <Template
              desc="Home Address"
              type="text"
              name="address"
              value={input.address}
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
