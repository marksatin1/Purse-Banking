import Table from 'react-bootstrap/Table';

const DebitsDetails = ({ details }) => {
  return (
    <Table borderless className='credits-details'>
      <tbody>
        <tr>
          <th>Account Name</th>
          <td>{details.accountName}</td>
        </tr>
        <tr>
          <th>Account Number</th>
          <td>{details.accountNumber}</td>
        </tr>
        <tr>
          <th>Routing Number</th>
          <td>{details.routeNumber}</td>
        </tr>
        <tr>
          <th>Interest Rate</th>
          <td>{details.interestRate}&#x25;</td>
        </tr>
        <tr>
          <th>Accrued Interest YTD</th>
          <td>{details.accruedInterest}</td>
        </tr>
        <tr>
          <th>Previous Statement Date</th>
          <td>{details.prevStatementDate}</td>
        </tr>
        <tr>
          <th>Effective Date</th>
          <td>{details.effectiveDate}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default DebitsDetails;
