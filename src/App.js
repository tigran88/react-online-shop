import React, { Component } from 'react';
import './styles/tailwind.css';
import './App.css';

import Layout from './containers/Layout/Layout';

class App extends Component {
  render() {
    return (
        <Layout>
            <p>test</p>
        </Layout>
    );
  }
}

export default App;
