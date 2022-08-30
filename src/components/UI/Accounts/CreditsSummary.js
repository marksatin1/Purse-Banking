import { usdFormatter } from '../../../helpers/functions/MiscFunctions';
import { accountsSummary } from '../../../helpers/data/BankingData';

import AccountSummary from './AccountSummary';

const CreditsSummary = () => {
  const { creditsData } = accountsSummary;

  return (
    <AccountSummary>
      <p>Current Balance</p>
      <h1>{usdFormatter(creditsData.currentBalance)}</h1>
      <select name='account' id='account'>
        <option value='credit'>Purse Infinity Cash Card</option>
      </select>
      <div className='d-flex flex-column flex-md-row align-items-center justify-content-between'>
        <p>Rewards Balance</p>
        <h2>{creditsData.rewardsBalance} Points</h2>
      </div>
      <div className='d-flex flex-column flex-md-row align-items-center justify-content-between'>
        <p>Available Credit</p>
        <h2>{usdFormatter(creditsData.availCredit)}</h2>
      </div>
      <div className='d-flex flex-column flex-md-row align-items-center justify-content-between'>
        <p>Minimum Amount Due</p>
        <h2>{usdFormatter(creditsData.minAmountDue)}</h2>
      </div>
      <div className='d-flex flex-column flex-md-row align-items-center justify-content-between'>
        <p>Payment Due Date</p>
        <h2>{creditsData.paymentDueDate}</h2>
      </div>
    </AccountSummary>
  );
};

export default CreditsSummary;
