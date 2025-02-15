import React from "react";

function TodoItem1() {
  let prod1 = "Buy Milk";
  let date = "4/10/2003";
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

export default TodoItem1;
