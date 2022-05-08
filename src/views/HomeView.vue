<template>
	<div class="home">
		<h1>Characters</h1>
		<div class="container">
			<div class="row" v-if="!loading">
				<div
					class="item"
					v-for="character in allData"
					:key="character.id"
				>
					{{ character.name }}
				</div>
			</div>
			<div v-else>Loading...</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
export default {
	name: 'HomeView',
	data() {
		return {
			isLoading: '',
		};
	},
	components: {},
	computed: {
		...mapGetters(['allData']),
		...mapState({
			items: (state) => state['characters'].data,
			loading: (state) => state['characters'].isLoading,
		}),
	},
	methods: {
		...mapActions(['getData']),
	},
	created() {
		this.getData();
	},
};
</script>
