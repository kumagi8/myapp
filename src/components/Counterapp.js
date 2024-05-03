import React, { useReducer } from "react";
// import { useState } from "react";

const Counterapp = () => {
  // const [times, setTimes] = useState(1);
  const [state, dispatch] = useReducer(reducer, { count: 0, times: 1 });

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + state.times, times: state.times };
      case "decrement":
        return { count: state.count - state.times, times: state.times };
      case "timesINC":
        return { count: state.count, times: action.payload };
      default:
        return state;
    }
  }

  function handleChange(e) {
    dispatch({ type: "timesINC", payload: Number(e.target.value) });
  }
  return (
    <div>
      <input type="number" onChange={handleChange} />
      <br />
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
};

export default Counterapp;
