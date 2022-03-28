import { Fragment, useEffect, useState } from 'react';

import BannerDetails from '../../UI/BannerDetails';
import BumpTitle from '../../UI/BumpTitle';
import CreditsSummary from './CreditsSummary';
import CreditsActivity from './CreditsActivity';
import CreditsDetails from './CreditsDetails';
import classes from './Credits.module.css';

const Credits = () => {
  const [activity, setActivity] = useState([]);
  const [details, setDetails] = useState([]);
  const [showActivity, setShowActivity] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const creditActivity = [];
  const creditDetails = [];

  fetch(
    'https://react-http-841ed-default-rtdb.firebaseio.com/accounts/credit_account/activity.json',
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
      for (const key in responseData) {
        creditActivity.push({
          date: responseData[key].date,
          description: responseData[key].description,
          amount: responseData[key].amount,
        });
      }
      creditActivity.sort((a, b) => new Date(b.date) - new Date(a.date));
      setActivity(creditActivity);
    })
    .catch((error) => {
      console.log(error);
    });

  fetch(
    'https://react-http-841ed-default-rtdb.firebaseio.com/accounts/credit_account/details.json',
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
      for (const key in responseData) {
        creditDetails.push({
          accountName: responseData[key].accountName,
          accountNumber: responseData[key].accountNumber,
          creditLimit: responseData[key].creditLimit,
          prevStatementBalance: responseData[key].prevStatementBalance,
          prevStatementDate: responseData[key].prevStatementDate,
          lastPaymentAmount: responseData[key].lastPaymentAmount,
          lastPaymentReceived: responseData[key].lastPaymentReceived,
          interestRate: responseData[key].interestRate,
          effectiveDate: responseData[key].effectiveDate,
        });
      }
      setDetails(creditDetails[0]);
    })
    .catch((error) => {
      console.log(error);
    });

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

  const activityClasses = `${classes.button} ${
    showActivity ? classes.selected : classes.unselected
  }`;
  const detailsClasses = `${classes.button} ${
    showDetails ? classes.selected : classes.unselected
  }`;

  return (
    <Fragment>
      <div className={classes.header}>
        <BannerDetails />
      </div>
      <BumpTitle title='Credit Cards' />
      <div className={classes.layout}>
        <CreditsSummary />
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
            {showActivity && <CreditsActivity activity={activity} />}
            {showDetails && <CreditsDetails details={details} />}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Credits;
