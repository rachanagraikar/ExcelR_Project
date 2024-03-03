/* eslint-disable no-unused-vars */
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { doLogout, getCurrentUserData, isUserLoggedIn } from "../Auth/index";
import { useEffect, useState } from "react";

export const MyNavbar = () => {
  const navigate = useNavigate();

  const handleUserProfile = () => {
    navigate("/dashboard/userProfile");
  };

  const [login, setLogin] = useState(false);
  // const [userProfile, setUserProfile] = useState("");

  useEffect(() => {
    setLogin(isUserLoggedIn());
    // setUserProfile(getCurrentUserData);
  }, [login]);

  // console.log(login);

  // ------------LOGOUT
  const handleLogout = () => {
    console.log("Loggin out ...");
    doLogout(() => {
      setLogin(false);
      navigate("/");
    });
  };

  // ---------------------RETURN
  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "#FFC017" }}
        // style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <div className="container mx-5 ">
          <Link className="navbar-brand  fw-bold fs-2" to="#">
            Get Hooked
          </Link>

          <button
            className="navbar-toggler fw-semibold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Collapseable */}
        <div
          className="collapse navbar-collapse me-5 "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link  fw-semibold"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/about">
                About
              </Link>
            </li>

            {/* temporary. */}
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/register">
                SignUp
              </Link>
            </li>
            <br />
          </ul>

          {/* when user is not logged in */}
          {!login && (
            <>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/register">
                  SignUp
                </Link>
              </li>
            </>
          )}

          {/* Logout and access user profile. (if user is already logged in)*/}
          {login && (
            <>
              <button
                className="btn  fw-regular"
                onClick={handleLogout}
                id="myButton"
              >
                Logout
              </button>
              &nbsp;
              <button
                className="btn  fw-regular"
                onClick={handleUserProfile}
                id="myButton"
              >
                <FontAwesomeIcon icon={faUser} className="text-start" />
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};
