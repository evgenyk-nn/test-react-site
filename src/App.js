import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h2>React Configure Base Path Example</h2>
      <div className="mb-5">
        <Link className="nav-link link-danger" to="/">
          Home
        </Link>
        <Link className="nav-link link-danger" to="profile">
          Profile
        </Link>
        <Link className="nav-link link-danger" to="contact">
          Contact
        </Link>
      </div>
      <div>
        <h3>
          <Nav />
        </h3>
      </div>
    </div>
  );
};
export default App;
