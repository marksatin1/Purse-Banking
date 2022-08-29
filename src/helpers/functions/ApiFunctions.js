// getSecureToken(url, email, password)
// postUserData(user, localId)
// getCurrentUserData(localId)
// getDebitsData(url)
// getCreditsData(url)
// tokenExpiresAt(expTimeSeconds)
// calculateRemainingTime(expTimeSeconds)
// retrieveStoredTokenData()

import {
  fbUsersUrl,
  fbCommentsUrl,
  fbCheckingActUrl,
  fbSavingsActUrl,
  fbCheckingDetUrl,
  fbSavingsDetUrl,
  fbCreditsActUrl,
  fbCreditsDetUrl,
} from '../../api/endpoints';

const axios = require('axios');

export const getSecureToken = (url, email, password) => {
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

export const postUserData = (user, localId) => {
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

export const getCurrentUser = (localId) => {
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

export const getDateSortedComments = () => {
  return axios({
    method: 'get',
    url: fbCommentsUrl,
  }).then((response) => {
    const { data } = response;
    const comments = [];

    for (const comment in data) {
      comments.push({
        username: data[comment].username,
        age: data[comment].age,
        location: data[comment].location,
        memberDate: data[comment].memberDate,
        overallStars: data[comment].overallStars,
        commentDate: data[comment].commentDate,
        title: data[comment].title,
        content: data[comment].content,
        onlineStars: data[comment].onlineStars,
        customerStars: data[comment].customerStars,
        accountStars: data[comment].accountStars,
        recommend: data[comment].recommend,
      });
    }
    comments.sort((a, b) => new Date(b.commentDate) - new Date(a.commentDate));
    return comments;
  });
};

export const getDebitsData = (url) => {
  return axios.get(url).then((response) => {
    const { data } = response;
    if (url === fbCheckingActUrl || url === fbSavingsActUrl) {
      const debitsActivity = [];

      for (let transaction in data) {
        debitsActivity.push({
          date: data[transaction].date,
          type: data[transaction].type,
          description: data[transaction].description,
          amount: data[transaction].amount,
          balance: data[transaction].balance,
        });
      }

      debitsActivity.sort((a, b) => new Date(b.date) - new Date(a.date));

      return debitsActivity;
    } else if (url === fbCheckingDetUrl || url === fbSavingsDetUrl) {
      const debitsDetails = [];

      for (let detail in data) {
        debitsDetails.push({
          accountName: data[detail].accountName,
          accountNumber: data[detail].accountNumber,
          routeNumber: data[detail].routeNumber,
          interestRate: data[detail].interestRate,
          accruedInterest: data[detail].accruedInterest,
          prevStatementDate: data[detail].prevStatementDate,
          effectiveDate: data[detail].effectiveDate,
        });
      }

      return debitsDetails[0];
    }
  });
};

export const getCreditsData = (url) => {
  return axios.get(url).then((response) => {
    const { data } = response;
    if (url === fbCreditsActUrl) {
      const creditsActivity = [];

      for (let transaction in data) {
        creditsActivity.push({
          date: data[transaction].date,
          description: data[transaction].description,
          amount: data[transaction].amount,
        });
      }

      creditsActivity.sort((a, b) => new Date(b.date) - new Date(a.date));

      return creditsActivity;
    } else if (url === fbCreditsDetUrl) {
      const creditsDetails = [];

      for (let detail in data) {
        creditsDetails.push({
          accountName: data[detail].accountName,
          accountNumber: data[detail].accountNumber,
          creditLimit: data[detail].creditLimit,
          prevStatementBalance: data[detail].prevStatementBalance,
          prevStatementDate: data[detail].prevStatementDate,
          lastPaymentAmount: data[detail].lastPaymentAmount,
          lastPaymentReceived: data[detail].lastPaymentReceived,
          interestRate: data[detail].interestRate,
          effectiveDate: data[detail].effectiveDate,
        });
      }

      return creditsDetails[0];
    }
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
