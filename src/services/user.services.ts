import axios from 'axios';

const baseUrl = 'https://api.github.com';

const getAllUsers = async (filter: string) => {
	const res = await axios.get(`${baseUrl}/search/users?q=${filter || ' '}`);
	return res.data;
};

const getUserData = async (login: string) => {
	const res = await axios.get(`${baseUrl}/users/${login}`);
	return res.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAllUsers, getUserData };
