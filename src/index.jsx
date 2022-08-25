import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  // useHistory,
  Switch,
} from 'react-router-dom';

import 'antd/dist/antd.less';
import { NotFoundPage } from './components/pages/NotFound';
import { LandingPage } from './components/pages/Landing';
import { TablePage } from './components/pages/Table';
import { FooterContent, SiderContent, SubFooter } from './components/Layout';
import { Layout } from 'antd';
import HeatMapContainer from './components/pages/DataVisualizations/HeatMapContainer';
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

export function App() {
  const { Content, Footer } = Layout;
  return (
    <Layout>
      <Layout>
        <SiderContent />
        <Content>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/table" component={TablePage} />
            <Route path="/graphs" component={HeatMapContainer} />
            <Route component={NotFoundPage} />
          </Switch>
        </Content>
      </Layout>
      <Footer
        style={{
          backgroundColor: '#473D3D',
          color: '#E2F0F7',
        }}
      >
        <FooterContent />
      </Footer>
      <Footer
        style={{
          backgroundColor: '#403737',
          padding: 0,
        }}
      >
        <SubFooter />
      </Footer>
    </Layout>
  );
}
