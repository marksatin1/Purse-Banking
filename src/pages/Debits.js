import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  fbCheckingActUrl,
  fbCheckingDetUrl,
  fbSavingsActUrl,
  fbSavingsDetUrl,
} from '../helpers/data/ApiEndpoints';
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
  const accountType = queryParams.get('account');
  const navigate = useNavigate();

  const { checkingSummary, savingsSummary } = accountsSummary;

  // getDebitsData() MUST be wrapped in an async func to access Promise results
  const loadDebitsData = async (endpoints) => {
    const [debitsActivity, debitsDetails] = await getDebitsData(endpoints);

    setActivity(debitsActivity);
    setDetails(debitsDetails);
  };

  useEffect(() => {
    const checkingEndpoints = [fbCheckingActUrl, fbCheckingDetUrl];
    const savingsEndpoints = [fbSavingsActUrl, fbSavingsDetUrl];

    if (accountType === 'checking') {
      setTitle('Checking');
      setAccountData(checkingSummary);
      setBannerImgClass('bg-img--loot-1');

      loadDebitsData(checkingEndpoints);
    } else if (accountType === 'savings') {
      setTitle('Savings');
      setAccountData(savingsSummary);
      setBannerImgClass('bg-img--loot-2');

      loadDebitsData(savingsEndpoints);
    }
  }, [accountType, checkingSummary, savingsSummary]);

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
        accountType={accountType}
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
