import React, { useState, useCallback } from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";

export default function App() {
  const [todoData, setTodoData] = useState(
    localStorage.getItem("todoData")
      ? JSON.parse(localStorage.getItem("todoData"))
      : []
  );
  const [value, setValue] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    let newTodoData = {
      id: Date.now(),
      title: value,
      checked: false,
    };
    setTodoData((prev) => [...prev, newTodoData]);
    localStorage.setItem(
      "todoData",
      JSON.stringify([...todoData, newTodoData])
    );
    setValue("");
  };

  //app.js가 render 될때 onClickDelte 함수가 새로 생성되고 이 함수가 있는 자식 컴포넌트들이 다시 render 됨
  //그 현상을 막기 위해 onclickDelete 함수를 useCallback으로 감싸서 todoData가 변경될때만 함수가 새로 생성되도록 함
  const onClickDelte = useCallback(
    (id) => {
      let newTodoData = todoData.filter((todo) => todo.id !== id);
      setTodoData(newTodoData);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
    },
    [todoData]
  );

  const handleRemoveClick = () => {
    setTodoData([]);
    localStorage.setItem("todoData", JSON.stringify([]));
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow-lg lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>Todo List</h1>
          <button onClick={handleRemoveClick}>Clear</button>
        </div>
        <InputTodo value={value} setValue={setValue} onSubmit={onSubmit} />
        <TodoList
          todoData={todoData}
          setTodoData={setTodoData}
          onClickDelte={onClickDelte}
        />
      </div>
    </div>
  );
}
