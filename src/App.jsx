import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Books from "./Books/Books.jsx";
import Authors from "./Authors/Authors.jsx";
import Members from "./Members/Members.jsx";
import BooksBorrowed from "./Borrowed/BooksBorrowed.jsx";
import Publishers from "./Publishers/Publisher.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="parentContainer">
      <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-custom">
          <div class="container-fluid">
            <h2 className="titleTxt">Library System</h2>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <Link to="/" class="nav-link">
                    Books
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/Authors" class="nav-link">
                    Authors
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/Publishers" class="nav-link">
                    Publishers
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/Members" class="nav-link">
                    Members
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/BooksBorrowed" class="nav-link">
                    Books Borrowed
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/Authors" element={<Authors />} />
          <Route path="/Publishers" element={<Publishers />} />
          <Route path="/Members" element={<Members />} />
          <Route path="/BooksBorrowed" element={<BooksBorrowed />} />
        </Routes>
      </Router>
    </div>
  );
}
