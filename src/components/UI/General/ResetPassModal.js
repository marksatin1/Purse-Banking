import { useState, useContext } from 'react';
import AuthContext from '../../../context/AuthContext';

import { resetPassword } from '../../../helpers/functions/ApiFunctions';
import {
  ResetPasswordContent,
  SuccessResetPasswordContent,
} from '../../../helpers/data/WrittenContent';

import Modal from './Modal';

const resetModalInfo = {
  title: 'Reset Password',
  content: ResetPasswordContent,
  btnName: 'Reset',
};

const successModalInfo = {
  title: 'Success!',
  content: SuccessResetPasswordContent,
  btnName: 'Return Home',
};

const ResetPassModal = ({ hideModalHandler, email }) => {
  const [modalInfo, setModalInfo] = useState(resetModalInfo);
  const { signOut } = useContext(AuthContext);

  const resetPasswordHandler = async () => {
    await resetPassword(email);
    setModalInfo(successModalInfo);
  };

  return (
    <>
      <Modal
        title={modalInfo.title}
        content={modalInfo.content}
        btnHandler={
          modalInfo === resetModalInfo ? resetPasswordHandler : () => signOut()
        }
        btnName={modalInfo.btnName}
        hideModalHandler={
          modalInfo === resetModalInfo ? hideModalHandler : null
        }
      />
    </>
  );
};

export default ResetPassModal;
