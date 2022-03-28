import { Fragment, useContext, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthContext from './context/auth-context';

import wtf_loader from './assets/wtf_loader.gif';

import Header from './components/Layout/Header/Header';
import LandingPage from './pages/LandingPage';
import MyPurseHome from './pages/MyPurseHome';
import Debits from './components/Accounts/Debits/Debits';
import Credits from './components/Accounts/Credits/Credits';
import UserSettings from './components/Accounts/UserSettings/UserSettings';
import FindBranch from './pages/FindBranch';
import About from './pages/NavPages/About';
import Contact from './pages/NavPages/Contact';
import Languages from './pages/NavPages/Languages';
import Help from './pages/NavPages/Help';
import Crypto from './pages/Crypto';
import Privacy from './pages/NavPages/Privacy';
import CreditOffer from './pages/CreditOffer';
import Careers from './pages/NavPages/Careers';
import Advertising from './pages/NavPages/Advertising';
import CyberIncident2021 from './pages/NavPages/CyberIncident2021';
import CyberIncident2019 from './pages/NavPages/CyberIncident2019';
import Covid19Support from './pages/NavPages/Covid19Support';
import PatriotAct from './pages/NavPages/PatriotAct';
import Footer from './components/Layout/Footer/Footer';
import NotFound404 from './pages/NotFound404';

const Register = lazy(() => import('./pages/Register'));

const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Suspense fallback={wtf_loader}>
          <Routes>
            {!authCtx.isSignedIn && (
              <Fragment>
                <Route path='/' element={<LandingPage />} />
                <Route path='/register' element={<Register />} />
              </Fragment>
            )}
            {authCtx.isSignedIn && (
              <Fragment>
                <Route path='/' element={<MyPurseHome />} />
                <Route path='/my-purse/accounts' element={<MyPurseHome />} />
                <Route path='/my-purse/debit-accounts' element={<Debits />} />
                <Route
                  path='/my-purse/credit-card-accounts'
                  element={<Credits />}
                />
                <Route
                  path='/my-purse/user-settings'
                  element={<UserSettings />}
                />
              </Fragment>
            )}
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/languages' element={<Languages />} />
            <Route path='/help' element={<Help />} />
            <Route path='/crypto' element={<Crypto />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/find-branch' element={<FindBranch />} />
            <Route path='/credit-offer' element={<CreditOffer />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/advertising' element={<Advertising />} />
            <Route
              path='/cyber-incident-2021'
              element={<CyberIncident2021 />}
            />
            <Route
              path='/cyber-incident-2019'
              element={<CyberIncident2019 />}
            />
            <Route path='/covid-19-support' element={<Covid19Support />} />
            <Route path='/patriot-act-certification' element={<PatriotAct />} />
            <Route path='*' element={<NotFound404 />} />
          </Routes>
        </Suspense>
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};
export default App;
