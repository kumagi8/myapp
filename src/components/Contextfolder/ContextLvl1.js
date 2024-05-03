import React from "react";
// import UserContext from "../context/UserContext";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ContextLvl2 from "./ContextLvl2";

function ContextLvl1() {
  //   const { user } = useContext(UserContext);
  return (
    <div>
      contextLvl1
      {/* <ContextLvl2 /> */}
      <BrowserRouter>
        <nav>
          <Link to="/ctfl">go</Link>
        </nav>

        <Routes>
          <Route path="/ctfl" element={<ContextLvl2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default ContextLvl1;
