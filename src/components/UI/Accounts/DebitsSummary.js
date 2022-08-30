import { usdFormatter } from '../../../helpers/functions/MiscFunctions';

import AccountSummary from './AccountSummary';

const DebitsSummary = ({ accountData, accountParam, selectHandler }) => {
  let selectDefVal = accountParam === 'checking' ? 'checking' : 'savings';

  return (
    <AccountSummary>
      <p>Available Balance</p>
      <h1>{usdFormatter(accountData.availBalance)}</h1>
      <select
        name='account-type'
        id='account-select'
        defaultValue={selectDefVal}
        onChange={selectHandler}
      >
        <option value='checking'>Purse Convenience Checking</option>
        <option value='savings'>Purse Spectacular Savings</option>
      </select>
      <div className='d-flex flex-column flex-md-row align-items-center justify-content-between'>
        <p>Today's Beginning Balance</p>
        <h2>{usdFormatter(accountData.begBalance)}</h2>
      </div>
      <div className='d-flex flex-column flex-md-row align-items-center justify-content-between'>
        <p>Pending</p>
        <h2>{usdFormatter(accountData.pending)}</h2>
      </div>
    </AccountSummary>
  );
};

export default DebitsSummary;
