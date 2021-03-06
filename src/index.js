import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/auth-context';

import App from './App';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
