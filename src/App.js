import React from 'react';
import {Provider} from 'react-redux';
import Store from './Redux/Store';
// import HomeS from '../Home/index';
import Navig from './Screens/Navigation';


const App = () => {
  return (
    <Provider store={Store}>
      <Navig />
    </Provider>
  );
};

export default App;
