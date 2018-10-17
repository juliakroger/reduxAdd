import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Aplication from './aplication';
import store from './store';

class App extends Component {
  render() {
    return (	
    	<Provider store={store}>	
	    	<div className="App">
	    	<Aplication />
	    	</div>
    	</Provider>
    );
  }
}

export default App;
