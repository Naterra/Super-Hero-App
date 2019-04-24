import axios from 'axios';
import * as types from '../types';

export const searchByName = name => dispatch => {
	return axios
		.get(`/api/search?name=${name}`)
		.then(async res => {
			// console.log('searchByName  then', res.data);
			const records = res.data.results;

			let rec = [];
			for (let item of records) {
				console.log('item', item.name);
				let validImg = await validateImg(item.image.url);
				if (!validImg && validImg.status !== 200) item.image.url = '/img/default-avatar.jpg';
				rec.push(item);
			}

			dispatch({ type: types.SET_SEARCH_RESULT, payload: rec });
		})
		.catch(err => {
			// console.error('searchByName catch', err);
			return err;
		});
};

const validateImg = url => {
	return new Promise((resolve, reject) => {
		axios
			.get(url)
			.then(res => {
				resolve(res);
			})
			.catch(err => {
				resolve(false);
			});
	});
};
