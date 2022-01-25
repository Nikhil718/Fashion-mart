import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import SignInandSignUpPage from './page/sign in- signup/sign in- signup.component';
import HomePage from './page/home/homepage.component';
import ShopPage from './page/shop/shop.component';
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from '../src/components/firebase/firebase-util';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

 unsubscribeFromAuth = null

componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    createUserProfileDocument(user);
  });
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInandSignUpPage} />
        </Switch>
      </div>
    );
  }
}







export default App;
