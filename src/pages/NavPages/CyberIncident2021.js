import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageCard from '../../components/UI/PageCard';
import IncidentReport from '../../components/UI/IncidentReport';
import classes from './CyberIncident2021.module.css';

const CyberIncident2021 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageCard
      title='2021 Cybersecurity Incident'
      subtitle="We're very sorry... again"
    >
      <IncidentReport
        title='Statement On The Data Breach At Purse'
        incident='2019 Cyber Incident'
        url='/cyber-incident-2019'
        update="February 18, 2022 update: On February 11, 2022, as a result of
            Purse's ongoing analysis of the files stolen by the unauthorized
            individual in the 2021 Cybersecurity Incident, we discovered
            approximately 14,700,000 credit card customers/applicants whose
            names, addresses, social security numbers, cell phone numbers,
            personal passwords, sexual preferences, weird fetishes, and bank
            accounts were accessed, manipulated, and exposed to the
            internet-at-large. Purse is directly notifying these affected
            individuals and will make two years of credit score monitoring and
            identity protection available to them at a discounted price."
        message1="Purse has been the target of another cyber attack. On August 19,
              2021, we determined that an inside actor gained unauthorized
              access to Purse's central databases and obtained certain types of
              personal information about Purse credit card customers and other
              individuals who had applied for our credit card products. We
              immediately set out to fix the issue and promptly began working
              with federal law enforcement to pinpoint the source of the breach.
              The inside individual was determined to be none other than our
              very own SVP of Technology, Sustainabilty, and Cybersecurity."
        quote='I am extremely grateful that the perpetrator has been caught.
                This should put a stop to all these annoying
                customers complaining about the theft of their personal
                data.'
        speaker='Dogmo Inzadorf, Press Spokesperson'
        message2="Apparently this individual never gave up on the goal he originally set for
              himself: to steal the private data of Purse's customers and sell
              it to black-marketers for exorbitant sums of cash. He has
              confessed to leveraging his position at Purse to gain access to
              the intimate inner-workings of Purse's cyber architecture, and
              thereby exploit them. In an official statement released to the
              public earlier this week he revealed that some twenty years ago
              his mother was a high-ranking Purse executive who was ousted from
              the company in a public relations scandal. This one event
              seemingly sent his family into poverty and his mother into a deep
              depression. Subsequently he swore a blood oath to learn how to
              hack banking systems and avenge the wrong done to his family. Luckily, the American government has stated that they believe the
              data has been recovered and that they believe there is no evidence
              the data was used for fraud or shared by this individual. This
              individual is currently awaiting trial in an undisclosed maximum
              security prison."
        applicationMessage={
          <div className={classes.apply}>
            <h2>
              Think you have what it takes to be Purse's next{' '}
              <span className={classes.purple}>
                <i>
                  Senior Vice President of Technology, Sustainability, and
                  Cybersecurity?
                </i>
              </span>{' '}
              Visit our{' '}
              <Link to='/careers' className='link'>
                Careers{' '}
              </Link>
              page!
            </h2>
          </div>
        }
      />
    </PageCard>
  );
};

export default CyberIncident2021;
