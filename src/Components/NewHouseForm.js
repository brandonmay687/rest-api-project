import React, { useState } from 'react';
import { housesApi } from '../rest/HousesApi.js';


export const NewHouseForm = () => {
	const[name, setName] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		if (name){
		housesApi.create(name);
		setName('');
		} 
		else{
			console.log('invalid input');
		}
	};

	const onChange = e => {
		setName(e.target.value)
	}

	return(
		<div>
			<h4>Add a new house </h4>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='Name of New House'
					onChange={ onChange }
					value={name}
				/>
				<button type='submit'>Add House</button>
				</form>
			</div>
			)
};


