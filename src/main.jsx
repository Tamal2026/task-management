import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOUt from "./LayOut/MainLayOUt";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/About Us/AboutUs";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./Provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DeveloperHub from "./Component/DeveloperHub/DeveloperHub";
import ContactUs from "./Pages/ContactUs/ContactUs";
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOUt></MainLayOUt>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "hub",
        element: <DeveloperHub></DeveloperHub>,
      },
      {
        path: "contactus",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  
);
