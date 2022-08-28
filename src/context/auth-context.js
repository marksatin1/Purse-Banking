import { createContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  fbGetCurrentUser,
  calculateRemainingTime,
} from '../helpers/functions/ApiFunctions';

const AuthContext = createContext({
  idToken: '',
  isSignedIn: false,
  signIn: (signInCreds) => {},
  signOut: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [idTokenData, setIdTokenData] = useState({});
  const [sessionTimer, setSessionTimer] = useState(null);
  const navigate = useNavigate();

  const signInHandler = (signInCreds) => {
    const { idToken, expirationTime, localId } = signInCreds;

    // Set current session's idTokenData in browser
    localStorage.setItem('idToken', idToken);
    localStorage.setItem('idTokenExpirationTime', expirationTime);

    // Set current session's idTokenData in app
    setIdTokenData(signInCreds);

    // Get current session user's personal data from fbUsersUrl
    fbGetCurrentUser(localId).then((crntUser) => {
      const userName = crntUser.firstName + ' ' + crntUser.lastName;
      const userEmail = crntUser.email;
      const userPassword = crntUser.password;
      const userId = crntUser.localId;

      // Set current session user's personal data in browser
      localStorage.setItem('userName', userName);
      localStorage.setItem('userEmail', userEmail);
      localStorage.setItem('Password', userPassword);
      localStorage.setItem('userId', userId);
    });

    // Automatically sign out user when session expires
    const remainingSessionDuration = calculateRemainingTime(expirationTime);
    const logoutTimer = setTimeout(signOutHandler, remainingSessionDuration);
    setSessionTimer(logoutTimer);

    navigate('/my-purse/accounts', { replace: true });
  };

  const signOutHandler = useCallback(() => {
    localStorage.clear();
    setIdTokenData({});

    if (sessionTimer) {
      clearTimeout(sessionTimer);
    }

    navigate('/', { replace: true });
  }, [navigate]);

  const context = {
    idToken: idTokenData.idToken,
    isSignedIn: localStorage.getItem('idToken') ? true : false, // this check must reference browser storage (bc browser is beyond app re-render lifecycle)
    signIn: signInHandler,
    signOut: signOutHandler,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
