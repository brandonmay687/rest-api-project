const HOUSES_ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses";

class HousesApi{
	get = async () => {
		try {
		const resp = await fetch(HOUSES_ENDPOINT);
		const data = await resp.json();
		return data;
		}catch(e){
			console.log('oops, looks like fetchHouses had an issue.',e);
		}
	}

	put = async (house) => {
		try {
			const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, { 
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(house)
			});
			return await resp.json();
		} catch(e){
			console.log('oops, looks like we had an issue updating our house .',e);
		}
	}

	create = async (house) => {
		try{
			const resp = await fetch(`${HOUSES_ENDPOINT}/`, { 
			method: 'POST', 
			mode: 'cors', 
			cache: 'no-cache', 
			credentials: 'same-origin', 
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: house
			})
			});
			return await resp.json();
		}

		catch(e){
			console.log('error with create');
			console.log('e is: ');
			console.log(e);
		}
	}

	delete = async (house) => {
		try {
			const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, { 
				method: 'DELETE'
				});
		}

		catch(err){
			console.error(err);
		}
	}
}

export const housesApi = new HousesApi();
