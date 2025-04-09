import React from "react";
import ReactDOM from "react-dom/client";

//JSX- React element
const heading = (
  <h1 className="head" tabIndex="1">
    Namaste React using JSX
  </h1>
);



/* React Component
1.Class based component - OLD
2.Functional Component - NEW
*/
const Title= ()=>(
  <h1 className="head"
  tabIndex="5">
    Namaste React 
  </h1>
)

const HeadingComponent = () => (
  <div id="container">
    <Title/>
    <h1 className="Heading"> React Functional Component </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);

//rendering a functional component
root.render(<HeadingComponent />);
