/* eslint-disable no-unused-vars */

import { fas } from "@fortawesome/free-solid-svg-icons";

// 1. to check isUserLoggedIn
export const isUserLoggedIn = () => {
  let data = sessionStorage.getItem("token");

  // return true;
  return data != null ? true : false;
};

// 2. doLogin => setting data(jwt token to local storage)

export const doLogin = (data, next) => {
  sessionStorage.setItem("data", JSON.stringify(data));

  //after login
  next();
};

// 3 doLogout => remove token from local Storage

export const doLogout = (next) => {
  sessionStorage.removeItem("data");

  //after logout perform this
  next();
};

//4 getUserData : Get current logged in user data

export const getCurrentUserData = () => {
  if (isUserLoggedIn()) {
    return JSON.parse(sessionStorage.getItem("data").user);
  } else {
    return undefined;
  }
};
