import classes from './BumpTitle.module.css';

const BumpTitle = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.green}></div>
      <h1 className={classes.title}>{props.title}</h1>
    </div>
  );
};

export default BumpTitle;
