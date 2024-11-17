import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  function eventhandler(buttonText) {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else {
      let newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }

    let iptval = document.getElementById("inptval");
    if (iptval.value === "0" && iptval.value.length === 1) {
      setCalVal("");
      setCalVal(buttonText);
    }
  }

  return (
    <>
      <div className={styles.calculator}>
        <Display ab={calVal} />
        <ButtonsContainer eventhandler={eventhandler} />
      </div>
    </>
  );
}

export default App;
