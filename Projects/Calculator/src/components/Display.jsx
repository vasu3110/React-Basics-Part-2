import React from "react";
import style from "./Display.module.css";

function Display({ displayVal }) {
  return (
    <input className={style.display} type="text" value={displayVal} readOnly />
  );
}

export default Display;
