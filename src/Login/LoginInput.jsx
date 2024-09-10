import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginInput.css";
import Template from "../InputTemplate.jsx";

export default function LoginInput() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setCredentials((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(credentials);

    axios
      .post(
        "http://localhost/LMS_backend-files/api/userLogin.php",
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response.data);
        if (response.data.status === 200) {
          console.log("Login successful!");
          navigate("/");
          // Redirect to the dashboard
        } else {
          console.log("Login failed!");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <center>
      <form onSubmit={handleSubmit}>
        <div className="inputsContainer">
          <Template
            desc="Email"
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
          <Template
            desc="Password"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary fw-bold mt-4 btn-lg">
            Login
          </button>
        </div>
      </form>
    </center>
  );
}
