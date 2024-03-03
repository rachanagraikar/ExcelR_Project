import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Categories } from "../Categories";
import { BlogPost } from "../Blog-posts/BlogPost";
import { Base } from "../Base";

const CategorizedPosts = () => {
  const { categoryId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem("token");
      try {
        const response = await fetch(
          `http://localhost:8080/api/posts/category/${categoryId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          console.error("Failed to fetch data");
          return;
        }

        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      }
    };

    fetchData();
  }, [categoryId]);
  return (
    <Base>
      <div className="container ps-3" style={{ marginBottom: "60px" }}>
        <div className="row justify-content-center">
          <Categories />
          {posts.map((post, index) => (
            <div key={index} className="individual-posts">
              {/* Pass individual post data to BlogPost component */}
              <BlogPost post={post} />
            </div>
          ))}
        </div>
      </div>
    </Base>
  );
};
export default CategorizedPosts;
