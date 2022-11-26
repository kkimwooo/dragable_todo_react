import React, { useState } from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>Todo List</h1>
        </div>
        <InputTodo
          value={value}
          setValue={setValue}
          setTodoData={setTodoData}
        />
        <TodoList todoData={todoData} setTodoData={setTodoData} />
      </div>
    </div>
  );
}
