import axios from 'axios';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const verifyToken = token => {
	return axios
		.post(`http://localhost:5000/auth/verifyToken`, { token })
		.then(res => {
			if (res.data.response === 'success') {
				cookies.set('token', token, {
					path: '/',
					expires: cookieTime()
				});

				return true;
			} else {
				return false;
			}
		})
		.catch(err => {
			return err;
		});
};

export const authenticate = token => {
	return new Promise(async (resolve, reject) => {
		const hasAccess = await verifyToken(token);

		if (hasAccess) {
			resolve(true);
		} else {
			reject();
		}
	});
};

export const getUserToken = () => {
	const token = cookies.get('token');
	return token;
};

const cookieTime = () => {
	let date = new Date();
	date.setDate(date.getDate() + 1);
	return date;
};
