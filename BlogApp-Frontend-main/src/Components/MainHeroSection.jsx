import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

export const MainHeroSection = () => {
  const mainContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textWrap: "no-wrap",
    flexDirection: "column",
    backgroundColor: "#FFC017",
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#FFC017"; // Set background color for the entire page
    return () => {
      document.body.style.backgroundColor = ""; // Reset background color when component unmounts
    };
  }, []);

  const [userId, setUserId] = useState();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    fetch(`http://localhost:8080/api/users/id`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserId(data);
      })
      .catch((error) => console.error("Error fetching user id:", error));
  }, []);

  // Create post
  const navigate = useNavigate();
  const handleCreatePost = () => {
    navigate(`/dashboard/createPost/${userId}`);
  };

  //TO add fun() check if user is logged  in or if not then take him to login page.
  const scrollToElement = () => {
    navigate("/dashboard/blogPosts");
    // const element = document.querySelector(".blogs");

    // if (element) {
    //   element.scrollIntoView({ behavior: "smooth" });
    // }
  };

  return (
    <>
      <div className="container mb-4" style={mainContainer}>
        <h1 className="text-center beInspired">
          <span className="beInspired">Be Inspired</span>
        </h1>
        <br />
        <h3 className="text-center tagline">
          Discover stories, thinking, and expertise from writers on any topic.
        </h3>
        <br />
        <br />
        <div>
          <button
            className="btn text-center"
            id="myButton"
            onClick={scrollToElement}
          >
            Start Reading
          </button>
          &nbsp;
          <button
            className="btn text-center"
            onClick={handleCreatePost}
            id="myButton"
          >
            <FontAwesomeIcon icon={faPencil} /> &nbsp; Create Post
          </button>
        </div>
      </div>
    </>
  );
};
