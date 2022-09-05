// AuthContext is an component that contains the initial values of vars that will be
// used in various parts of the site. We import this comp in the AuthContextProvider
// comp and and use its '.Provider' form with updated context and pass it around the site.

import { createContext } from 'react';

const initContext = {
  signedIn: false,
  signIn: (signInCreds) => {},
  signOut: () => {},
};

const AuthContext = createContext(initContext);

export default AuthContext;
