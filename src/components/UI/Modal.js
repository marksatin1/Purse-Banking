import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.hideModal}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <h1 className={classes.title}>{props.title}</h1>
      <h2 className={classes.subtitle}>{props.subtitle}</h2>
      <div className={classes.content}>
        {props.content}
        {props.button}
      </div>
    </div>
  );
};

const Modal = (props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => (document.body.style.overflow = 'initial');
  }, []);

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop hideModal={props.hideModal} />,
        document.getElementById('overlays')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          subtitle={props.subtitle}
          content={props.content}
          button={props.button}
        />,
        document.getElementById('overlays')
      )}
    </>
  );
};

export default Modal;
