import React from "react";
import "./BookTemplate.css";

function BookTemplate(bookProp) {
  const handleCardClick = () => {
    console.log("Card clicked!");
  };

  return (
    <div className="card-parent" onClick={handleCardClick}>
      <img className="card-image" alt="egg" src={bookProp.img}></img>
      <h2 className="card-title">{bookProp.title}</h2>
      <p className="card-text">{bookProp.year}</p>
      <p className="card-text">{bookProp.location}</p>
      <p className="card-text">{bookProp.genre}</p>
    </div>
  );
}

export default BookTemplate;
