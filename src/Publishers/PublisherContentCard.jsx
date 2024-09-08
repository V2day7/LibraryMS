import React from "react";
import "./PublisherContentCard.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PublisherContentCard() {
  const [publishers, setPublishers] = useState([]);

  useEffect(() => {
    getPublishers();
  }, []);

  function getPublishers() {
    axios
      .get("http://localhost/LMS_backend-files/api/readPublisher.php")
      .then(function (response) {
        console.log(response.data);
        setPublishers(response.data.data);
      });
  }

  return (
    <>
      <div className="pubContentContainer">
        <h1 className="pub-title">Cristian Blake Laviano</h1>
        <center>
          <div className="pub-scrollable-container">
            <table class="table table-hover table-striped">
              <thead class="table-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Email</th>
                  <th scope="col">Website</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                {publishers.map((publisher, key) => (
                  <tr key={key}>
                    <td>{publisher.publisher_id}</td>
                    <td>{publisher.publisher_name}</td>
                    <td>{publisher.address}</td>
                    <td>{publisher.contact_number}</td>
                    <td>{publisher.email}</td>
                    <td>{publisher.website}</td>
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
