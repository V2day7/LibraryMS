import React from "react";
import { useState } from "react";
import axios from "axios";
import LoginInput from "./LoginInput.jsx";
import "./Login.css";

export default function Login() {
  return (
    <div className="loginWrapper">
      <LoginInput />
    </div>
  );
}
