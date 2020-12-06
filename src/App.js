import React, { Component } from 'react';
import Layout from './containers/Layout';
import { Provider } from './store';
import MainContainer from './containers/MainContainer';

import './styles/tailwind.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Layout>
          <MainContainer />
        </Layout>
      </Provider>
    );
  }
}

export default App;
