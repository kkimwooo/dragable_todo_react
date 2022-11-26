import React, { useState } from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    let newTodoData = {
      id: Date.now(),
      title: value,
      checked: false,
    };
    setTodoData((prev) => [...prev, newTodoData]);
    setValue("");
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>Todo List</h1>
        </div>
        <InputTodo value={value} setValue={setValue} onSubmit={onSubmit} />
        <TodoList todoData={todoData} setTodoData={setTodoData} />
      </div>
    </div>
  );
}
