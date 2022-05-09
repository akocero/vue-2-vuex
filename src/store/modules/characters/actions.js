import axios from 'axios';

export default {
	async fetchData({ commit, state }) {
		commit('SET_LOADING', true);
		commit('SET_ERROR', null);
		try {
			const { data } = await axios.get(
				'http://hxh-api.herokuapp.com/api/characters'
			);

			commit('SET_DATA', data);
			commit('SET_LOADING', false);
			commit('SET_ERROR', null);
		} catch (err) {
			commit('SET_LOADING', false);
			commit('SET_ERROR', err);
		}
	},

	async addData({ commit }, payload) {
		commit('SET_LOADING', true);
		commit('SET_ERROR', null);
		try {
			const res = await axios.post(
				'http://hxh-api.herokuapp.com/api/character',
				payload
			);
			commit('ADD_DATA', res.data);
			commit('SET_LOADING', false);
			commit('SET_ERROR', null);
		} catch (err) {
			commit('SET_LOADING', false);
			commit('SET_ERROR', err);
		}
	},
};
