const FormButton = ({ type, disabled, name }) => {
  return (
    <button className='form-button' type={type} disabled={disabled}>
      {name}
    </button>
  );
};

export default FormButton;
