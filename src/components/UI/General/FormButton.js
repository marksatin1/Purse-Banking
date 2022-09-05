const FormButton = ({ type, disabled, name }) => {
  return (
    <button className='form-btn' type={type} disabled={disabled}>
      {name}
    </button>
  );
};

export default FormButton;
