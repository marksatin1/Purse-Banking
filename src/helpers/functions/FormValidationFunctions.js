// isEmpty(value)
// minMaxLength(text, minLength, maxLength)
// validateEmail(text)
// userExists(email)
// passwordStrength(text)
// validateConfirmPassword(password, confirmPassword, formErrors)
// formErrorValidation(errField, errValue, errArray, user, setUser, event, setSelected)

import zxcvbn from 'zxcvbn';

export const isEmpty = (value) => value.trim() === '';

export const minMaxLength = (text, minLength, maxLength) => {
  let result = !text || text.length < minLength;
  if (maxLength) {
    result = result || text.length < minLength;
  }
  return result;
};

export const validateEmail = (text) => {
  const regex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  return !regex.test(text);
};

export const userExists = (email) => {
  let registeredUsers = [];

  return new Promise((resolve) => {
    setTimeout(() => {
      if (registeredUsers.findIndex((u) => u === email) !== -1) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

export const passwordStrength = (text) => {
  let result = zxcvbn(text);
  return result.score < 3;
};

export const validateConfirmPassword = (
  password,
  confirmPassword,
  formErrors
) => {
  if (password !== confirmPassword) {
    formErrors.confirmPassword =
      'It would be in your best interest if you matched them passwords there, pardner';
    return false;
  } else {
    delete formErrors.confirmPassword;
    return true;
  }
};

export const formErrorValidation = (
  errField,
  errValue,
  errArray,
  user,
  setUser,
  event,
  setSelected
) => {
  switch (errField) {
    case 'firstName':
      if (minMaxLength(errValue, 3)) {
        errArray[errField] = 'More than 2 letters, bub!';
      } else {
        delete errArray[errField];
      }
      setUser({ ...user, firstName: errValue });
      break;
    case 'lastName':
      if (minMaxLength(errValue, 3)) {
        errArray[errField] = 'MORE than 2 letters!';
      } else {
        delete errArray[errField];
      }
      setUser({ ...user, lastName: errValue });
      break;
    case 'email':
      if (!errValue || validateEmail(errValue)) {
        errArray[errField] =
          'Make it valid, buddy: @ sign, period - the works!';
      } else {
        userExists(errValue).then((result) => {
          if (result) {
            errArray[errField] =
              'Looks like SOMEBODY already registered with us';
          } else {
            delete errArray[errField];
          }
        });
      }
      setUser({ ...user, email: errValue });
      break;
    case 'password':
      if (minMaxLength(errValue, 7)) {
        errArray[errField] = 'I want a good, clean password here, folks';
      } else if (passwordStrength(errValue)) {
        errArray[errField] = 'WEAK!!';
      } else {
        delete errArray[errField];
      }
      setUser({ ...user, password: errValue });
      if (user.confirmPassword) {
        validateConfirmPassword(errValue, user.confirmPassword, errArray);
      }
      break;
    case 'confirmPassword':
      let valid = validateConfirmPassword(user.password, errValue, errArray);
      if (valid) {
        setUser({ ...user, confirmPassword: errValue });
      }
      break;
    case 'firstborn':
      if (errValue === 'no') {
        errArray[errField] = 'MUST CEDE RIGHTS TO FIRSTBORN!';
      } else {
        delete errArray[errField];
      }
      setUser({ ...user, firstborn: errValue });
      break;
    case 'country':
      setSelected(errValue);
      if (errValue === 'Anywhere Else') {
        errArray[errField] = "You're not from around here, are you?";
      } else {
        delete errArray[errField];
      }
      setUser({ ...user, country: errValue });
      break;
    case 'agree':
      if (!event.target.checked) {
        errArray[errField] =
          "Best be agreein' to them terms and conditions there, chap";
      } else {
        delete errArray[errField];
      }
      setUser({ ...user, agree: event.target.checked });
      break;
    default:
      break;
  }
};
