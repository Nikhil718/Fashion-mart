import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import SignInandSignUpPage from './page/sign in- signup/sign in- signup.component';
import HomePage from './page/home/homepage.component';
import ShopPage from './page/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/signin' component={SignInandSignUpPage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>

  );
}

export default App;
