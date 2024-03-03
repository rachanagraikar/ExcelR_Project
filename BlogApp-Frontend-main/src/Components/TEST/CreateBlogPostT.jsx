import { useState } from "react";
import { Base } from "../Base";

const initialBlogPosts = [
  {
    title: "First Blog Post",
    slug: "first-blog-post",
    summary: "This is the summary of the first blog post.",
    content: "This is the content of the first blog post.",
    category: {
      id: "1",
    },
    user: {
      id: "101",
    },
  },
  {
    title: "Second Blog Post",
    slug: "second-blog-post",
    summary: "This is the summary of the second blog post.",
    content: "This is the content of the second blog post.",
    category: {
      id: "2",
    },
    user: {
      id: "102",
    },
  },
  // Add three more objects here
];

export const CreateBlogPostT = () => {
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);

  const handleInputChange = (index, field, value) => {
    const updatedBlogPosts = [...blogPosts];
    updatedBlogPosts[index] = {
      ...updatedBlogPosts[index],
      [field]: value,
    };
    setBlogPosts(updatedBlogPosts);
  };

  // ----------------------RETURN STATEMENT-----------
  return (
    <>
      <Base>
        <div
          className="container mb-5 createPost"
          style={{ width: "50vw", height: "100vh" }}
        >
          <br />
          {/* HEADING */}
          <h1 className="text-center">Create Post</h1>

          {/* Form */}
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
            <div className=" mb-3">
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
                placeholder="Copy the title with no space and a hyphen in between"
              />
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
                value={selectedItem}
                className="form-select"
                onChange={(e) => updateCategoryID(e)}
              >
                <option value="Select an item">Select an item</option>
                {categories.map((item) => (
                  <option key={item.id} name="category" value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">
                <span className="fw-semibold">User ID</span>
              </label>
              <select
                value={userId}
                className="form-select"
                onChange={updateUserID}
              >
                <option value="Select an item">Select an item</option>

                <option name="category" value={user.id}>
                  {user.id}
                </option>
              </select>
            </div>

            <div className="mb-5" style={centerDiv}>
              <button className="btn me-5" id="myButton">
                Edit
              </button>

              <button className="btn" id="myButton">
                Publish
              </button>
            </div>
          </form>
        </div>
      </Base>
    </>
  );
};
