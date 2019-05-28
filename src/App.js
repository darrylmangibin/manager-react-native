import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import LoginForm from './components/LoginForm';

import keys from '../config/keys';

class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp(keys)
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  };
};

export default App;