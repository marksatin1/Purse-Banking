import { v4 as uuidv4 } from 'uuid';
import { usdFormatter } from '../../../helpers/functions/MiscFunctions';

import Table from 'react-bootstrap/Table';

const DebitsActivity = ({ activity }) => {
  const debitTransactions = activity.map((transaction) => (
    <tr key={uuidv4()}>
      <td>{transaction.date}</td>
      <td>{transaction.type}</td>
      <td>{transaction.description}</td>
      <td>
        <b>{usdFormatter(transaction.amount)}</b>
      </td>
      <td>{usdFormatter(transaction.balance)}</td>
    </tr>
  ));

  return (
    <Table responsive borderless striped className='debits-activity'>
      <thead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>{debitTransactions}</tbody>
    </Table>
  );
};

export default DebitsActivity;
