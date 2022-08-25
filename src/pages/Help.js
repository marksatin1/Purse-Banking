import PageCard from '../components/UI/General/PageCard';

const Help = () => {
  return (
    <PageCard title='Help' subtitle='Seriously?'>
      <div className='help'>
        <p>You actually need help navigating around this simple website?</p>
        <p>
          Did you at least try the{' '}
          <a href='/contact' className='link'>
            <span>Contact</span>{' '}
          </a>
          page?
        </p>
        <p className='small'>(I bet you didn't, did you?)</p>
      </div>
    </PageCard>
  );
};

export default Help;
