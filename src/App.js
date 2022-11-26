import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const getStyle = (checked) => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: checked ? "line-through" : "none",
    };
  };

  const onClickDelte = (id) => {
    let newTodoData = todoData.filter((todo) => todo.id !== id);
    setTodoData(newTodoData);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

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

  const onChecked = (id) => {
    let newTodoData = todoData.map((todo) => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }
      return todo;
    });

    setTodoData(newTodoData);
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>Todo List</h1>
        </div>
        <form style={{ display: "flex" }} onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            style={{ flex: "10", padding: "5px" }}
            placeholder="할 일을 입력하세요"
            value={value}
            onChange={onChange}
          />
          <button type="submit" className="btn" style={{ flex: 1 }}>
            추가
          </button>
        </form>
        <div>
          {todoData.map((todo) => (
            <div style={getStyle(todo.checked)} key={todo.id}>
              <input
                type="checkbox"
                defaultChecked={todo.checked}
                onChange={() => onChecked(todo.id)}
              />
              {todo.title}
              <button style={btnStyle} onClick={() => onClickDelte(todo.id)}>
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
