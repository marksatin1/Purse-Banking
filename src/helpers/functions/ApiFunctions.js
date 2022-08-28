// fbGetSecureToken(url, email, password)
// fbPostUserData(user, localId)
// fbGetCurrentUserData(localId)
// tokenExpiresAt(expTimeSeconds)
// calculateRemainingTime(expTimeSeconds)
// retrieveStoredTokenData()

import { fbUsersUrl } from '../../api/endpoints';

const axios = require('axios');

export const fbGetSecureToken = (url, email, password) => {
  return axios({
    method: 'post',
    url,
    params: {
      key: process.env.REACT_APP_FIREBASE_API_KEY,
    },
    data: {
      email,
      password,
      returnSecureToken: true,
    },
  }).then((response) => {
    const { idToken, expiresIn, localId } = response.data;
    const expirationTime = tokenExpiresAt(expiresIn);
    const signInCreds = { idToken, expirationTime, localId };

    return signInCreds;
  });
};

export const fbPostUserData = (user, localId) => {
  axios({
    method: 'post',
    url: fbUsersUrl,
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      firstborn:
        user.firstborn === 'yes' ? 'Ceded firstborn' : 'Did not cede firstborn',
      country: user.country,
      agree: user.agree ? 'Agreed' : 'Did not agree',
      localId,
    },
  });
};

export const fbGetCurrentUser = (localId) => {
  // must return axios (=== returing it as a Promise)
  // in order to chain .then() statements to it
  // outside of fbGetUserData function
  return axios({
    method: 'get',
    url: fbUsersUrl,
  }).then((response) => {
    const { data } = response;
    const allUsers = [];

    for (const user in data) {
      allUsers.push({
        firstName: data[user].firstName,
        lastName: data[user].lastName,
        email: data[user].email,
        password: data[user].password,
        localId: data[user].localId,
      });
    }

    const crntUser = allUsers.filter((user) => user.localId === localId);
    return crntUser[0];
  });
};

// Convert expiresIn to ms and add to current time
export const tokenExpiresAt = (expTimeSeconds) => {
  const expTimeMs = new Date().getTime() + +expTimeSeconds * 1000;
  return new Date(expTimeMs);
};

export const calculateRemainingTime = (expTimeSeconds) => {
  const currentTime = new Date().getTime();
  const expTimeMs = new Date(expTimeSeconds).getTime();
  const remainingDuration = expTimeMs - currentTime;

  return remainingDuration;
};

export const retrieveStoredTokenData = () => {
  const storedToken = localStorage.getItem('idToken');
  const storedExpirationTime = localStorage.getItem('idTokenExpirationTime');
  const remainingTime = calculateRemainingTime(storedExpirationTime);

  const storedTokenData = {
    storedToken,
    remainingTime,
  };

  // if token expires in < 1 min, clear localStorage credentials
  if (remainingTime <= 60000) {
    localStorage.clear();
    return null;
    // otherwise return tokenData in localStorage
  } else {
    return storedTokenData;
  }
};
