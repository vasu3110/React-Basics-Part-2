import React from "react";
import style from "./TodoItem.module.css";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  let prod1 = todoName;
  let date = todoDate;
  return (
    <div className="container">
      <div className={`row ${style.todoRow}`}>
        <div className="col-6">{prod1}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className={`${style.todoBtn} btn btn-danger`}
            onClick={() => onDeleteClick(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
