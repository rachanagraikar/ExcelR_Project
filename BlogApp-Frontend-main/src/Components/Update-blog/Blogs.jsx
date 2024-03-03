/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { BlogPost } from "./Blog-posts/BlogPost";

/* eslint-disable no-unused-vars */

export const UpdateBlogs = () => {
  const [postIds, setPostsIds] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    try {
      fetch(`http://localhost:8080/api/posts/dashboard`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setPostsIds(data);
        });
    } catch (error) {
      console.log("Error occurred while fetching posts:", error);
    }
  }, []);

  useEffect(() => {
    const fetchPostData = async () => {
      const token = sessionStorage.getItem("token");
      const postData = [];

      // Fetch individual post data for each postId
      for (const postId of postIds) {
        try {
          const response = await fetch(
            `http://localhost:8080/api/posts/${postId}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );

          const postDataItem = await response.json();
          postData.push(postDataItem);
        } catch (error) {
          console.error(`Error fetching post ${postId}:`, error);
        }
      }

      // Set the posts array once all data is fetched
      setPosts(postData);
    };

    // Fetch post data only if postIds are available
    if (postIds.length > 0) {
      fetchPostData();
    }
  }, [postIds]);

  const handleDelete = (id) => {
    const token = sessionStorage.getItem("token");

    try {
      fetch(`http://localhost:8080/api/posts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      console.log("Error occurred while fetching posts:", error);
    }
  };
  const handleUpdate = (id) => {};

  // ------------------------RETURN STATEMENT------------------
  return (
    <div className="container ps-3" style={{ marginBottom: "60px" }}>
      <div className="row justify-content-center">
        {posts.map((post, index) => (
          <div key={index} className="individual-posts">
            <BlogPost post={post} />
            <div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => handleUpdate(post.id)}
              >
                Update
              </button>
              <button
                type="submit"
                className="btn btn-secondary"
                onClick={() => handleDelete(post.id)}
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
