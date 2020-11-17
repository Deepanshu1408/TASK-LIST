import React, { useState } from "react";
import "./App.css";
import ToDoList from "./ToDoList";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listofItems = () => {
    if (inputList) {
      setItems((oldItems) => {
        return [...oldItems, inputList];
      });
      setInputList("");
    } else {
      alert("Please Add Some Task to Add in this List");
    }
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Task List</h1>
          <br />
          <input
            type="text"
            placeholder="Add New Task"
            value={inputList}
            onChange={itemEvent}
          />
          <button className="buttonAdd" onClick={listofItems}>
            +
          </button>

          <ol>
            {/* <li>{inputList}</li> */}
            {Items.map((itemval, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
