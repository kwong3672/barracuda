import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';

import SelectProductsHeader from './components/SelectProductsHeader';
import Navbar from './components/Navbar';
import OrderForm from './containers/OrderForm';
import OrderConfirmation from './components/OrderConfirmation';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <SelectProductsHeader />
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