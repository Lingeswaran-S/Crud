import React from "react";
import Create from "./components/Create";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";

function Routing() {
  return (
    <Router>
      <Link to="/create" className="badge-primary p-1 mb-3 mr-3">
        Create
      </Link>
      <Link to="/read" className="badge-success mr-3 p-1 mb-3">
        Read
      </Link>
      <Route path="/create" component={Create}></Route>
      <Route path="/read" component={Read}></Route>
      <Route path="/update" component={Update}></Route>
    </Router>
  );
}

export default Routing;
