import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="navWrapper p-20 flex">
        <li>
          <Link className="navLink" to="/">
            Accueil
          </Link>
        </li>
        <li>
          <Link className="navLink ms-10" to="/favorites">
            Favoris
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
