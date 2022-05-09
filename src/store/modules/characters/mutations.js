export default {
	SET_DATA: (state, data) => {
		return (state.data = data);
	},
	SET_LOADING: (state, data) => {
		return (state.isLoading = data);
	},
	SET_ERROR: (state, data) => {
		return (state.error = data);
	},
	ADD_DATA: (state, item) => state.data.unshift(item),
};
