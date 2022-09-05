import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  postUserToLocalStorage,
  getRemainSessionDurationMs,
} from '../helpers/functions/ApiFunctions';

import AuthContext from './AuthContext';

let logoutTimer; //imperative  - change to setState() declarative later

const AuthContextProvider = ({ children }) => {
  const [signedIn, setSignedIn] = useState(false);
  const navigate = useNavigate();

  const signIn = (signInCreds) => {
    postUserToLocalStorage(signInCreds);
    setSignedIn(true);

    const remainSessDurMs = getRemainSessionDurationMs(signInCreds.expDateMs);
    logoutTimer = setTimeout(signOut, remainSessDurMs);

    navigate('/', { replace: true });
  };

  const signOut = useCallback(() => {
    localStorage.clear();
    setSignedIn(false);

    return () => {
      clearTimeout(logoutTimer);
      navigate('/', { replace: true });
    };
  }, [navigate]);

  useEffect(() => {
    const tokenExpDateMs = localStorage.getItem('tokenExpDateMs');
    const remainSessDurMs = getRemainSessionDurationMs(tokenExpDateMs);

    if (remainSessDurMs < 60000) {
      signOut();
    } else {
      setSignedIn(true);
      logoutTimer = setTimeout(signOut, remainSessDurMs);
    }
  }, [signOut]);

  const context = {
    signedIn,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
