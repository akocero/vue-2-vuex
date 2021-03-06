import { mapActions, mapState } from 'vuex';

export default (store) => {
	return {
		computed: {
			...mapState({
				data: (state) => state[store].data,
				loading: (state) => state[store].isLoading,
				error: (state) => state[store].error,
			}),
		},
		methods: {
			...mapActions({
				fetchData: `${store}/fetchData`,
			}),
			refresh() {
				this.fetchData();
			},
		},
		created() {
			if (!this.data.length) {
				this.fetchData();
			}
		},
	};
};
