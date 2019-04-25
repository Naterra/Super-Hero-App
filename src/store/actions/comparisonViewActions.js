import * as types from '../types';

export const setSelectedProfileType = type => dispatch => {
	dispatch({ type: types.SET_SELECTED_PROFILE_TYPE, payload: type });
};

export const setHero = data => dispatch => {
	dispatch({ type: types.SET_HERO, payload: data });
};

export const setVillain = data => dispatch => {
	dispatch({ type: types.SET_VILLAIN, payload: data });
};

export const getAvgPower = data => {
	let points = 0;
	const values = Object.values(data);
	const size = values.length;

	for (let item of values) {
		if (item !== 'null') {
			points += Number(item);
		}
	}
	const avgPov = Math.round(points / size);
	return avgPov;
};
