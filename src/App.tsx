import * as React from 'react';
import './App.css';
import CanchaList from './CanchaList';

import logo from './logo.svg';

class App extends React.Component<{}, any>{
	
	public render() {
	  return (
		<div className="App">
		  <div className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h2>Welcome to React</h2>
		  </div>
		  <CanchaList/>
		</div>
	  );
	}
  
}

export default App;
