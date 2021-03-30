import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import ArtistPage from "../pages/ArtistPage";
import HomePage from "../pages/HomePage";
/**
   * @func Routes handles all routes
   * @return {HTML}
   */
export default function Routes() {
  return (
    <Router>
      <Navbar />
      <div>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/:id" exact>
          <ArtistPage />
        </Route>
      </div>
    </Router>
  );
}
