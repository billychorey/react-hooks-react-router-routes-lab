
//Edited by me
// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import routes from "./routes";
// import "./index.css";
// import NavBar from './components/NavBar'

// ReactDOM.render(
//   <Router>
//     <NavBar />
//     {routes}
//   </Router>,
//   document.getElementById("root")
// );


///original
// import "./index.css";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import routes from "./routes";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render();

//From Joe
// import React from "react";
// import ReactDOM from "react-dom";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import routes from "./routes";
// import "./index.css";

// const router = (createBrowserRouter(routes));

// ReactDOM.render(

//   <RouterProvider router={router}>
   
//   </RouterProvider>,
//   document.getElementById("root")
// );

//From ai
// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import routes from "./routes";
// import "./index.css";
// import NavBar from './components/NavBar'

// ReactDOM.render(
//   <Router>
//     <NavBar />
//     {routes}
//   </Router>,
//   document.getElementById("root")
// );



//AI 2
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
import "./index.css";
import NavBar from './components/NavBar'

ReactDOM.render(
  <Router>
    <NavBar />
    {routes}
  </Router>,
  document.getElementById("root")
);



//AI suggestion
// I apologize for the confusion. It appears that the test files are still trying to use the createMemoryRouter function, which is not a valid function from the react-router-dom package.

// To resolve this issue, you can try the following steps:

// Open the test files that are failing (e.g., Directors.test.js, Movie.test.js, Actors.test.js, index.test.js, Home.test.js).

// Locate the lines where createMemoryRouter is being used. You can search for createMemoryRouter in each test file to find the relevant lines.

// Replace createMemoryRouter with createMemoryHistory from the history package.

// Import createMemoryHistory from the history package at the top of each test file.