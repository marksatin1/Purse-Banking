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

import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import AccountBanner from '../components/UI/Accounts/AccountBanner';
import Slidebar from '../components/UI/General/Slidebar';
import DebitsSummary from '../components/UI/Accounts/DebitsSummary';
import DebitsActivity from '../components/UI/Accounts/DebitsActivity';
import DebitsDetails from '../components/UI/Accounts/DebitsDetails';

const Debits = () => {
  const [title, setTitle] = useState('');
  const [accountData, setAccountData] = useState({});
  const [activity, setActivity] = useState([]);
  const [details, setDetails] = useState([]);
  const [tabsClass, setTabsClass] = useState('');
  const [bannerImgClass, setBannerImgClass] = useState('');

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const accountParam = queryParams.get('account');
  const navigate = useNavigate();

  const { checkingData, savingsData } = accountsSummary;

  useEffect(() => {
    if (accountParam === 'checking') {
      setTitle('Checking');
      setAccountData(checkingData);
      setBannerImgClass('bg-img--loot-1');

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
      setBannerImgClass('bg-img--loot-2');

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
          setDetails(savingsDetails);
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

  // Controlled Tabs component to handle tabs width
  const tabsClassHandler = (key) => {
    if (key === 'debit-details') {
      setTabsClass('tabs-width-short');
    } else {
      setTabsClass('');
    }
  };

  return (
    <>
      <AccountBanner className={bannerImgClass} />
      <Slidebar title={title} />
      <DebitsSummary
        accountData={accountData}
        accountParam={accountParam}
        selectHandler={selectHandler}
      />
      <Container className='debits'>
        <Tabs
          id='debits-tabs'
          className={tabsClass}
          onSelect={tabsClassHandler}
        >
          <Tab eventKey='debit-activity' title='Activity'>
            <DebitsActivity activity={activity} />
          </Tab>
          <Tab eventKey='debit-details' title='Details'>
            <DebitsDetails details={details} />
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};

export default Debits;
