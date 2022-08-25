const PageCard = ({ title, subtitle, children }) => {
  return (
    <div className='d-flex flex-column justify-content-around page-card'>
      <h1 className='page-card--title'>{title}</h1>
      <h2 className='page-card--subtitle'>
        <i>{subtitle}</i>
      </h2>
      <div className='d-flex flex-column justify-content-center page-card--content'>
        {children}
      </div>
    </div>
  );
};

export default PageCard;
