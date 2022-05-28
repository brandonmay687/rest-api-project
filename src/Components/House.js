import React from 'react';
import {NewRoomForm} from './NewRoomForm';

import '../Styles/House.css';

export const House = (props) => {
	const { house, updateHouse, deleteHouse} = props;

	const deleteRoom = (roomId) => {
		const updatedHouse = {
			...house,
			rooms: house.rooms.filter((x) => x._id !== roomId)
		};
		updateHouse(updatedHouse);
	}

	const addNewRoom = (room) => {
		updateHouse({ ...house, rooms: [...house.rooms, room]});
	}

	const rooms = () => (
		<ul>
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
			<button className = 'close' onClick={() => deleteHouse(house._id)}>X</button>
			<h1>{house.name}</h1>
			{
				rooms({rooms,houseId: house._id, deleteRoom})
			}
			<NewRoomForm addNewRoom={addNewRoom} />
		</div>
	);
};
