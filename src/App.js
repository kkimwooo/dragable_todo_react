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
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow-lg lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>Todo List</h1>
        </div>
        <InputTodo value={value} setValue={setValue} onSubmit={onSubmit} />
        <TodoList todoData={todoData} setTodoData={setTodoData} />
      </div>
    </div>
  );
}
