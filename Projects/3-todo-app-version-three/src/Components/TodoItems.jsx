import React from "react";
import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";

function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <div className={style.itemsContainer}>
      {todoItems.map((item) => {
        return (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteClick={onDeleteClick}
          />
        );
      })}
    </div>
  );
}

export default TodoItems;
