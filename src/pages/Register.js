import { useState, useEffect, useContext, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  minMaxLength,
  validateEmail,
  userExists,
  passwordStrength,
  validateConfirmPassword,
} from '../helpers/functions/FormValidationFunctions';
import {
  UserAgreement,
  PrivacyPolicy,
  RegistrationSuccess,
} from '../helpers/data/WrittenContent';
import AuthContext from '../context/auth-context';

import Modal from '../components/UI/General/Modal';
import FormButton from '../components/UI/General/FormButton';

let idToken, expirationTime;

const isEmpty = (value) => value.trim() === '';

const Register = () => {
  const [formErrors, setFormErrors] = useState({});
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstborn: 'no',
    country: 'Country',
    agree: false,
  });
  const [selected, setSelected] = useState();
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showUserAgreement, setShowUserAgreement] = useState(false);
  const authCtx = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();

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
  }, [
    user.firstName,
    user.lastName,
    user.email,
    user.password,
    user.confirmPassword,
  ]);

  const inputChangeHandler = (event) => {
    const timer = setTimeout(async () => {
      const { name, value } = event.target;

      switch (name) {
        case 'firstName':
          if (minMaxLength(value, 3)) {
            formErrors[name] = 'More than 2 letters, bub!';
          } else {
            delete formErrors[name];
          }
          setUser({ ...user, firstName: value });
          break;
        case 'lastName':
          if (minMaxLength(value, 3)) {
            formErrors[name] = 'MORE than 2 letters!';
          } else {
            delete formErrors[name];
          }
          setUser({ ...user, lastName: value });
          break;
        case 'email':
          if (!value || validateEmail(value)) {
            formErrors[name] =
              'Make it valid, buddy: @ sign, period - the works!';
          } else {
            userExists(value).then((result) => {
              if (result) {
                formErrors[name] =
                  'Looks like SOMEBODY already registered with us';
              } else {
                delete formErrors[name];
              }
            });
          }
          setUser({ ...user, email: value });
          break;
        case 'password':
          if (minMaxLength(value, 7)) {
            formErrors[name] = 'I want a good, clean password here, folks';
          } else if (passwordStrength(value)) {
            formErrors[name] = 'WEAK!!';
          } else {
            delete formErrors[name];
          }
          setUser({ ...user, password: value });
          if (user.confirmPassword) {
            validateConfirmPassword(value, user.confirmPassword, formErrors);
          }
          break;
        case 'confirmPassword':
          let valid = validateConfirmPassword(user.password, value, formErrors);
          if (valid) {
            setUser({ ...user, confirmPassword: value });
          }
          break;
        case 'firstborn':
          if (value === 'no') {
            formErrors[name] = 'MUST CEDE RIGHTS TO FIRSTBORN!';
          } else {
            delete formErrors[name];
          }
          setUser({ ...user, firstborn: value });
          break;
        case 'country':
          setSelected(value);
          if (value === 'Anywhere Else') {
            formErrors[name] = "You're not from around here, are you?";
          } else {
            delete formErrors[name];
          }
          setUser({ ...user, country: value });
          break;
        case 'agree':
          if (!event.target.checked) {
            formErrors[name] =
              "Best be agreein' to them terms and conditions there, chap";
          } else {
            delete formErrors[name];
          }
          setUser({ ...user, agree: event.target.checked });
          break;
        default:
          break;
      }
    }, 800);
    setFormErrors(formErrors);

    return () => {
      clearTimeout(timer);
    };
  };

  const hideModalHandler = () => {
    setShowPrivacyPolicy(false);
    setShowUserAgreement(false);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
      }
    )
      .then(async (response) => {
        if (response.ok) {
          return response.json();
        } else {
          const data = await response.json();
          if (data.error.message) {
            throw new Error(data.error.message);
          }
        }
      })
      .then((data) => {
        localStorage.setItem('displayName', user.firstName);
        localStorage.setItem('userEmail', enteredEmail);
        idToken = data.idToken;
        expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );

        fetch(
          `https://react-http-841ed-default-rtdb.firebaseio.com/users.json`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              password: user.password,
              firstborn:
                user.firstborn === 'yes'
                  ? 'Ceded firstborn'
                  : 'Did not cede firstborn',
              country: user.country,
              agree: user.agree ? 'Agreed' : 'Did not agree',
            }),
          }
        ).then(async (response) => {
          if (response.ok) {
            setIsLoading(false);
            setShowModal(true);
            return response.json();
          } else {
            const data = await response.json();
            if (data.error.message) {
              throw new Error(data.error.message);
            }
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const signInHandler = () => {
    authCtx.signIn(idToken, expirationTime);
  };

  return (
    <>
      {showModal && (
        <Modal
          title='Welcome To The Fold'
          subtitle='You are now part of 6000 years of human history'
          content={RegistrationSuccess}
          button={
            <div className='access'>
              <button onClick={signInHandler}>Access MyPurse</button>
            </div>
          }
        />
      )}
      {showUserAgreement && (
        <Modal
          title={UserAgreement.title}
          subtitle={UserAgreement.subtitle}
          content={UserAgreement.content}
          hideModal={hideModalHandler}
        />
      )}
      {showPrivacyPolicy && (
        <Modal
          title={PrivacyPolicy.title}
          subtitle={PrivacyPolicy.subtitle}
          content={PrivacyPolicy.content}
          hideModal={hideModalHandler}
        />
      )}
      {!isLoading && (
        <Container>
          <Row>
            <form onSubmit={submitFormHandler}>
              <Col xs={10} md={7} lg={5} className='form'>
                <h1>REGISTER NOW!</h1>
                <div className='text-fields'>
                  <input
                    name='firstName'
                    type='text'
                    placeholder='First Name'
                    autoComplete='new-first-name'
                    noValidate
                    onChange={inputChangeHandler}
                  />
                  {formErrors.firstName && <p>{formErrors.firstName}</p>}
                  <input
                    name='lastName'
                    type='text'
                    placeholder='Last Name'
                    autoComplete='new-last-name'
                    noValidate
                    onChange={inputChangeHandler}
                  />
                  {formErrors.lastName && <p>{formErrors.lastName}</p>}
                  <input
                    name='email'
                    type='email'
                    placeholder='Email'
                    autoComplete='new-email'
                    onChange={inputChangeHandler}
                    ref={emailRef}
                  />
                  {formErrors.email && <p>{formErrors.email}</p>}
                  <input
                    name='password'
                    type='password'
                    placeholder='Password'
                    autoComplete='new-password'
                    onChange={inputChangeHandler}
                    ref={passwordRef}
                  />
                  {formErrors.password && <p>{formErrors.password}</p>}
                  <input
                    name='confirmPassword'
                    type='password'
                    placeholder='Confirm Password'
                    autoComplete='confirm-new-password'
                    noValidate
                    onChange={inputChangeHandler}
                  />
                  {formErrors.confirmPassword && (
                    <p>{formErrors.confirmPassword}</p>
                  )}
                </div>
                <Row className='click-fields'>
                  <Col md={7}>
                    <span className='text'>Cede rights to your firstborn?</span>
                  </Col>
                  <Col md={3} className='radio'>
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
                        <span className='text'>Yes</span>
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
                        <span className='text'>No</span>
                      </label>
                    </div>
                  </Col>
                </Row>
                {formErrors.firstborn && <p>{formErrors.firstborn}</p>}
                <Row className='country'>
                  <Col md={4}>
                    <label htmlFor='country'>
                      <span className='text'>Country of Origin</span>
                    </label>
                  </Col>
                  <Col md={6}>
                    <select
                      name='country'
                      id='country'
                      onChange={inputChangeHandler}
                      defaultValue={selected}
                    >
                      <option value='America'>America</option>
                      <option value='Anywhere Else'>Anywhere Else</option>
                    </select>
                  </Col>
                </Row>
                {formErrors.country && <p>{formErrors.country}</p>}
                <Row className='certify'>
                  <Col xs={{ span: 1, offset: 1 }}>
                    <input
                      name='agree'
                      type='checkbox'
                      id='agree'
                      required
                      onChange={inputChangeHandler}
                    />
                  </Col>
                  <Col>
                    <span className='text'>
                      I certify that I am 18 years of age or older, and agree to
                      the{' '}
                      <span
                        className='link'
                        onClick={() => setShowUserAgreement(true)}
                      >
                        User Agreement
                      </span>{' '}
                      and{' '}
                      <span
                        className='link'
                        onClick={() => setShowPrivacyPolicy(true)}
                      >
                        Privacy Policy
                      </span>
                      .
                    </span>
                  </Col>
                </Row>
                {formErrors.agree && <p>{formErrors.agree}</p>}
                <div className='button-container'>
                  <FormButton
                    type='submit'
                    name='Register'
                    disabled={isDisabled}
                  />
                </div>
              </Col>
            </form>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Register;
