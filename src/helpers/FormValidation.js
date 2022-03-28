import zxcvbn from 'zxcvbn';

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

let registeredUsers = [];

export const userExists = (email) => {
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
