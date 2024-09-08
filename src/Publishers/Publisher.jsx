import React from "react";
import PublisherContent from "./PublisherContentCard.jsx";
import AddPublisher from "./AddPublisher.jsx";
import "./Publisher.css";

export default function Publishers() {
  return (
    <div className="pub-wrapper">
      <PublisherContent />
      <AddPublisher />
    </div>
  );
}
