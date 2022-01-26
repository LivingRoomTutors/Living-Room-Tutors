import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector } from "react-redux";
import "../AdminNavBar/AdminNavBar.css";
import Logo from "../../images/Logo.png";

function AdminNavBar() {
  const user = useSelector((store) => store.user);

  return (
    <div className="AdminNav">
      <Link to="/admin">
        <img src={Logo} className="navLogo" />
      </Link>

      {/* If no user is logged in, show these links */}
      {user.id === null && (
        // If there's no user, show login/registration links
        <Link className="navLink" to="/login">
          Login / Register
        </Link>
      )}

      {/* If a user is logged in, show these links */}
      {user.id && (
        <div className="adminNavContents">
          <div className="AdminNavLinks">
            <Link className="AdminNavLink" to="/admin">
              Tutees
            </Link>

            <Link className="AdminNavLink" to="/tutors">
              Tutors
            </Link>

            <Link className="AdminNavLink" to="/records">
              Records
            </Link>
          </div>
          <div className="logoutButton">
            <LogOutButton />
          </div>
        </div>
      )}

      {/* <Link className="navLink" to="/about">
          About
        </Link> */}
    </div>
  );
}

export default AdminNavBar;
