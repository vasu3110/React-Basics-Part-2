import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";

function App() {
  let errorMessage = "I am still hungry";

  let [textToShow, setTextState] = useState("Food Item Entered by user");

  let [foodItems, setFoodItems] = useState([]);

  console.log(`Current value of textstate:${textToShow}`);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      setTextState(newFoodItem);
    }
  };

  return (
    <>
      <Container>
        <h1 className="foodHeading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown} />
        <ErrorMessage msg={errorMessage} items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
      {/* <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being
        </p>
      </Container> */}
    </>
  );
}

export default App;
