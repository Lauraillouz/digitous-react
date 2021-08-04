import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/weekly">
                  Weekly
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/weekly-battle"
                >
                  Weekly Battle
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/popular">
                  Popular
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/popular-battle"
                >
                  Popular Battle
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/favorites">
                  Favorites
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
