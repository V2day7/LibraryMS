import React from "react";
import "./BooksBorrowed.css";
import AddBorrowed from "./AddBorrowed.jsx";
import BorrowedContent from "./BorrowedContent.jsx";

function BooksBorrowed() {
  return (
    <div className="borrow-wrapper">
      <BorrowedContent />
      <AddBorrowed />
    </div>
  );
}

export default BooksBorrowed;
