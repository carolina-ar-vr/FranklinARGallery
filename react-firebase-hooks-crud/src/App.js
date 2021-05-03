import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddEntity from "./components/AddEntity";
import EntityList from "./components/EntityList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/entities" className="navbar-brand">
          bezKoder
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/entities"} className="nav-link">
              entities
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <h2>React Firebase Hooks CRUD</h2>
        <Switch>
          <Route exact path={["/", "/entities"]} component={EntityList} />
          <Route exact path="/add" component={AddEntity} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
