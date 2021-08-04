import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/weekly">Weekly</Link>
        </li>
        <li>
          <Link to="/weekly-battle">Weekly Battle</Link>
        </li>
        <li>
          <Link to="/popular">Popular</Link>
        </li>
        <li>
          <Link to="/popular-battle">Popular Battle</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </nav>
    );
  }
}

export default Navbar;
