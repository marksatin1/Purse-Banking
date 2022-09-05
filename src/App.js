import { useContext, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthContext from './context/AuthContext';

import Header from './components/Layout/Header';
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import Homepage from './pages/Homepage';
import Debits from './pages/Debits';
import Credits from './pages/Credits';
import UserSettings from './pages/UserSettings';
import FindBranch from './pages/FindBranch';
import About from './pages/About';
import Contact from './pages/Contact';
import Languages from './pages/Languages';
import Help from './pages/Help';
import Crypto from './pages/Crypto';
import Privacy from './pages/Privacy';
import CreditOffer from './pages/CreditOffer';
import Careers from './pages/Careers';
import Advertising from './pages/Advertising';
import CyberIncident2021 from './pages/CyberIncident2021';
import CyberIncident2019 from './pages/CyberIncident2019';
import Covid19Support from './pages/Covid19Support';
import PatriotAct from './pages/PatriotAct';
import Footer from './components/Layout/Footer';
import PageNotFound from './pages/PageNotFound';

import wtf_loader from './assets/wtf_loader.gif';

const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Suspense fallback={wtf_loader}>
          <Routes>
            {!authCtx.signedIn && (
              <>
                <Route path='/' element={<LandingPage />} />
                <Route path='/register' element={<Register />} />
              </>
            )}
            {authCtx.signedIn && (
              <>
                <Route path='/' element={<Homepage />} />
                <Route path='/my-purse/accounts' element={<Homepage />} />
                <Route path='/my-purse/debit-accounts' element={<Debits />} />
                <Route
                  path='/my-purse/credit-card-accounts'
                  element={<Credits />}
                />
                <Route
                  path='/my-purse/user-settings'
                  element={<UserSettings />}
                />
              </>
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
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default App;
