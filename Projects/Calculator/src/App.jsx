import { useState } from "react";
import style from "./App.module.css";
import Display from "./components/Display";
import { evaluate } from "mathjs";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      try {
        const result = evaluate(calVal);
        setCalVal(result.toString());
      } catch (error) {
        setCalVal("Error");
      }
    } else {
      const newDisplayVal = calVal + buttonText;
      setCalVal(newDisplayVal);
    }
  };
  return (
    <div className={style.container}>
      <h1 className={style.heading}>Calculator</h1>
      <div className={style.calculator}>
        <Display displayVal={calVal} />
        <ButtonsContainer onButtonClick={onButtonClick} />
      </div>
    </div>
  );
}

export default App;
