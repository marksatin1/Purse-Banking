import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageCard from '../../components/UI/PageCard';
import classes from './Help.module.css';

const Help = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageCard title='Help' subtitle='Seriously?'>
      <p>
        You actually need help navigating around this simple website?
        <br />
        <br />
        Did you at least try the{' '}
        <Link to='/contact' className='link'>
          Contact
        </Link>{' '}
        page?
        <br />
        <br />
        <span className={classes.small}>(I bet you didn't, did you?)</span>
      </p>
    </PageCard>
  );
};

export default Help;
