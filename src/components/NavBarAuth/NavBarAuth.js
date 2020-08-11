import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import { signOut } from "../../utilities/firebase";

import { useCurrentUserValue } from "../../context";

const NavBarAuth = () => {
  const currentUser = useCurrentUserValue();

  // console.log(currentUser);
  return (
    <div className="NavBar">
      <div className="logo">
        <Link to={ROUTES.HOME}>
          <h1>wine</h1>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={ROUTES.ABOUT}>About</Link>
          </li>
          <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
          </li>
          <li>
            <Link to={ROUTES.PROFILE}>Profile</Link>
          </li>
          {!currentUser && (
            <li>
              <Link to={ROUTES.SIGNIN}>Sign In</Link>
            </li>
          )}

          {currentUser && (
            <li>
              <span onClick={signOut}>Sign Out</span>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default NavBarAuth;
