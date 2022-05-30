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

	deleteHouse = async (house) => {
		await housesApi.delete(house);
		this.setState({ houses: this.houses });
		console.log(this.houses);
	}
	

	render(){
		return (
			<div className="house-list">
				<NewHouseForm />
				{this.state.houses.map((house) => (
					<House 
						house={house}
						houses={this.houses}
						key={house._id}
						updateHouse={this.updateHouse}
						deleteHouse={this.deleteHouse}
					/>
					
				))}
			</div>
		)
	}
}


