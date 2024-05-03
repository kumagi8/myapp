import React from "react";
import { Link } from "react-router-dom";

// function changeColor() {
//   document.getElementById("CB").style.backgroundColor = "green";
// }

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/todoapp">todo</Link>
        </li>
        <li>
          <Link to="/tasks">tasks</Link>
        </li>
        <li>
          <Link to="/popcorn">popcorn</Link>
        </li>
        <li>
          <Link to="/splitapp">splitapp</Link>
        </li>
        <li>
          <Link to="/practice1">practice1</Link>
        </li>
        <li>
          <Link to="/practice2">practice2</Link>
        </li>
        <li>
          <Link to="/practice3">practice3</Link>
        </li>
        <li>
          <Link to="/practice4">practice4</Link>
        </li>
        <li>
          <Link to="/usereducer">usereducer</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
