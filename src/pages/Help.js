import { Link } from 'react-router-dom';

import PageCard from '../components/UI/General/PageCard';

const Help = () => {
  return (
    <PageCard title='Help' subtitle='Seriously?'>
      <p>You actually need help navigating around this simple website?</p>
      <p>
        Did you at least try the{' '}
        <Link to='/contact' className='link'>
          <span>Contact</span>
        </Link>{' '}
        page?
      </p>
      <h5 className='small'>(I bet you didn't, did you?)</h5>
    </PageCard>
  );
};

export default Help;
