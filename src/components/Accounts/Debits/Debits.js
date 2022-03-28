import { Fragment, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import BannerDetails from '../../UI/BannerDetails';
import BumpTitle from '../../UI/BumpTitle';
import DebitsSummary from './DebitsSummary';
import DebitsActivity from './DebitsActivity';
import DebitsDetails from './DebitsDetails';
import classes from './Debits.module.css';

const checkingData = {
  begBalance: '32725.28',
  pending: '17800.00',
  availBalance: '14925.28',
};

const savingsData = {
  begBalance: '64903.21',
  pending: '2158.31',
  availBalance: '62744.90',
};

const Debits = () => {
  const [accountData, setAccountData] = useState(checkingData);
  const [title, setTitle] = useState('');
  const [activity, setActivity] = useState([]);
  const [details, setDetails] = useState([]);
  const [showActivity, setShowActivity] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const accountParam = queryParams.get('account');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (accountParam === 'checking') {
      setTitle('Checking');
      setAccountData(checkingData);

      fetch(
        'https://react-http-841ed-default-rtdb.firebaseio.com/accounts/checking_account/activity.json',
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then(async (response) => {
          if (response.ok) {
            return response.json();
          } else {
            const data = await response.json();
            if (data.error.message) {
              throw new Error(data.error.message);
            }
          }
        })
        .then((responseData) => {
          const checkingActivity = [];
          for (const key in responseData) {
            checkingActivity.push({
              date: responseData[key].date,
              type: responseData[key].type,
              description: responseData[key].description,
              amount: responseData[key].amount,
              balance: responseData[key].balance,
            });
          }
          checkingActivity.sort((a, b) => new Date(b.date) - new Date(a.date));
          setActivity(checkingActivity);
        })
        .catch((error) => {
          console.log(error);
        });

      fetch(
        'https://react-http-841ed-default-rtdb.firebaseio.com/accounts/checking_account/details.json',
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then(async (response) => {
          if (response.ok) {
            return response.json();
          } else {
            const data = await response.json();
            if (data.error.message) {
              throw new Error(data.error.message);
            }
          }
        })
        .then((responseData) => {
          const checkingDetails = [];
          for (const key in responseData) {
            checkingDetails.push({
              accountName: responseData[key].accountName,
              accountNumber: responseData[key].accountNumber,
              routeNumber: responseData[key].routeNumber,
              interestRate: responseData[key].interestRate,
              accruedInterest: responseData[key].accruedInterest,
              prevStatementDate: responseData[key].prevStatementDate,
              effectiveDate: responseData[key].effectiveDate,
            });
          }
          setDetails(checkingDetails[0]);
        });
    } else if (accountParam === 'savings') {
      setTitle('Savings');
      setAccountData(savingsData);

      fetch(
        'https://react-http-841ed-default-rtdb.firebaseio.com/accounts/savings_account/activity.json',
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then(async (response) => {
          if (response.ok) {
            return response.json();
          } else {
            const data = await response.json();
            if (data.error.message) {
              throw new Error(data.error.message);
            }
          }
        })
        .then((responseData) => {
          const savingsActivity = [];
          for (const key in responseData) {
            savingsActivity.push({
              date: responseData[key].date,
              type: responseData[key].type,
              description: responseData[key].description,
              amount: responseData[key].amount,
              balance: responseData[key].balance,
            });
          }
          savingsActivity.sort((a, b) => new Date(b.date) - new Date(a.date));
          setActivity(savingsActivity);
        });

      fetch(
        'https://react-http-841ed-default-rtdb.firebaseio.com/accounts/savings_account/details.json',
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then(async (response) => {
          if (response.ok) {
            return response.json();
          } else {
            const data = await response.json();
            if (data.error.message) {
              throw new Error(data.error.message);
            }
          }
        })
        .then((responseData) => {
          const savingsDetails = [];
          for (const key in responseData) {
            savingsDetails.push({
              accountName: responseData[key].accountName,
              accountNumber: responseData[key].accountNumber,
              routeNumber: responseData[key].routeNumber,
              interestRate: responseData[key].interestRate,
              accruedInterest: responseData[key].accruedInterest,
              prevStatementDate: responseData[key].prevStatementDate,
              effectiveDate: responseData[key].effectiveDate,
            });
          }
          setDetails(savingsDetails[0]);
        });
    }
  }, [accountParam]);

  const selectHandler = (event) => {
    if (event.target.value === 'checking') {
      navigate('/my-purse/debit-accounts?account=checking');
    } else if (event.target.value === 'savings') {
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

  const headerClasses = `${classes.header} ${
    accountParam === 'checking'
      ? classes.header__checking
      : classes.header__savings
  }`;

  const activityClasses = `${classes.button} ${
    showActivity ? classes.selected : classes.unselected
  }`;
  const detailsClasses = `${classes.button} ${
    showDetails ? classes.selected : classes.unselected
  }`;

  return (
    <Fragment>
      <div className={headerClasses}>
        <BannerDetails />
      </div>
      <BumpTitle title={title} />
      <div className={classes.layout}>
        <DebitsSummary
          accountData={accountData}
          accountParam={accountParam}
          selectHandler={selectHandler}
        />
        <div className={classes['account-data']}>
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
          <div className={classes['green-line']}>
            {showActivity && <DebitsActivity activity={activity} />}
            {showDetails && <DebitsDetails details={details} />}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Debits;
