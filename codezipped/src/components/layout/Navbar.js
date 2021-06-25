import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav>
      <div class="nav-wrapper">
        <Link to="/" class="brand-logo center">
          CodeZipped
        </Link>
        <ul class="left hide-on-med-and-down">
          <li>
            <NavLink to="/problems">Problems</NavLink>
          </li>
        </ul>
        <ul class="right hide-on-med-and-down">
          <li>
            <NavLink to="/aboutme">About Me</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
