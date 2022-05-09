export default {
	setData: (state, data) => {
		return (state.data = data);
	},
	setLoading: (state, data) => {
		console.log(state.isLoading);
		return (state.isLoading = data);
	},
	store(state, data) {
		console.log('mutating store', data);
	},
};
