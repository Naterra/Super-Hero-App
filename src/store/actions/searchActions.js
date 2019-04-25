import axios from 'axios';
import * as types from '../types';

export const resetSearchResult = () => dispatch => {
	dispatch({ type: types.RESET_SEARCH_RESULT });
};

export const searchByName = name => dispatch => {
	return axios
		.get(`/api/search?name=${name}`)
		.then(async res => {
			const records = res.data.results;

			let rec = [];
			for (let item of records) {
				let validImg = await validateImg(item.image.url);
				if (!validImg && validImg.status !== 200) item.image.url = '/img/default-avatar.jpg';
				rec.push(item);
			}

			dispatch({ type: types.SET_SEARCH_RESULT, payload: rec });
			return res;
		})
		.catch(err => {
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
