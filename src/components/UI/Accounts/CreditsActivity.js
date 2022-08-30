import { v4 as uuidv4 } from 'uuid';
import { usdFormatter } from '../../../helpers/functions/MiscFunctions';

import Table from 'react-bootstrap/Table';

const CreditsActivity = ({ activity }) => {
  const creditTransactions = activity.map((transaction) => (
    <tr key={uuidv4()}>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>
        <b>{usdFormatter(transaction.amount)}</b>
      </td>
    </tr>
  ));

  return (
    <Table borderless striped className='credits-activity'>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>{creditTransactions}</tbody>
    </Table>
  );
};

export default CreditsActivity;
