import classes from './FormButton.module.css';

const FormButton = (props) => {
  return (
    <button
      className={classes['form-button']}
      type={props.type}
      disabled={props.disabled}
    >
      {props.name}
    </button>
  );
};

export default FormButton;
