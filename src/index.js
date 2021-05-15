import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './Components/ErrorBoundary/';
import TypeService from './services/TypeService';
import TypeContext from './Components/TypeContext';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const typeService = new TypeService();

ReactDOM.render(
  <Provider store={store}>
        <ErrorBoundry>
            <TypeContext.Provider value={typeService}>
                <Router>
                    <App />
                </Router>
            </TypeContext.Provider>
        </ErrorBoundry>
  </Provider>
  , document.getElementById('root')
);