const Slidebar = ({ title }) => {
  return (
    <div className='slidebar'>
      <div className='d-flex justify-content-end align-items-center slidebar--bar'>
        <h1 className='slidebar--title'>{title}</h1>
      </div>
    </div>
  );
};

export default Slidebar;
