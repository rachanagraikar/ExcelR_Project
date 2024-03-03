/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Base } from "../Components/Base";
import { ErrorToast } from "../Components/Errors/ErrorToast";
import { CreatePost } from "../Components/CreatePost";

export const Register = () => {
  //
  const centerDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const navigate = useNavigate(); // Initialize the navigate function

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [token, setToken] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: username,
        email: email,
        userPassword: password,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      const token = data.token; // Extract the token from the response
      setToken(token);
      sessionStorage.setItem("token", token);
      navigate("/");
    } else {
      // Handle error
      const errorMessage = await response.text();
      setError(errorMessage);
      setShowError(true);
    }
  };

  const handleCloseError = () => {
    setShowError(false);
  };

  return (
    <>
      <Base>
        <br />
        <div>
          <h1 className="text-center">Register</h1>
          <form
            className="container text-start bg-white "
            style={{ width: "50vw" }}
            onSubmit={handleRegister} // Add onSubmit handler to the form
          >
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text" // Use "text" for username
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label">
                Agree to terms and conditions
              </label>
            </div>
            <div style={centerDiv}>
              <button type="submit" className="btn text-center" id="myButton">
                Sign Up
              </button>
              <br />
              <p>OR</p>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <ErrorToast
                show={showError}
                onClose={handleCloseError}
                message={error}
              ></ErrorToast>
            </div>
          </form>
        </div>
      </Base>
    </>
  );
};
