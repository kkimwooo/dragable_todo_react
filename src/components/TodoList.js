import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

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

  const dragEnd = (result) => {
    if (!result.destination) return;

    const newTodoData = [...todoData];

    //1. 변경시키는 아이템을 배열에서 지워줌
    //2. return 값으로 지워진 아이템을 저장

    const [reorederedItem] = newTodoData.splice(result.source.index, 1);
    //원하는 자리에 넣어줌
    newTodoData.splice(result.destination.index, 0, reorederedItem);

    setTodoData(newTodoData);
  };

  return (
    <div>
      <DragDropContext onDragEnd={dragEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((todo, index) => (
                <Draggable
                  key={todo.id}
                  draggableId={todo.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      key={todo.id}
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
                          defaultChecked={todo.checked}
                          onChange={() => onChecked(todo.id)}
                        />
                        <span
                          className={todo.checked ? "line-through" : undefined}
                        >
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
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
