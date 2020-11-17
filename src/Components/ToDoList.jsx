import React from "react";

const ToDOList = (props) => {
  return (
    <>
      <div className="todo_style">
        <button
          className="buttonDel"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          X
        </button>

        <li>{props.text}</li>
      </div>
    </>
  );
};

export default ToDOList;
