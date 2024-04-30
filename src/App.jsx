import UserInput from "./components/UserInput";
import ResultTable from "./components/ResultTable";
import { useState } from "react";

const initInput = {
  initialInvestment: 15000,
  annualInvestment: 900,
  expectedReturn: 5.5,
  duration: 12,
};

function App() {
  const [userInput, setUserInput] = useState(initInput);
  const isInputValid = userInput.duration >= 1;
  return (
    <>
      <UserInput {...{ userInput, setUserInput }} />
      {isInputValid ? (
        <ResultTable {...{ userInput }} />
      ) : (
        <p className="center"> The duration should be greater than zero! </p>
      )}
    </>
  );
}

export default App;
