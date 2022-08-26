const ContactCard = ({ department, data }) => {
  return (
    <div className='contact-card'>
      <h2 className='contact-card--department'>{department}</h2>
      <div className='content'>
        {data.map((item) => (
          <div className='content--data'>
            <p>
              <b>{item.issue}</b>
            </p>
            <p>{item.phone}</p>
          </div>
        ))}
      </div>
      <h3 className='wait-time'>Estimated wait time {'<'} 175 mins</h3>
    </div>
  );
};

export default ContactCard;
