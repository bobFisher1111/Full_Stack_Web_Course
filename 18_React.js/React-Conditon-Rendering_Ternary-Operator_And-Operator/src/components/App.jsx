import React from "react";
import Login from "./Login";

var isLoggedIn = false;

// && Operator: Used to show nothing at all if certain condition is met, like still working after hours
const currentTime = new Date().getHours();

// Using Ternary Operator
function App() {
  return (
    <div className="container">
      {isLoggedIn === true ? <h1>Hello</h1> : <Login />}
      {currentTime > 12 && <h1>Still working?</h1>}
    </div>
  );
}

export default App;
