import React from "react";
import "./Members.css";
import AddMembers from "./AddMembers.jsx";
import MembersContent from "./MembersContent.jsx";

export default function Members() {
  return (
    <div className="mem-wrapper">
      <MembersContent />
      <AddMembers />
    </div>
  );
}
