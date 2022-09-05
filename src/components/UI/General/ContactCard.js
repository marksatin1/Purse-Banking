import { v4 as uuidv4 } from 'uuid';

const ContactCard = ({ department, contactData }) => {
  const phoneContacts = contactData.map((contact) => (
    <div key={uuidv4()} className='content--data'>
      <p>
        <b>{contact.issue}</b>
      </p>
      <p>{contact.phone}</p>
    </div>
  ));

  return (
    <div className='contact-card'>
      <h2 className='contact-card--department'>{department}</h2>
      <div className='content'>{phoneContacts}</div>
      <h3 className='wait-time'>Estimated wait time {'<'} 175 mins</h3>
    </div>
  );
};

export default ContactCard;
