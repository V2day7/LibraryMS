import React from "react";
import AuthorContentCard from "./AuthorContentCard.jsx";
import AddAuthorCard from "./AddAuthorCard.jsx";

export default function Authors() {
  return (
    <div className="wrapper">
      <AuthorContentCard />
      <AddAuthorCard />
    </div>
  );
}
