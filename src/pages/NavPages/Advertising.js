import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageCard from '../../components/UI/PageCard';
import classes from './Advertising.module.css';

const Advertising = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageCard
      title='Advertising Practices'
      subtitle='We already told you already!'
    >
      <p className={classes['advert-content']}>
        Yes,
        <br />
        <br />
        <br /> we are stealing your personal information and your security
        credentials and monitoring your browsing habits and then cleansing this
        data and sending it to as many marketing firms as we possibly can.
        <br />
        <br />
        For more information see our statement on{' '}
        <Link to='/privacy' className='link'>
          YOUR PRIVACY
        </Link>
        .
      </p>
    </PageCard>
  );
};

export default Advertising;
