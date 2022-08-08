import classes from './FormButton.module.css';

const FormButton = ({ type, disabled, name }) => {
  return (
    <button className={classes['form-button']} type={type} disabled={disabled}>
      {name}
    </button>
  );
};

export default FormButton;
