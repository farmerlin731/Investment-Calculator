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
  return (
    <>
      <UserInput {...{ userInput, setUserInput }} />
      <ResultTable {...{ userInput }} />
    </>
  );
}

export default App;
