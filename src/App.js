import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";
import "./App.css";

function App() {


  
  const [list, setList] = useState([]);
  const [input, setInput] = useState(10);

  // setInput(input+10);
  
 
  const addTodo = (todoInput) => {
    if(todoInput !== "")
    {
    const newTodo = {
      id: Math.random(),
      values: todoInput,
    };
 
    //Add the todo to the list 
    setList([...list, newTodo]);

  }


    // clear input box
    setInput("");
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todoInput) => todoInput.id !== id);

    setList(newList);
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="add" onClick={() => addTodo(input)}>Add</button>

      <ul>
        {list.map((todoInput) => (
          <div className="todo" key={todoInput.id}>
            <li>{todoInput.values}</li>
            <button onClick={() => deleteTodo(todoInput.id)}>&times;</button>
          </div>
        ))}
      </ul>
    </div>
  );

}
export default App;
