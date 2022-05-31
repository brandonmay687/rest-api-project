import React, { useState, useEffect } from 'react';
import House from './House';
import { housesApi } from '../rest/HousesApi.js';
import NewHouseForm from './NewHouseForm';

import '../Styles/HouseList.css';

const HouseList = () => {
	const [ houses, setHouses ] = useState([]);

	const fetchHouses = async () => {
		const houses = await housesApi.get();
		setHouses( houses )
	};

	const createHouse = async (houseName) => {
		await housesApi.create(houseName);
		fetchHouses();
	}

	const updateHouse = async(updatedHouse) => {
		await housesApi.put(updatedHouse);
		fetchHouses();
	};

	const deleteHouse = async (house) => {
		await housesApi.delete(house);
		fetchHouses();
	}

	useEffect(() => {
		fetchHouses();
	}, [])

	console.log(houses)
		return (
			<div className="house-list">
				<NewHouseForm createHouse = { createHouse } />
				{houses.map(house => (
					<House 
						house = { house }
						houses = { houses }
						key = { house._id }
						updateHouse = { updateHouse }
						deleteHouse = { deleteHouse }
					/>
					
				))
				}
			</div>
		)
	}

	export default HouseList;