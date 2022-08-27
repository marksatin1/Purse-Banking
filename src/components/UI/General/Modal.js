import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const ModalBackdrop = ({ hideModalHandler }) => {
  return <div className='backdrop' onClick={hideModalHandler} />;
};

const ModalOverlay = ({ title, subtitle, content, btnName, btnHandler }) => {
  return (
    <div className='modal-shell'>
      <h1 className='modal-shell--title'>{title}</h1>
      <h2 className='modal-shell--subtitle'>
        <i>{subtitle}</i>
      </h2>
      <div className='modal-shell--content'>{content}</div>
      <button className='modal-shell--btn' onClick={btnHandler}>
        {btnName}
      </button>
    </div>
  );
};

const Modal = ({
  title,
  subtitle,
  content,
  btnName,
  btnHandler,
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
          btnName={btnName}
          btnHandler={btnHandler}
        />,
        document.getElementById('overlays')
      )}
    </>
  );
};

export default Modal;
