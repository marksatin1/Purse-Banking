import PurseCEO from '../../../assets/PurseCEO.webp';

const IncidentReport = ({
  title,
  incident,
  url,
  update,
  message1,
  quote,
  speaker,
  message2,
  applicationMessage,
}) => {
  return (
    <div className='report'>
      <div className='body'>
        <h3 className='body--title'>{title}</h3>
        <h4 className='body--statement'>
          <i>
            For our statement on the {incident}{' '}
            <a href={url} className='body--link'>
              click here
            </a>
          </i>
        </h4>
        {update && (
          <h4 className='body--update'>
            <i>{update}</i>
          </h4>
        )}
        <p>{message1}</p>
        {quote && (
          <div className='quote-block'>
            <h4 className='quote-block--quote'>
              <i>{quote}</i>
            </h4>
            <h4 className='quote-block--speaker'>{speaker}</h4>
          </div>
        )}
        <p>{message2}</p>
      </div>
      <div className='ceo-block'>
        <h2 className='ceo-block--title'>Contact</h2>
        <img src={PurseCEO} alt='Purse CEO' />
        <div className='contact'>
          <h3 className='contact--name'>Dogmo Inzadorf</h3>
          <p>
            <b>Press Spokesperson</b>
          </p>
          <p>Technology, Sustainability, and Cybersecurity</p>
          <p>
            <b>Email</b>
          </p>
          <p>dogmo83@purse.wtf</p>
          <p>
            <b>Phone</b>
          </p>
          <p>555-666-6174</p>
          <p>
            <b>Fax</b>
          </p>
          <p>1-555-666-6128</p>
          <p>
            <b>Microchip</b>
          </p>
          <p>x7A-b163427HVm-L61209</p>
        </div>
      </div>
      {applicationMessage && (
        <div className='app-message'>
          <h4>
            Think you have what it takes to be Purse's next{' '}
            <i>
              Senior Vice President of Technology, Sustainability, and
              Cybersecurity?
            </i>
          </h4>
          Visit our{' '}
          <a href='/careers' className='link'>
            Careers{' '}
          </a>
          page!
        </div>
      )}
    </div>
  );
};

export default IncidentReport;
