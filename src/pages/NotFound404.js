import { useEffect } from 'react';

import classes from './NotFound404.module.css';

const NotFound404 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.layout}>
      <h1>Page Not Found</h1>
      <h2>Just go somewhere else, alright?</h2>
      <p>Go on git!</p>
    </div>
  );
};

export default NotFound404;
