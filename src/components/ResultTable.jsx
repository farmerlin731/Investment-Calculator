import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function ResultTable({ userInput }) {
  const tableData = calculateInvestmentResults(userInput);
  //seems to need another function to produce the 4th data column.
  console.log(userInput);
  console.log(tableData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Captital</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((singleYear) => {
          // u can make simple calculation here
          let InvestedCaptital =
            singleYear.annualInvestment * singleYear.year +
            userInput.initialInvestment;
          let totalInterest = singleYear.valueEndOfYear - InvestedCaptital;
          return (
            <tr key={singleYear.year}>
              <td>{singleYear.year}</td>
              <td>{formatter.format(singleYear.valueEndOfYear)}</td>
              <td>{formatter.format(singleYear.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{InvestedCaptital}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
