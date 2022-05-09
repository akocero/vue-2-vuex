import { mapActions, mapState } from 'vuex';

export default (store) => {
	return {
		computed: {
			...mapState({
				data: (state) => state[store].data,
				loading: (state) => state[store].isLoading,
			}),
		},
		methods: {
			...mapActions({
				getData: `${store}/getData`,
				storeData: `${store}/storeData`,
			}),
			refresh() {
				this.getData();
			},
		},
		created() {
			if (!this.data.length) {
				this.getData();
			}
		},
	};
};
