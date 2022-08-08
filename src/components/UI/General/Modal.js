import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = ({ hideModal }) => {
  return <div className='backdrop' onClick={hideModal}></div>;
};

const ModalOverlay = ({ title, subtitle, content, button }) => {
  return (
    <div className='modal'>
      <h1 className='title'>{title}</h1>
      <h2 className='subtitle'>{subtitle}</h2>
      <div className='content'>
        {content}
        {button}
      </div>
    </div>
  );
};

const Modal = ({ hideModal, title, subtitle, content, button }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => (document.body.style.overflow = 'initial');
  }, []);

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop hideModal={hideModal} />,
        document.getElementById('overlays')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={title}
          subtitle={subtitle}
          content={content}
          button={button}
        />,
        document.getElementById('overlays')
      )}
    </>
  );
};

export default Modal;
