import { createContext, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const axios = require('axios');

const AuthContext = createContext({
  token: '',
  isSignedIn: false,
  signIn: (token, expirationTime) => {},
  signOut: () => {},
});

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  const storedExpirationDate = localStorage.getItem('tokenExpirationTime');

  const remainingTime = calculateRemainingTime(storedExpirationDate);
  if (remainingTime <= 60000) {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpirationTime');
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const msExpirationTime = new Date(expirationTime).getTime();
  const remainingDuration = msExpirationTime - currentTime;

  return remainingDuration;
};

let logoutTimer;

export const AuthContextProvider = ({ children }) => {
  const tokenData = retrieveStoredToken();

  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);
  const userIsSignedIn = !!token;
  const navigate = useNavigate();

  const signOutHandler = useCallback(() => {
    setToken(null);
    localStorage.clear();

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }

    navigate('/', { replace: true });
  }, [navigate]);

  const signInHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('tokenExpirationTime', expirationTime);

    const userEmail = localStorage.getItem('userEmail');

    axios
      .get('https://react-http-841ed-default-rtdb.firebaseio.com/users.json')
      .then((data) => {
        const loadedUsers = [];

        for (const key in data) {
          loadedUsers.push({
            id: data[key].email,
            firstName: data[key].firstName,
            lastName: data[key].lastName,
            country: data[key].country,
            email: data[key].email,
            password: data[key].password,
          });
        }

        const thisUser = loadedUsers.filter((user) => user.email === userEmail);
        const userName = thisUser[0].firstName + ' ' + thisUser[0].lastName;
        const userPassword = thisUser[0].password;

        localStorage.setItem('userName', userName);
        localStorage.setItem('country', thisUser[0].country);

        if (!localStorage.getItem('userPassword')) {
          localStorage.setItem('userPassword', userPassword);
        }
      });

    // Automatically sign out user when token expires
    const tokenDuration = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(signOutHandler, tokenDuration);

    navigate('/my-purse/accounts', { replace: true });
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(signOutHandler, tokenData.duration);
    }
  }, [tokenData, signOutHandler]);

  const context = {
    token,
    isSignedIn: userIsSignedIn,
    signIn: signInHandler,
    signOut: signOutHandler,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
