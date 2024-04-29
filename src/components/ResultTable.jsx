import { calculateInvestmentResults } from "../util/investment";

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
        {tableData.map((singleYear) => (
          <tr key={singleYear.year}>
            <td>{singleYear.year}</td>
            <td>{singleYear.valueEndOfYear}</td>
            <td>{singleYear.interest}</td>
            <td>{singleYear.interest}</td>
            <td>
              {singleYear.annualInvestment * singleYear.year +
                userInput.initialInvestment}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
