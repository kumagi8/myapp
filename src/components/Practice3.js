import React, { useState } from "react";

const items = [
  {
    name: "socks",
    count: 2,
    picked: true,
  },
  {
    name: "pants",
    count: 3,
    picked: false,
  },
  {
    name: "shirt",
    count: 4,
    picked: true,
  },
];

const Practice3 = () => {
  const [data, setData] = useState(items);

  function DisplayItems({ data, ondelete, onchecked }) {
    return data.map((i) => {
      return (
        <div
          key={i.name}
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px",
            justifyContent: "center",
            boxShadow: "3px 3px 10px ",
            borderRadius: "0 1rem 0 1rem",
          }}
        >
          <div
            style={{
              margin: ".5rem",
              display: "flex",
              flexDirection: "row",
              width: "24rem",
              justifyContent: "space-around",
            }}
          >
            <input
              type="checkbox"
              value={i.picked}
              checked={i.picked ? "checked" : ""}
              onChange={() => onchecked(i.name)}
            />
            <span
              style={
                i.picked
                  ? { textDecoration: "line-through", width: "15rem" }
                  : { textDecoration: "none", width: "15rem" }
              }
            >
              {i.count} {i.name}
            </span>
            <button
              style={{
                border: "none",
                width: "1.4rem",
                height: "1.4rem",
                borderRadius: "50%",
                backgroundColor: "purple",
                color: "white",
              }}
              onClick={() => ondelete(i.name)}
            >
              x
            </button>
          </div>{" "}
        </div>
      );
    });
  }

  function handleDelete(name) {
    setData((d) => d.filter((i) => i.name !== name));
  }

  function handlePicked(name) {
    setData((items) =>
      items.map((item) =>
        item.name === name ? { ...item, picked: !item.picked } : item
      )
    );
  }

  function Form() {
    const [count, setCount] = useState(1);
    const [item, setItem] = useState("");

    function handleSubmit(e) {
      e.preventDefault();
      console.log("handle submit");
      if (item) {
        const newItem = {
          name: item,
          count: count,
          picked: false,
        };
        console.log("handle submit", newItem);
        setData((pre) => [...pre, newItem]);
        items.push(newItem);
        setCount(1);
        setItem("");

        console.log(items);
      }
    }
    return (
      <form
        style={{
          width: "20rem",
          padding: "2rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          border: "1px solid purple",
          borderRadius: "1rem",
          boxShadow: "3px 3px 10px",
          margin: "1rem",
        }}
      >
        <select
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (x, i) => i + 1).map((i) => {
            return <option key={i}>{i}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="item..."
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          disabled={!item}
          //   style={{
          //     border: "none",
          //     backgroundColor: "purple",
          //     color: "white",
          //     borderRadius: ".5rem",
          //     padding: "5px",
          //   }}
        >
          Add
        </button>
      </form>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form />
      <DisplayItems
        data={data}
        ondelete={handleDelete}
        onchecked={handlePicked}
      />
    </div>
  );
};

export default Practice3;
