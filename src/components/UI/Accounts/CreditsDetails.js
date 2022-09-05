import { usdFormatter } from '../../../helpers/functions/MiscFunctions';

import Table from 'react-bootstrap/Table';

const CreditsDetails = ({ details }) => {
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
          <th>Credit Limit</th>
          <td>{details.creditLimit}</td>
        </tr>
        <tr>
          <th>Previous Statement Balance</th>
          <td>{usdFormatter(details.prevStatementBalance)}</td>
        </tr>
        <tr>
          <th>Previous Statement Date</th>
          <td>{details.prevStatementDate}</td>
        </tr>
        <tr>
          <th>Last Payment Amount</th>
          <td>{usdFormatter(details.lastPaymentAmount)}</td>
        </tr>
        <tr>
          <th>Last Payment Received</th>
          <td>{details.lastPaymentReceived}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CreditsDetails;
