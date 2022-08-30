import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  fbCheckingActUrl,
  fbCheckingDetUrl,
  fbSavingsActUrl,
  fbSavingsDetUrl,
} from '../api/endpoints';
import { getDebitsData } from '../helpers/functions/ApiFunctions';
import { accountsSummary } from '../helpers/data/BankingData';

import AccountBanner from '../components/UI/Accounts/AccountBanner';
import BumpTitle from '../components/UI/General/BumpTitle';
import DebitsSummary from '../components/UI/Accounts/DebitsSummary';
import DebitsActivity from '../components/UI/Accounts/DebitsActivity';
import DebitsDetails from '../components/UI/Accounts/DebitsDetails';

const { checkingData, savingsData } = accountsSummary;

const Debits = () => {
  const [title, setTitle] = useState('');
  const [accountData, setAccountData] = useState(checkingData);
  const [activity, setActivity] = useState([]);
  const [details, setDetails] = useState([]);
  const [showActivity, setShowActivity] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const accountParam = queryParams.get('account');
  const navigate = useNavigate();

  useEffect(() => {
    if (accountParam === 'checking') {
      setTitle('Checking');
      setAccountData(checkingData);

      // Get checking activity
      getDebitsData(fbCheckingActUrl)
        .then((checkingActivity) => {
          setActivity(checkingActivity);
        })
        .catch((error) => {
          console.log(error);
        });

      // Get checking details
      getDebitsData(fbCheckingDetUrl)
        .then((checkingDetails) => {
          setDetails(checkingDetails);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (accountParam === 'savings') {
      setTitle('Savings');
      setAccountData(savingsData);

      // Get savings activity
      getDebitsData(fbSavingsActUrl)
        .then((savingsActivity) => {
          setActivity(savingsActivity);
        })
        .catch((error) => {
          console.log(error);
        });

      // Get savings details
      getDebitsData(fbSavingsDetUrl)
        .then((savingsDetails) => {
          setDetails(savingsDetails[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [accountParam]);

  const selectHandler = (event) => {
    const { value } = event.target;

    if (value === 'checking') {
      navigate('/my-purse/debit-accounts?account=checking');
    } else if (value === 'savings') {
      navigate('/my-purse/debit-accounts?account=savings');
    }
  };

  const activityHandler = () => {
    if (!showActivity) {
      setShowDetails(false);
      setShowActivity(true);
    }
  };

  const detailsHandler = () => {
    if (!showDetails) {
      setShowActivity(false);
      setShowDetails(true);
    }
  };

  const headerClasses =
    accountParam === 'checking'
      ? ' header header__checking'
      : 'header header__savings';

  const activityClasses = showActivity
    ? 'button selected'
    : 'button unselected';
  const detailsClasses = showDetails ? 'button selected' : 'button unselected';

  return (
    <>
      <div className={headerClasses}>
        <AccountBanner />
      </div>
      <BumpTitle title={title} />
      <div className='layout'>
        <DebitsSummary
          accountData={accountData}
          accountParam={accountParam}
          selectHandler={selectHandler}
        />
        <div className='account-data'>
          <button
            type='button'
            className={activityClasses}
            onClick={activityHandler}
          >
            Activity
          </button>
          <button
            type='button'
            className={detailsClasses}
            onClick={detailsHandler}
          >
            Details
          </button>
          <div className='green-line'>
            {showActivity && <DebitsActivity activity={activity} />}
            {showDetails && <DebitsDetails details={details} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Debits;
