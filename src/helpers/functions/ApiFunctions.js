import axios from 'axios';
import {
  fbUsersUrl,
  fbCommentsUrl,
  fbResetPasswordUrl,
} from '../data/ApiEndpoints';

/*   HELPERS   */
// getExpDateMs(expDurationSec)
// getRemainSessionDurationMs(expDateMs)

/*   MAIN   */
// getNewTokenData(url, email, password)
// postUserToDb(user, localId)
// postUserToLocalStorage(signInCreds)
// getCurrentUser(localId)

// getDateSortedComments()
// getDebitsData(endpointsArr)
// getCreditsData(endpointsArr)

//resetPassword(email)

/*   HELPERS   */
export const getExpDateMs = (expDurationSec) => {
  const crntTimeMs = new Date().getTime();
  const expDurationMs = +expDurationSec * 1000;
  return crntTimeMs + expDurationMs;
};

export const getRemainSessionDurationMs = (expDateMs) => {
  const crntTimeMs = new Date().getTime();
  return expDateMs - crntTimeMs;
};

/*   MAIN   */
export const getNewTokenData = async (url, email, password) => {
  try {
    const { data } = await axios({
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
    });

    const { idToken, expiresIn, localId } = data;
    const expDateMs = getExpDateMs(expiresIn);

    return { idToken, expDateMs, localId };
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

export const postUserToDb = async (user, localId) => {
  try {
    await axios({
      method: 'post',
      url: fbUsersUrl,
      data: {
        localId: localId,
        name: user.firstName + ' ' + user.lastName,
        email: user.email,
        password: user.password,
        firstborn:
          user.firstborn === 'yes'
            ? 'Ceded firstborn'
            : 'Did not cede firstborn',
        country: user.country,
        agree: user.agree ? 'Agreed' : 'Did not agree',
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const postUserToLocalStorage = async (signInCreds) => {
  const { idToken, expDateMs, localId } = signInCreds;
  const { name, email, password, country } = await getCurrentUser(localId);

  localStorage.setItem('idToken', idToken);
  localStorage.setItem('tokenExpDateMs', expDateMs);
  localStorage.setItem('localId', localId);
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
  localStorage.setItem('country', country);
};

export const getCurrentUser = async (localId) => {
  try {
    const { data } = await axios.get(fbUsersUrl);
    const allUsers = [];

    for (let user in data) {
      allUsers.push(data[user]);
    }

    const crntUser = allUsers.filter((user) => user.localId === localId);

    return crntUser[0];
  } catch (error) {
    console.error(error);
  }
};

export const getDateSortedComments = async () => {
  const comments = [];

  try {
    const { data } = await axios.get(fbCommentsUrl);

    for (let comment in data) {
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
    return comments.sort(
      (a, b) => new Date(b.commentDate) - new Date(a.commentDate)
    );
  } catch (error) {
    console.error(error);
  }
};

export const getDebitsData = async (endpointsArr) => {
  try {
    const debitsData = await Promise.all(
      endpointsArr.map((endpoint) => axios.get(endpoint))
    );
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
  } catch (error) {
    console.error(error);
  }
};

export const getCreditsData = async (endpointsArr) => {
  try {
    const creditsData = await Promise.all(
      endpointsArr.map((endpoint) => axios.get(endpoint))
    );
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
  } catch (error) {
    console.error(error);
  }
};

export const resetPassword = async (email) => {
  await axios({
    method: 'post',
    url: fbResetPasswordUrl,
    params: {
      key: process.env.REACT_APP_FIREBASE_API_KEY,
    },
    data: { requestType: 'PASSWORD_RESET', email },
  }).catch((error) => {
    console.error(error);
  });
};
