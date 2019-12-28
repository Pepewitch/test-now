import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" exact component={() => "Hello"} />
      <Route path="/1" exact component={() => "Hello1"} />
      <Route path="/2" exact component={() => "Hello2"} />
    </Router>
  );
}

export default App;
