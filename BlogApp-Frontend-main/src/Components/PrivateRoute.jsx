import { Outlet, useNavigate } from "react-router-dom";
// import { Blogs } from "./Blogs";

export const PrivateRoute = () => {
  const navigate = useNavigate();
  let isLoggedIn = true;

  return isLoggedIn ? <Outlet /> : navigate("login");
};
