/**
 * Rather than straight up removing things, tentatively commenting them out for now. To be removed later if proven unnecessary
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  // useHistory,
  Switch,
} from 'react-router-dom';
// import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import './styles/styles.css';
import 'antd/dist/antd.less';
import { NotFoundPage } from './components/pages/NotFound';
import { ExampleListPage } from './components/pages/ExampleList';
import { LandingPage } from './components/pages/Landing';
import { TablePage } from './components/pages/Table';
import { ExampleDataViz } from './components/pages/ExampleDataViz';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './state/reducers';

const store = configureStore({ reducer: reducer });

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById('root')
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  // const history = useHistory();

  // const authHandler = () => {
  //   // We pass this to our <Security /> component that wraps our routes.
  //   // It'll automatically check if userToken is available and push back to login if not :)
  //   history.push('/login');
  // };

  return (
    // <Security {...config} onAuthRequired={authHandler}>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/table" component={TablePage} />
      <Route path="/example-list" component={ExampleListPage} />
      <Route path="/datavis" component={ExampleDataViz} />
      <Route component={NotFoundPage} />
    </Switch>
    // </Security>
  );
}
