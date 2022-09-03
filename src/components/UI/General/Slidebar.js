const Slidebar = ({ pageTitle, slidebarPos }) => {
  return (
    <div className={`slidebar ${slidebarPos}`}>
      <div className='d-flex justify-content-end align-items-center slidebar--bar'>
        <h1 className='slidebar--title'>{pageTitle}</h1>
      </div>
    </div>
  );
};

export default Slidebar;
