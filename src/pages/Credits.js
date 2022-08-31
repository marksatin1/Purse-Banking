import { useState, useEffect } from 'react';

import { getCreditsData } from '../helpers/functions/ApiFunctions';
import { fbCreditsActUrl, fbCreditsDetUrl } from '../helpers/data/ApiEndpoints';

import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import AccountBanner from '../components/UI/Accounts/AccountBanner';
import Slidebar from '../components/UI/General/Slidebar';
import CreditsSummary from '../components/UI/Accounts/CreditsSummary';
import CreditsActivity from '../components/UI/Accounts/CreditsActivity';
import CreditsDetails from '../components/UI/Accounts/CreditsDetails';

const Credits = () => {
  const [activity, setActivity] = useState([]);
  const [details, setDetails] = useState([]);

  // getCreditsData() MUST be wrapped in an async func to access Promise results
  const loadCreditsData = async (endpoints) => {
    const [creditsActivity, creditsDetails] = await getCreditsData(endpoints);

    setActivity(creditsActivity);
    setDetails(creditsDetails);
  };

  useEffect(() => {
    const creditsEndpoints = [fbCreditsActUrl, fbCreditsDetUrl];
    loadCreditsData(creditsEndpoints);
  }, []);

  return (
    <>
      <AccountBanner className='bg-img--funeral' />
      <Slidebar title='Credit Cards' />
      <CreditsSummary />
      <Container className='credits'>
        <Tabs id='credits-tabs'>
          <Tab eventKey='credit-activity' title='Activity'>
            <CreditsActivity activity={activity} />
          </Tab>
          <Tab eventKey='credit-details' title='Details'>
            <CreditsDetails details={details} />
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};

export default Credits;
