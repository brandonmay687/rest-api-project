const HOUSES_ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses";

class HousesApi{
	/*This get request will get the list of houses from API
	* This is the Read in Crud
	*/
	get = async () => {
		try {
		const resp = await fetch(HOUSES_ENDPOINT);
		const data = await resp.json();
		return data;
		}catch(e){
			console.log('oops, looks like fetchHouses had an issue.',e);
		}
	}

	/*This put request will add new rooms or delete rooms from our house
	  This corresponds to Update in CRUD
	*/
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

	// this video has helpful tips specifically the body section
	// https://www.youtube.com/watch?v=cuEtnrL9-H0&t=206s
	// I needed to pass an object with a key value pair, not just the name
	// was having trouble getting this to work during office hours
	create = async (house) => {
		try{
			const resp = await fetch(`${HOUSES_ENDPOINT}/`, { 
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'same-origin', // include, *same
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
				method: 'DELETE',
				body: JSON.stringify(house)
				});

			return await resp.json();
		}

		catch(err){
			console.error(err);
		}
	}
}

export const housesApi = new HousesApi();
