import React from "react";

export default function TodoList({ todoData, setTodoData }) {
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
  );
}
