import React from "react";
import "./BorrowedContent.css";
import { useEffect, useState } from "react";
import axios from "axios";

function AuthorContentCard() {
  const [borrows, setBorrows] = useState([]);

  useEffect(() => {
    getBorrows();
    console.log("useEffect ran");
  }, []);

  function getBorrows() {
    axios
      .get("http://localhost/LMS_backend-files/api/readBorrowBook.php")
      .then(function (response) {
        console.log(response.data);
        setBorrows(response.data.data);
      });
  }

  return (
    <>
      <div className="BorrowedContentContainer">
        <h1 className="borrow-title">Cristian Blake Laviano</h1>
        <center>
          <div className="borrow-scrollable-container">
            <table class="table table-hover table-striped">
              <thead class="table-dark">
                <tr>
                  <th scope="col">Borrow ID</th>
                  <th scope="col">Book ID</th>
                  <th scope="col">Member ID</th>
                  <th scope="col">Borrow Date</th>
                  <th scope="col">Due Date</th>
                  <th scope="col">Return Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {borrows.map((borrow, key) => (
                  <tr key={key}>
                    <td>{borrow.borrow_id}</td>
                    <td>{borrow.book_id}</td>
                    <td>{borrow.member_id}</td>
                    <td>{borrow.borrow_date}</td>
                    <td>{borrow.due_date}</td>
                    <td>{borrow.return_date}</td>
                    <td>{borrow.status}</td>
                    <td>
                      <button
                        type="submit"
                        class="btn btn-primary fw-bold mt-4 btn-lg"
                      >
                        Delete
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

export default AuthorContentCard;
