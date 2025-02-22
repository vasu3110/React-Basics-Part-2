import React from "react";
import style from "./Item.module.css";

function Item({ foodItem, bought, handleBuyButton }) {
  return (
    <li
      key={foodItem}
      className={`list-group-item ${style.listItem} ${bought && "active"}`}
    >
      <span className={style.listSpan}>{foodItem}</span>
      <button
        className={`${style.button} btn btn-success`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
}

export default Item;
