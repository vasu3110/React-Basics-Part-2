import React from "react";
import style from "./AddTodo.module.css";
function AddTodo() {
  return (
    <div className="container">
      <div className={`row ${style.todoRow}`}>
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className={`btn btn-success ${style.todoBtn}`}>
            Success
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
