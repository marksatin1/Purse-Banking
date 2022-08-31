// getSecureToken(url, email, password)
// postUserData(user, localId)
// getCurrentUserData(localId)
// getDebitsData(url)
// getCreditsData(url)
// tokenExpiresAt(expTimeSeconds)
// calculateRemainingTime(expTimeSeconds)
// retrieveStoredTokenData()

import axios from 'axios';
import { fbUsersUrl, fbCommentsUrl } from '../data/ApiEndpoints';

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

//// Test with Promise.all()

export const getDebitsData = (endpoints) => {
  return Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then((debitsData) => {
      const [{ data: actData }, { data: detData }] = debitsData;
      const debitsActivity = [];
      const debitsDetails = [];

      for (let activity in actData) {
        debitsActivity.push({
          date: actData[activity].date,
          type: actData[activity].type,
          description: actData[activity].description,
          amount: actData[activity].amount,
          balance: actData[activity].balance,
        });
      }
      debitsActivity.sort((a, b) => new Date(b.date) - new Date(a.date));

      for (let detail in detData) {
        debitsDetails.push({
          accountName: detData[detail].accountName,
          accountNumber: detData[detail].accountNumber,
          routeNumber: detData[detail].routeNumber,
          interestRate: detData[detail].interestRate,
          accruedInterest: detData[detail].accruedInterest,
          prevStatementDate: detData[detail].prevStatementDate,
          effectiveDate: detData[detail].effectiveDate,
        });
      }

      return [debitsActivity, debitsDetails[0]];
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCreditsData = (endpoints) => {
  return Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
    (creditsData) => {
      const [{ data: actData }, { data: detData }] = creditsData;
      const creditsActivity = [];
      const creditsDetails = [];

      for (let activity in actData) {
        creditsActivity.push({
          date: actData[activity].date,
          description: actData[activity].description,
          amount: actData[activity].amount,
        });
      }
      creditsActivity.sort((a, b) => new Date(b.date) - new Date(a.date));

      for (let detail in detData) {
        creditsDetails.push({
          accountName: detData[detail].accountName,
          accountNumber: detData[detail].accountNumber,
          creditLimit: detData[detail].creditLimit,
          prevStatementBalance: detData[detail].prevStatementBalance,
          prevStatementDate: detData[detail].prevStatementDate,
          lastPaymentAmount: detData[detail].lastPaymentAmount,
          lastPaymentReceived: detData[detail].lastPaymentReceived,
          interestRate: detData[detail].interestRate,
          effectiveDate: detData[detail].effectiveDate,
        });
      }

      return [creditsActivity, creditsDetails[0]];
    }
  );
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
