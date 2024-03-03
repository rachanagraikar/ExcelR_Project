/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "../Components/UserProfile.css";
import { Base } from "./Base";
import { Blogs } from "./Blogs";

export const UserProfile = () => {
  const [userDetails, setUserDetails] = useState({});
  // -------------------USER DETAILS
  const [user, setUser] = useState({
    username: "Binayak Purohit",
    profile_picture: "",
    userid: "1",
    email: "binayaktech@gmail.com",
    bio: "Tech enthusiast and code ninja.",
    about:
      "Passionate blogger. I love sharing my thoughts on various topics, including technology, lifestyle, and more.",
    followers: 0,
    following: 0,
    role: "ADMIN",
  });

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    try {
      fetch(`http://localhost:8080/api/users/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUserDetails(data);
        });
    } catch (error) {
      console.log("Error occurred while fetching posts:", error);
    }
  });

  // --------RETURN
  return (
    <Base>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 mb-3" key={user.userid}>
            <div className="card">
              <div className="card-body text-center">
                {/* User Image */}
                <img
                  src="../src/Images/userAvatar.png"
                  alt={userDetails.username}
                  className="img-fluid rounded-circle mb-3 border border-info-subtle"
                  style={{ width: "150px", height: "150px" }}
                />

                {/* User Details */}
                <h2 className="card-title">{userDetails.username}</h2>
                {/* <p className="text-muted">{user.email}</p> */}

                {/* Followers and Following */}
                <p className="card-text">
                  Followers: {user.followers} | Following: {user.following}
                </p>

                {/* User Bio */}
                <p className="card-text">{user.bio}</p>

                {/* About */}
                <p className="card-text text-start">{user.about}</p>

                {/* User Role */}
                <p className="card-text text-start">
                  <strong>Email:</strong> {userDetails.email}
                </p>
                {/* User Role */}
                <p className="card-text text-start">
                  <strong>Role:</strong> {user.role}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Blogs />
      </div>
    </Base>
  );
};
