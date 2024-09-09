import React from "react";
import AddBookCard from "./AddBookCard.jsx";
import MainContentCard from "./MainContentCard.jsx";
import WebSocketComponent from "../WebSocketComponent.jsx";
import "./Books.css";

export default function Books() {
  return (
    <div className="wrapper">
      <MainContentCard />
      <AddBookCard />
      <WebSocketComponent />
    </div>
  );
}
