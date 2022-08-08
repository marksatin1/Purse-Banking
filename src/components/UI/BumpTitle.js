import classes from './BumpTitle.module.css';

const BumpTitle = ({ title }) => {
  return (
    <div className={classes.container}>
      <div className={classes.green}></div>
      <h1 className={classes.title}>{title}</h1>
    </div>
  );
};

export default BumpTitle;
