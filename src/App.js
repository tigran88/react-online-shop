import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/tailwind.css';
import './App.css';

import Layout from './containers/Layout/Layout';
const Home = lazy(() => import('./containers/Home/Home'));
const Products = lazy(() => import('./containers/Products/Products'));
const Cart = lazy(() => import('./containers/Cart/Cart'));

class App extends Component {
  render() {
    return (
        <Layout>
            <Suspense fallback={<div>Loading ...</div>}>
                <Switch>
                    <Route path='/' component={Home} exact />
                    <Route path='/products' component={Products} />
                    <Route path='/cart' component={Cart} />
                </Switch>
            </Suspense>
        </Layout>
    );
  }
}

export default App;
