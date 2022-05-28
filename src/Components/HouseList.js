import React, { Component } from 'react';
import {House} from './House';
import {housesApi} from '../rest/HousesApi.js';
import {NewHouseForm} from './NewHouseForm';

import '../Styles/HouseList.css';

export default class HouseList extends Component{
	state = {
		houses: []
	};

	componentDidMount(){
		this.fetchHouses();
	}

	fetchHouses = async () => {
		const houses = await housesApi.get();
		this.setState({houses});
	};

	updateHouse = async(updatedHouse) => {
		await housesApi.put(updatedHouse);
		this.fetchHouses();
	};

	deleteHouse = async (deletedHouse) => {
		await housesApi.delete(deletedHouse);
		this.setState({
			houses: this.houses.filter((x) => x._id !== this.houses._Id)
		});
	}
	

	render(){
		return (
			<div className="house-list">
				<NewHouseForm />
				{this.state.houses.map((house) => (
					<House 
						house={house}
						key={house._id}
						updateHouse={this.updateHouse}
						deleteHouse={this.deleteHouse}
					/>
					
				))}
			</div>
		)
	}
}


