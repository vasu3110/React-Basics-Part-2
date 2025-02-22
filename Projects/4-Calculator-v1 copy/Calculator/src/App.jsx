import { useState } from "react";
import style from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  return (
    <div className={style.calculator}>
      <Display />
      <ButtonsContainer />
    </div>
  );
}

export default App;
