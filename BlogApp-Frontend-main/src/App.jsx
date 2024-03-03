/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { CreatePost } from "./Components/CreatePost";
import { UserProfile } from "./Components/UserProfile";
import { PrivateRoute } from "./Components/PrivateRoute";
import { ShowBlogs } from "./Components/ShowBlogs";
import { About } from "./pages/About";
import { useState } from "react";
import { CreateBlogPostT } from "./Components/TEST/CreateBlogPostT";
import CategorizedPosts from "./Components/categrized_posts/CategorizedPosts";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes path="/">
          <Route index element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/categories/:categoryId"
            element={<CategorizedPosts />}
          ></Route>

          {/* Private Routes-- needs log in */}
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="blogPosts" element={<ShowBlogs />}></Route>
            <Route path="createPost/:userId" element={<CreatePost />}></Route>
            <Route path="userProfile" element={<UserProfile />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
