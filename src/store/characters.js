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
		setLoading: (state, data) => {
			console.log(state.isLoading);
			return (state.isLoading = data);
		},
	},
	actions: {
		// for actions like fetching data or async functions
		async getData({ commit, state }) {
			// state.isLoading = true;
			commit('setLoading', true);
			try {
				const { data } = await axios.get(
					'http://hxh-api.herokuapp.com/api/characters'
				);

				commit('setData', data);
				commit('setLoading', false);
				// state.isLoading = false;
			} catch (error) {
				console.log(error);
				// state.isLoading = false;
				commit('setLoading', false);
			}
		},
	},
};
