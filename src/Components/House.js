import React from 'react';
import {NewRoomForm} from './NewRoomForm';

import '../Styles/House.css';

const House = props => {
	const { house, houses, updateHouse, deleteHouse} = props;

	const deleteRoom = roomId => {
		const updatedHouse = {
			...house,
			rooms: house.rooms.filter((x) => x._id !== roomId)
		};
		updateHouse(updatedHouse);
	}

	const addNewRoom = room => {
		updateHouse({ ...house, rooms: [...house.rooms, room]});
	}

	const rooms = () => (
		<ul className = 'rooms-main'>
			{house.rooms.map((room,index) => (
				<li key={index}>
					<label> {`${room.name} Area: ${room.area}`}</label>
					<button onClick={() => deleteRoom(room._id)}>Delete</button>
				</li>
			))}
		</ul>
	);
	return (
		<div className = 'house-main'>
			<div className = 'house-wrap'>
				<h1>{ house.name }</h1>
				{
					rooms({ rooms,houseId: house._id, deleteRoom })
				}
				<NewRoomForm addNewRoom = { addNewRoom } />
			</div>
			<button className = 'close' onClick={() => {
				deleteHouse( house, houses );
			}}>X</button>
		</div>
	);
};


export default House;