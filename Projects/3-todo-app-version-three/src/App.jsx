import React from "react";
import TodoHeading from "./Components/TodoHeading";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "15/2/2025",
    },
    {
      name: "Go To College",
      dueDate: "14/2/2025",
    },
    {
      name: "Read a Book",
      dueDate: "15/2/2025",
    },
  ];
  return (
    <center className="todo-container">
      <TodoHeading />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
