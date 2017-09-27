import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import OrderForm from './containers/OrderForm';
import OrderConfirmation from './containers/OrderConfirmation';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header title="Purchase Online">
              You are one step from solving you I.T. problems with the industy's easiest and most comprehensive security solutions.  Just select the desired products, deployment options and models.  Virutal and cloud products are available immediately, and appliances will be shipped within two (2) business days.  All products come with Barracuda's no-questions-asked 30-day money back guarantee.
            </Header>
            <Navbar />
            <Route exact path="/" component={OrderForm} />
            <Route path="/order_confirmation" component={OrderConfirmation} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;