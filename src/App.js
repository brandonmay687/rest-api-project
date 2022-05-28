import React, {Component} from 'react';
import HouseList from './Components/HouseList';

import './Styles/App.css';

class App extends Component{
	render(){
		return(
			<div className = 'App'>
				<HouseList />
			</div>
		)
	}
}
export default App;