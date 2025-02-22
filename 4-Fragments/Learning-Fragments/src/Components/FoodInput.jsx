import React from "react";
import style from "./FoodInput.module.css";

function FoodInput({ handleKeyDown }) {
  return (
    <input
      type="text"
      placeholder="Enter Food item here"
      className={style.foodInput}
      onKeyDown={handleKeyDown}
    ></input>
  );
}

export default FoodInput;
