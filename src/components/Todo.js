import React from "react";

export default function Todo({
  key,
  id,
  title,
  checked,
  todoData,
  setTodoData,
  provided,
  snapshot,
}) {
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
    <div
      key={key}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      {...provided.draggableProps}
      className={` ${
        snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
      } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
    >
      <div className="items-center">
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={() => onChecked(id)}
        />
        <span className={checked ? "line-through" : undefined}>{title}</span>
      </div>
      <div className="items-center">
        <button
          className="px-4 py-2 float-right"
          onClick={() => onClickDelte(id)}
        >
          x
        </button>
      </div>
    </div>
  );
}
