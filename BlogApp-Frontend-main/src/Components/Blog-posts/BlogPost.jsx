/* eslint-disable react/prop-types */
import {
  faComment as faSolidComment,
  faThumbsDown as faSolidThumbsDown,
  faThumbsUp as faSolidThumbsUp,
  faShareSquare as faSolidShareSquare,
} from "@fortawesome/free-solid-svg-icons";

import {
  faThumbsDown,
  faThumbsUp,
  faComment,
  faShareSquare,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

export const BlogPost = ({ post }) => {
  //inline style css
  const centerDiv = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  };

  const [likeBtn, setIslike] = useState(false);
  const [dislikeBtn, setIsDislike] = useState(false);
  const [commentBtn, setIsComment] = useState(false);
  const [shareBtn, setIsShare] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [userId, setUserId] = useState();

  const { id, userName, content, createdDate } = post;

  const date = createdDate.substring(0, 10);
  const minLengthInChars = 300;
  const initialContent = content.substring(0, minLengthInChars);
  const [showFullContent, setShowFullContent] = useState(false);

  const handleReadMore = () => {
    setShowFullContent(!showFullContent);
  };

  const handleLike = () => {
    const token = sessionStorage.getItem("token");
    const data = { post: { id: id }, user: { id: userId } };
    console.log(data);
    // Implement logic to send like
    fetch(`http://localhost:8080/api/likes/like`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the like count
        setLikeCount((prevCount) => prevCount + 1);
        console.log("like successful");
      })
      .catch((error) => {
        console.error("Error liking post:", error);
        // Log more details about the response
        error.response.json().then((data) => console.log(data));
      });
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    // Fetch like count for the post
    fetch(`http://localhost:8080/api/likes/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLikeCount(data);
      })
      .catch((error) => console.error("Error fetching like count:", error));
  }, [id]);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    // Fetch userId
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
      .catch((error) => console.error("Error fetching like count:", error));
  }, []);

  //   -----------RETURN---
  return (
    <>
      <div className="card col-12 mb-3">
        <div className="card-body blogs ">
          <div className="" key={id}>
            <p>@{userName}</p>
            <h5 className="card-title">
              <span className="fs-3 ">{post.title}</span>
              {/* div for 'by user_name' & 'created at' */}
              <br />
              <div className="lh-1" style={centerDiv}>
                <p className="fs-6 fw-light my-3">
                  <small>{date}</small>
                </p>
              </div>
            </h5>

            {/* POST CONTENT */}
            <p className="card-text">
              {showFullContent ? content : initialContent + "  ..."}
            </p>
          </div>

          {/* like,dislike,comment, share button */}
          <div className="blog-action" style={centerDiv}>
            <div className="blog-btns">
              {/* Like Btn */}
              <button
                className="btn"
                onClick={() => {
                  setIslike(!likeBtn);
                  setIsDislike(false);
                }}
              >
                <FontAwesomeIcon
                  icon={likeBtn ? faSolidThumbsUp : faThumbsUp}
                  onClick={() => handleLike()}
                />
              </button>
              <small>{likeCount}</small>

              {/* Comment Btn */}
              <button className="btn" onClick={() => setIsComment(!commentBtn)}>
                <FontAwesomeIcon
                  icon={commentBtn ? faSolidComment : faComment}
                />
              </button>

              {/* Share btn */}
              <button className="btn" onClick={() => setIsShare(!shareBtn)}>
                <FontAwesomeIcon
                  icon={shareBtn ? faSolidShareSquare : faShareSquare}
                />
              </button>
            </div>

            {/* Read More btn */}
            {content.length > minLengthInChars && (
              <button
                className="readMore btn btn-secondary rounded-pill fw-regular"
                onClick={handleReadMore}
              >
                {showFullContent ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
