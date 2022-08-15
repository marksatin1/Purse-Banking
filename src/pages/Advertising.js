import { Nav } from 'react-bootstrap';

import PageCard from '../components/UI/General/PageCard';

const Advertising = () => {
  return (
    <PageCard
      title='Advertising Practices'
      subtitle='We already told you already!'
    >
      <p>Yes,</p>
      <p>
        we are stealing your personal information and your security credentials
        and monitoring your browsing habits and then cleansing this data and
        sending it to as many marketing firms as we possibly can.
      </p>
      <p>
        For more information see our statement on
        <Nav.Link href='/privacy'>
          <p className='link'>YOUR PRIVACY</p>
        </Nav.Link>
      </p>
    </PageCard>
  );
};

export default Advertising;
