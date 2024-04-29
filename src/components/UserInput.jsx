export default function UserInput({ userInput, setUserInput }) {
  function handleInputChanged(e, label) {
    setUserInput({
      ...userInput,
      [label]: parseInt(e.target.value),
    });
  }
  return (
    <div id="user-input">
      <ul className="input-group">
        <li>
          <label htmlFor="">initial investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(e) => handleInputChanged(e, "initialInvestment")}
          />
        </li>
        <li>
          <label htmlFor="">annual investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(e) => handleInputChanged(e, "annualInvestment")}
          />
        </li>
        <li>
          <label htmlFor="">expected return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(e) => handleInputChanged(e, "expectedReturn")}
          />
        </li>
        <li>
          <label htmlFor="">duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(e) => handleInputChanged(e, "duration")}
          />
        </li>
      </ul>
    </div>
  );
}
