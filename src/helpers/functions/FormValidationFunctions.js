import zxcvbn from 'zxcvbn';

// isEmpty(value)
// minMaxLength(text, minLength, maxLength)
// validateEmail(text)
// userExists(email)
// testPasswordStrength(text, rating)
// errorMessages
// validateFormInputs(event, setFormErrors, user, setUser)

export const isEmpty = (value) => value.trim() === '';

export const minMaxLength = (text, minLength, maxLength) => {
  let result;

  if (maxLength) {
    result = result || text.length < minLength;
  } else {
    result = !text || text.length < minLength;
  }
  console.log(result);

  return result;
};

export const validateEmail = (text) => {
  const regex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  return regex.test(text);
};

export const userExists = (email) => {
  let registeredUsers = [];

  return new Promise((resolve) => {
    if (registeredUsers.findIndex((u) => u === email) !== -1) {
      resolve(true);
      console.log(true);
    } else {
      resolve(false);
      console.log(false);
    }
  });
};

export const testPasswordStrength = (text, rating) => {
  const result = zxcvbn(text);
  return result.score < rating;
};

const errorMessages = {
  firstName: 'More than 2 letters, bub!',
  lastName: 'MORE than 2 letters!',
  email_valid: 'Make it valid, buddy: @ sign, period - the works!',
  account_exists: 'Looks like SOMEBODY already registered with us',
  password_length: 'I want a good, clean password here, folks',
  password_weak: 'WEAK!!',
  password_confirm:
    'It would be in your best interest if you matched them passwords there, pardner',
  firstborn: 'MUST CEDE RIGHTS TO FIRSTBORN!',
  country: "You're not from around here, are you?",
  agree: "Best be agreein' to them terms and conditions there, chap",
};

export const validateFormInputs = (event, setFormErrors, user, setUser) => {
  const { name: inputName, value: inputValue } = event.target;

  switch (inputName) {
    case 'firstName':
      if (minMaxLength(inputValue, 3)) {
        setFormErrors((prev) => {
          return { ...prev, firstName: errorMessages.firstName };
        });
      } else {
        setFormErrors((prev) => {
          return { ...prev, firstName: null };
        });
      }
      setUser({ ...user, firstName: inputValue });
      break;

    case 'lastName':
      if (minMaxLength(inputValue, 3)) {
        setFormErrors((prev) => {
          return { ...prev, lastName: errorMessages.lastName };
        });
      } else {
        setFormErrors((prev) => {
          return { ...prev, lastName: null };
        });
      }
      setUser({ ...user, lastName: inputValue });
      break;

    case 'email':
      if (!validateEmail(inputValue)) {
        setFormErrors((prev) => {
          return { ...prev, email: errorMessages.email_valid };
        });
      } else {
        setFormErrors((prev) => {
          return { ...prev, email: null };
        });
      }
      setUser({ ...user, email: inputValue });
      break;

    case 'password':
      if (minMaxLength(inputValue, 7)) {
        setFormErrors((prev) => {
          return { ...prev, password: errorMessages.password_length };
        });
      } else if (testPasswordStrength(inputValue, 3)) {
        setFormErrors((prev) => {
          return { ...prev, password: errorMessages.password_weak };
        });
      } else {
        setFormErrors((prev) => {
          return { ...prev, password: null };
        });
      }
      setUser({ ...user, password: inputValue });
      break;

    case 'confirmPassword':
      if (inputValue !== user.password) {
        setFormErrors((prev) => {
          return { ...prev, confirmPassword: errorMessages.password_confirm };
        });
      } else {
        setFormErrors((prev) => {
          return { ...prev, confirmPassword: null };
        });
      }
      setUser({ ...user, confirmPassword: inputValue });
      break;

    case 'firstborn':
      if (inputValue !== 'yes') {
        setFormErrors((prev) => {
          return { ...prev, firstborn: errorMessages.firstborn };
        });
      } else {
        setFormErrors((prev) => {
          return { ...prev, firstborn: null };
        });
      }
      setUser({ ...user, firstborn: inputValue });
      break;

    case 'country':
      if (inputValue !== 'America') {
        setFormErrors((prev) => {
          return { ...prev, country: errorMessages.country };
        });
      } else {
        setFormErrors((prev) => {
          return { ...prev, country: null };
        });
      }
      setUser({ ...user, country: inputValue });
      break;

    case 'agree':
      if (!event.target.checked) {
        setFormErrors((prev) => {
          return { ...prev, agree: errorMessages.agree };
        });
      } else {
        setFormErrors((prev) => {
          return { ...prev, agree: null };
        });
      }
      setUser({ ...user, agree: event.target.checked });
      break;

    default:
      break;
  }
};
