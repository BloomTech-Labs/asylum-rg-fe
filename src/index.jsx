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
import { FooterContent, SubFooter } from './components/Layout';
import { Layout } from 'antd';
import GraphsContainer from './components/pages/DataVisualizations/GraphsContainer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './state/reducers';
import { colors } from './styles/data_vis_colors';

const { primary_accent_color } = colors;

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
  const { Footer, Header } = Layout;
  return (
    <Layout>
      <Layout>
        <Content>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/table" component={TablePage} />
            <Route path="/heatmap" component={HeatMapContainer} />
            <Route component={NotFoundPage} />
          </Switch>
        </Content>
      </Layout>
      <Footer
        style={{
          backgroundColor: '#404C4A',
          color: '#E2F0F7',
        }}
      >
        <FooterContent />
      </Footer>
      <Footer
        style={{
          backgroundColor: '#404C4A',
          padding: 0,
        }}
      >
        <SubFooter />
      </Footer>
    </Layout>
  );
}
