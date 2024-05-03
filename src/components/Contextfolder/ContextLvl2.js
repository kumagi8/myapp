import React, { useContext } from "react";
import UserContext from "../context/UserContext";
function ContextLvl2() {
  const { user } = useContext(UserContext);
  return <div>{user?.username}</div>;
}

export default ContextLvl2;
