import axios from 'axios';

export default {
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
};
