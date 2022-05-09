import { mapActions, mapState } from 'vuex';

export default (store) => {
	return {
		computed: {
			...mapState({
				loading: (state) => state[store].isLoading,
				error: (state) => state[store].error,
			}),
		},
		methods: {
			...mapActions({
				addData: `${store}/addData`,
			}),
		},
	};
};
