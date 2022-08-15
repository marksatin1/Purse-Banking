const ContactCard = ({ department, data }) => {
  return (
    <div className='contact-card'>
      <h2 className='department'>{department}</h2>
      <div className='content'>
        {data.map((item) => (
          <>
            <p>
              <b>{item.issue}</b>
            </p>
            <p>{item.phone}</p>
          </>
        ))}
      </div>
      <h3 className='wait-time'>Estimated wait time {'<'} 175 mins</h3>
    </div>
  );
};

export default ContactCard;
