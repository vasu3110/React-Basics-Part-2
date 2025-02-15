import React from "react";

function TodoItem2() {
  let prod1 = "Go To College";
  let date = "4/10/2023";
  return (
    <div class="container">
      <div class="row todo-row">
        <div class="col-6">{prod1}</div>
        <div class="col-4">{date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger todo-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
