import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginPage from "./page/loginpage";
import SignupPage from "./page/SignupPage";
import UsPage from "./page/UsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  { path: "/signup", element: <SignupPage /> },
  { path: "/us", element: <UsPage /> },
]);

export default router;
