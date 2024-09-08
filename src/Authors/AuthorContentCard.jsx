import React from "react";
import "./AuthorContentCard.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AuthorContentCard() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors();
  }, []);

  function getAuthors() {
    axios
      .get("http://localhost/LMS_backend-files/api/readAuthor.php")
      .then(function (response) {
        console.log(response.data);
        setAuthors(response.data.data);
      });
  }

  return (
    <>
      <div className="AuthorContentContainer">
        <h1 className="title">Cristian Blake Laviano</h1>
        <center>
          <div className="auth-scrollable-container">
            <table class="table table-hover table-striped">
              <thead class="table-dark">
                <tr>
                  <th scope="col">Author ID</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                {authors.map((author, key) => (
                  <tr key={key}>
                    <td>{author.author_id}</td>
                    <td>{author.first_name}</td>
                    <td>{author.last_name}</td>
                    <td>
                      <button
                        type="submit"
                        class="btn btn-primary fw-bold mt-4 btn-sm"
                      >
                        Submit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </center>
      </div>
    </>
  );
}
