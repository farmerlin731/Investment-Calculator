export default function UserInput({ userInput, setUserInput }) {
  function handleInputChanged(newValue, label) {
    setUserInput((preStatus) => ({
      ...preStatus,
      [label]: parseInt(newValue),
    }));
  }
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">initial investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(e) =>
              handleInputChanged(e.target.value, "initialInvestment")
            }
            required
          />
        </p>
        <p>
          <label htmlFor="">annual investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(e) =>
              handleInputChanged(e.target.value, "annualInvestment")
            }
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">expected return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(e) =>
              handleInputChanged(e.target.value, "expectedReturn")
            }
            required
          />
        </p>
        <p>
          <label htmlFor="">duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(e) => handleInputChanged(e.target.value, "duration")}
            required
          />
        </p>
      </div>
    </section>
  );
}
