import React, { useState } from "react";

const Todo = React.memo(
  ({
    key,
    id,
    title,
    checked,
    todoData,
    setTodoData,
    provided,
    snapshot,
    onClickDelte,
  }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedValue, setEditiedValue] = useState(title);

    const onChecked = (id) => {
      let newTodoData = todoData.map((todo) => {
        if (todo.id === id) {
          todo.checked = !todo.checked;
        }
        return todo;
      });

      setTodoData(newTodoData);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
    };

    const onClickEdit = () => {
      setIsEditing(true);
    };

    const onChangeEdit = (e) => {
      setEditiedValue(e.target.value);
    };

    const onClickSave = (e) => {
      e.preventDefault();

      let newTodoData = todoData.map((todo) => {
        if (todo.id === id) {
          todo.title = editedValue;
        }
        return todo;
      });
      setTodoData(newTodoData);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
      setIsEditing(false);
    };

    if (isEditing) {
      return (
        <div
          className={` ${"bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
        >
          <div className="items-center">
            <form>
              <input type="text" value={editedValue} onChange={onChangeEdit} />
            </form>
          </div>
          <div className="items-center">
            <button
              className="px-4 py-2 float-right"
              onClick={() => onClickDelte(id)}
            >
              Delete
            </button>
            <button
              className="px-4 py-2 float-right"
              type="submit"
              onClick={onClickSave}
            >
              Save
            </button>
          </div>
        </div>
      );
    } else {
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
            <span className={checked ? "line-through" : undefined}>
              {title}
            </span>
          </div>
          <div className="items-center">
            <button
              className="px-4 py-2 float-right"
              onClick={() => onClickDelte(id)}
            >
              Delete
            </button>
            <button
              className="px-4 py-2 float-right"
              onClick={() => onClickEdit(isEditing)}
            >
              Edit
            </button>
          </div>
        </div>
      );
    }
  }
);

export default Todo;
