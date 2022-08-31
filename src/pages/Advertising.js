import PageCard from '../components/UI/General/PageCard';

const Advertising = () => {
  return (
    <PageCard
      title='Advertising Practices'
      subtitle='We already told you already!'
    >
      <h2>Yes</h2>
      <p>
        We are stealing your personal information and security credentials and
        monitoring your browsing habits and cleansing the data and sending it to
        as many marketing firms as we possibly can. Duh.
      </p>
      <p>For more information see our statement on</p>
      <a href='/privacy' className='link'>
        <h3>YOUR PRIVACY</h3>
      </a>
    </PageCard>
  );
};

export default Advertising;
