import React from "react";

export default function TodoList({ todoData, setTodoData }) {
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
        <div key={todo.id}>
          <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
            <div className="items-center">
              <input
                type="checkbox"
                defaultChecked={todo.checked}
                onChange={() => onChecked(todo.id)}
              />
              <span className={todo.checked ? "line-through" : undefined}>
                {todo.title}
              </span>
            </div>
            <div className="items-center">
              <button
                className="px-4 py-2 float-right"
                onClick={() => onClickDelte(todo.id)}
              >
                x
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
