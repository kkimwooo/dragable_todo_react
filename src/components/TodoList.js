import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Todo from "./Todo";

const TodoList = React.memo(({ todoData, setTodoData }) => {
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
                    <Todo
                      key={todo.id}
                      id={todo.id}
                      title={todo.title}
                      checked={todo.checked}
                      todoData={todoData}
                      setTodoData={setTodoData}
                      provided={provided}
                      snapshot={snapshot}
                    />
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
});
export default TodoList;
