import React from "react";
import ReactDOM from "react-dom/client";

// Create parent element with two child divs
const heading = React.createElement(
  "h1",
  {
    id: "heading"
  },
  "HEY !!!",
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
