import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './context/AuthContextProvider';

import App from './App';

import './styles/css/main.css';

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
