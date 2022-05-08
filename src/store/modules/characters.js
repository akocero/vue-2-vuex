import axios from 'axios';

export default {
	state: {
		data: [],
		isLoading: false,
	},
	getters: {
		// getting data from state
		allData: (state) => {
			return state.data;
		},
	},
	mutations: {
		// setting data data from action
		setData: (state, data) => {
			return (state.data = data);
		},
	},
	actions: {
		// for actions like fetching data or async functions
		async getData({ commit, state }) {
			state.isLoading = true;
			try {
				const { data } = await axios.get(
					'http://hxh-api.herokuapp.com/api/characters'
				);

				commit('setData', data);
				state.isLoading = false;
			} catch (error) {
				console.log(error);
				state.isLoading = false;
			}
		},
	},
};
