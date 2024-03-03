/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Base } from "./Base";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CreatePost = () => {
  const { userId } = useParams();
  const [postData, setPostData] = useState({
    title: "",
    slug: "",
    summary: "",
    content: "",
    category_id: "", // Changed to an empty string
    user_id: userId,
  });

  // for navigation
  const navigate = useNavigate();
  // Updated array for category options
  const categoryOptions = [
    { id: 1, name: "Technology" },
    { id: 2, name: "Business" },
    { id: 3, name: "Education" },
    { id: 4, name: "Sports" },
    { id: 5, name: "Politics" },
    { id: 6, name: "Trades" },
  ];

  // INPUT FIELD
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // -----------------------------PUBLISH POST---------------
  const handlePublishPost = async (e) => {
    e.preventDefault();

    const token = sessionStorage.getItem("token");
    console.log(postData);
    if (postData.user_id) {
      try {
        const response = await fetch("http://localhost:8080/api/posts/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(postData),
        });

        if (!response.ok) {
          toast.error("An error occurred while posting data");
          console.error("Failed to post data");
        } else {
          console.log("Data sent successfully ", response);
          toast.success("Post published successfully");
          navigate("/dashboard/blogPosts");
        }
      } catch (error) {
        console.log("An error occurred while posting data:", error);
      }
    }
  };

  // ----------------RETURN STATEMENT----------------
  return (
    <>
      <Base>
        <div
          className="container mb-5 createPost"
          style={{ width: "50vw", height: "100vh" }}
        >
          <br />
          <h1 className="text-center">Create Post</h1>
          <form onSubmit={handlePublishPost}>
            <div className=" mb-3">
              <label className="form-label">
                <span className="fw-semibold">Title</span>
              </label>
              <input
                type="text"
                name="title"
                value={postData.title}
                onChange={handleInputChange}
                className="form-control"
                id="title"
                placeholder="Title of the blog"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                <span className="fw-semibold">Slug</span>
              </label>
              <input
                type="text"
                name="slug"
                value={postData.slug}
                onChange={handleInputChange}
                className="form-control"
                id="slug"
                placeholder="Slug for the blog"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                <span className="fw-semibold">Summary</span>
              </label>
              <textarea
                className="form-control"
                name="summary"
                value={postData.summary}
                onChange={handleInputChange}
                id="summary"
                rows="2"
                placeholder="Enter a brief summary..."
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">
                <span className="fw-semibold">Content</span>
              </label>
              <textarea
                className="form-control"
                name="content"
                value={postData.content}
                onChange={handleInputChange}
                id="content"
                rows="3"
                placeholder="Enter content here..."
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">
                <span className="fw-semibold">Category ID</span>
              </label>
              <select
                value={postData.category_id}
                className="form-select"
                onChange={(e) =>
                  setPostData((prevData) => ({
                    ...prevData,
                    category_id: e.target.value,
                  }))
                }
              >
                <option value="">Select a category</option>
                {categoryOptions.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            {/* --------BTNS */}
            <div className="mb-5">
              <button className="btn me-5" id="myButton">
                Edit
              </button>
              <button className="btn" id="myButton" type="submit">
                Publish
              </button>
            </div>
          </form>

          <ToastContainer />
        </div>
      </Base>
    </>
  );
};
