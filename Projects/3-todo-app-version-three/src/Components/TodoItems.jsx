import React from "react";
import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";

function TodoItems({ todoItems }) {
  return (
    <div className={style.itemsContainer}>
      {todoItems.map((item) => {
        return (
          <TodoItem key={item} todoName={item.name} todoDate={item.dueDate} />
        );
      })}
    </div>
  );
}

export default TodoItems;
