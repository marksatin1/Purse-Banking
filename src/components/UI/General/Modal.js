import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const ModalBackdrop = ({ hideModalHandler }) => {
  return <div className='backdrop' onClick={hideModalHandler} />;
};

const ModalOverlay = ({ title, subtitle, content, btnHandler, btnName }) => {
  return (
    <div className='modal-overlay'>
      <h1 className='modal-overlay--title'>{title}</h1>
      <h2 className='modal-overlay--subtitle'>{subtitle}</h2>
      <div className='modal-overlay--content'>{content}</div>
      <button className='modal-overlay--btn' onClick={btnHandler}>
        {btnName}
      </button>
    </div>
  );
};

const Modal = ({
  title,
  subtitle,
  content,
  btnHandler,
  btnName,
  hideModalHandler,
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => (document.body.style.overflow = 'initial');
  }, []);

  return (
    <>
      {ReactDOM.createPortal(
        <ModalBackdrop hideModalHandler={hideModalHandler} />,
        document.getElementById('overlays')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={title}
          subtitle={subtitle}
          content={content}
          btnHandler={btnHandler}
          btnName={btnName}
        />,
        document.getElementById('overlays')
      )}
    </>
  );
};

export default Modal;
