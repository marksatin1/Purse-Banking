import { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';

import {
  isEmpty,
  validateFormInputs,
} from '../helpers/functions/FormValidationFunctions';
import { fbSignUpUrl } from '../helpers/data/ApiEndpoints';
import {
  getNewTokenData,
  postUserToDb,
} from '../helpers/functions/ApiFunctions';
import {
  UserAgreement,
  PrivacyPolicy,
  RegistrationSuccess,
} from '../helpers/data/WrittenContent';

import Modal from '../components/UI/General/Modal';
import FormButton from '../components/UI/General/FormButton';

const initUser = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  firstborn: 'no',
  country: 'Country',
  agree: false,
};

const initCreds = {
  idToken: '',
  remainingTime: null,
  localId: '',
};

const initFormErrors = {
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  confirmPassword: null,
  firstborn: null,
  country: null,
  agree: null,
};

const Register = () => {
  // DATA OBJ STATES
  const [user, setUser] = useState(initUser);
  const [creds, setCreds] = useState(initCreds);

  // USER FEEDBACK STATES
  const [isDisabled, setIsDisabled] = useState(true);
  const [formErrors, setFormErrors] = useState(initFormErrors);
  const [isLoading, setIsLoading] = useState(false);

  // MODAL STATES
  const [regSuccess, setRegSuccess] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [userAgreement, setUserAgreement] = useState(false);

  const authCtx = useContext(AuthContext);

  // Handle Register button 'disabled' attribute
  useEffect(() => {
    if (
      isEmpty(user.firstName) ||
      isEmpty(user.lastName) ||
      isEmpty(user.email) ||
      isEmpty(user.password) ||
      isEmpty(user.confirmPassword)
    ) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [user]);

  // Handle user feedback for form errors
  const inputChangeHandler = (event) => {
    const errTimer = setTimeout(() => {
      validateFormInputs(event, setFormErrors, user, setUser);
    }, 500);

    return () => {
      clearTimeout(errTimer);
    };
  };

  const hideModalHandler = () => {
    setPrivacyPolicy(false);
    setUserAgreement(false);
  };

  // Register new user in Firebase
  const submitFormHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const signInCreds = await getNewTokenData(
      fbSignUpUrl,
      user.email,
      user.password
    );
    setCreds(signInCreds);

    await postUserToDb(user, signInCreds.localId);
    setRegSuccess(true);
    setIsLoading(false);
  };

  // Sign in to new user account
  const signInHandler = () => {
    authCtx.signIn(creds);
  };

  return (
    <>
      {!isLoading && (
        <form className='register' onSubmit={submitFormHandler}>
          <h1 className='register--title'>REGISTER NOW!</h1>
          <div className='d-flex flex-column register--inputs'>
            <input
              name='firstName'
              type='text'
              placeholder='First Name'
              autoComplete='new-first-name'
              noValidate
              onChange={inputChangeHandler}
            />
            {formErrors.firstName && (
              <p className='register--error'>{formErrors.firstName}</p>
            )}
            <input
              name='lastName'
              type='text'
              placeholder='Last Name'
              autoComplete='new-last-name'
              noValidate
              onChange={inputChangeHandler}
            />
            {formErrors.lastName && (
              <p className='register--error'>{formErrors.lastName}</p>
            )}
            <input
              name='email'
              type='email'
              placeholder='Email'
              autoComplete='new-email'
              onChange={inputChangeHandler}
            />
            {formErrors.email && (
              <p className='register--error'>{formErrors.email}</p>
            )}
            <input
              name='password'
              type='password'
              placeholder='Password'
              autoComplete='new-password'
              onChange={inputChangeHandler}
            />
            {formErrors.password && (
              <p className='register--error'>{formErrors.password}</p>
            )}
            <input
              name='confirmPassword'
              type='password'
              placeholder='Confirm Password'
              autoComplete='confirm-new-password'
              noValidate
              onChange={inputChangeHandler}
            />
            {formErrors.confirmPassword && (
              <p className='register--error'>{formErrors.confirmPassword}</p>
            )}
          </div>
          <div className='options'>
            <p>Cede rights to your firstborn?</p>
            <div className='d-flex justify-content-evenly align-items-center options--radio'>
              <div>
                <input
                  name='firstborn'
                  type='radio'
                  id='yes'
                  value='yes'
                  required
                  onChange={inputChangeHandler}
                />
                <label htmlFor='yes'>
                  <span>Yes</span>
                </label>
              </div>
              <div>
                <input
                  name='firstborn'
                  type='radio'
                  id='no'
                  value='no'
                  disabled
                  onChange={inputChangeHandler}
                />
                <label htmlFor='no'>
                  <span>No</span>
                </label>
              </div>
            </div>
          </div>
          {formErrors.firstborn && (
            <p className='register--error'>{formErrors.firstborn}</p>
          )}
          <div className='options--select'>
            <label htmlFor='country'>
              <p className='register--text'>Country of Origin</p>
            </label>
            <select
              name='country'
              id='country'
              onChange={inputChangeHandler}
              defaultValue='America'
            >
              <option value='America'>America</option>
              <option value='Everywhere Else'>Everywhere Else</option>
            </select>
          </div>
          {formErrors.country && (
            <p className='register--error'>{formErrors.country}</p>
          )}
          <div className='d-flex align-items-start options--checkbox'>
            <input
              name='agree'
              type='checkbox'
              id='agree'
              required
              onChange={inputChangeHandler}
            />
            <p>
              I certify that I am 18 years of age or older, and agree to the{' '}
              <span
                className='register--link'
                onClick={() => setUserAgreement(true)}
              >
                User Agreement
              </span>{' '}
              and{' '}
              <span
                className='register--link'
                onClick={() => setPrivacyPolicy(true)}
              >
                Privacy Policy
              </span>
              .
            </p>
          </div>
          {formErrors.agree && (
            <p className='register--error'>{formErrors.agree}</p>
          )}
          <FormButton type='submit' name='Register' disabled={isDisabled} />
        </form>
      )}
      {regSuccess && (
        <Modal
          title={RegistrationSuccess.title}
          subtitle={RegistrationSuccess.subtitle}
          content={RegistrationSuccess.content}
          btnHandler={signInHandler}
          btnName='Enter'
        />
      )}
      {userAgreement && (
        <Modal
          title={UserAgreement.title}
          subtitle={UserAgreement.subtitle}
          content={UserAgreement.content}
          btnName='Exit'
          btnHandler={hideModalHandler}
          hideModalHandler={hideModalHandler}
        />
      )}
      {privacyPolicy && (
        <Modal
          title={PrivacyPolicy.title}
          subtitle={PrivacyPolicy.subtitle}
          content={PrivacyPolicy.content}
          btnName='Exit'
          btnHandler={hideModalHandler}
          hideModalHandler={hideModalHandler}
        />
      )}
    </>
  );
};

export default Register;
