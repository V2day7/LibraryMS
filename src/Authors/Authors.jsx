import React from "react";
import AuthorContentCard from "./AuthorContentCard.jsx";
import AddAuthorCard from "./AddAuthorCard.jsx";
import WebSocketComponent from "../WebSocketComponent.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Authors() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    console.log("useEffect ran!");
    getAuthors();
  }, []);

  const getAuthors = () => {
    axios
      .get("http://localhost/LMS_backend-files/api/readAuthor.php")
      .then(function (response) {
        console.log(response.data);
        setAuthors(response.data.data);
      });
  };

  const handleWebSocketMessage = (message) => {
    console.log("wsc message received in authors:", message);
    const newAuthor = JSON.parse(message); // Assuming the message is a JSON string
    console.log("Parsed new author:", newAuthor);
    setAuthors((prevAuthors) => {
      const updatedAuthors = [...prevAuthors, newAuthor];
      console.log("Updated authors state:", updatedAuthors);
      return updatedAuthors;
    });
  };

  return (
    <div className="wrapper">
      <AuthorContentCard authors={authors} />
      <AddAuthorCard />
      <WebSocketComponent onmessage={handleWebSocketMessage} />
    </div>
  );
}
