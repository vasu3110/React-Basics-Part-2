import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
function App() {
  let errorMessage = "I am still hungry";
  let foodItems = ["Dal", "Green-Vegetable", "Roti", "Salad", "Milk", "Ghee"];
  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage msg={errorMessage} items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
