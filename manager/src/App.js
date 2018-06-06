import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {  createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
          apiKey: "AIzaSyB3b0GPIGzU3tSl28in-YgerplA3dc6tMg",
          authDomain: "manager-841fe.firebaseapp.com",
          databaseURL: "https://manager-841fe.firebaseio.com",
          projectId: "manager-841fe",
          storageBucket: "",
          messagingSenderId: "1003154709345"
      };
firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
