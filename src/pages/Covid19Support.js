import PageCard from '../components/UI/General/PageCard';

const Covid19Support = () => {
  return (
    <PageCard
      title='COVID-19 Support'
      subtitle='Helping consumers in this difficult time'
    >
      <p>
        At Purse, the health and well-being of our customers, associates, and
        communities is our top priority. After all, sick people tend to not pay
        their credit card bills on time, and unpaid credit card bills mean less
        money in Purse's coffers. Likewise, we understand the concern and
        uncertainty you may be experiencing surrounding the coronavirus
        (COVID-19) situation and we are committed to being as transparent as
        possible about our needs as the situation evolves.
      </p>
      <p>
        We also understand there may be instances where customers find
        themselves facing financial difficulties. That being said, we ask that
        you not let your personal financial or physical and mental health
        problems affect your relationship with your monthly payments to Purse.
        We encourage customers who may be impacted by COVID-19 or need
        assistance to just find some way to deal with it and not turn it into
        some big thing that we end up having to deal with.
      </p>
      <p>
        Should you find yourself in need of assistance please do not contact us.
        While the health, safety, and well-being of our customers, associates,
        and our communities is of paramount concern, it has thus far not spurred
        us to actually take steps to assist them. We simply wish to remind you
        not to default on your loans during this difficult time.
      </p>
      <p>
        For additional information about COVID-19 please visit the Centers for
        Disease Control website at{' '}
        <a
          href='https://www.cdc.gov/coronavirus/2019-ncov/index.html'
          target='_blank'
          rel='noopener noreferrer'
          className='link'
        >
          www.cdc.gov
        </a>
        .
      </p>
    </PageCard>
  );
};

export default Covid19Support;
