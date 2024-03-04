import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <li>
        <Link to="/amc">AMC Theaters</Link>
      </li>
      <li>
        <Link to="/regal">Regal Theaters</Link>
      </li>
    </div>
  );
};

export default Navbar;
