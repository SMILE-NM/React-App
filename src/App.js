import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";

function App() {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    //Add the todo to the list 
    setList([...list, newTodo]);

    // clear input box
    setInput("");
  };



  return (
    < div >
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add</button>
    </div>

    
  );

}
export default App;
