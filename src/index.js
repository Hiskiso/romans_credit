import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root.js";
import Registration from "./routes/registration";
import History from "./routes/history.js";
import Header from "./components/header.js";
import Profile from "./routes/profile.js";
import Login from "./pages/login"
import getAuth from "./service"

let authToken = getAuth()


const router = createBrowserRouter([
  {
    path: "/",
    element: authToken != null ? <><Header /><Root /></> : <><Header>Romans Credit</Header><Login /></>
  },
  {
    path: "profile",
    element: authToken != null ? <><Header /><Profile /></> : <><Header>Romans Credit</Header><Login /></>
  },
  {
    path: "registration",
    element: authToken != null ? <><Header /><Registration /></> : <><Header>Romans Credit</Header><Registration /></> // сделать редирект на "/" если зареган
  },
  {
    path: "cards",
    element: <div>cards</div> //бля потом
  },
  {
    path: "history",
    element: authToken != null ? <><Header /><History /></> : <><Header>Romans Credit</Header><Login /></>
  },
  {
    path: "login",
    element: authToken != null ? <><Header /><History /></> : <><Header>Romans Credit</Header><Login /></> // сделать редирект на "/" если зареган
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);