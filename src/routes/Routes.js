import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Artist from "../pages/Artist";
import Home from "../pages/Home";

export default function Routes() {
  return (
    <Router>
      <Navbar />
      <div>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:id" exact>
          <Artist />
        </Route>
      </div>
    </Router>
  );
}
