<template>
	<v-card flat class="dashboard pa-4">
		<h3>Dashboard</h3>
		<v-icon @click="refresh()">mdi-refresh</v-icon>
		<v-row v-if="!loading">
			<v-col
				cols="12"
				sm="4"
				v-for="character in items"
				:key="character.id"
			>
				<v-card class="pa-2" outlined tile>
					{{ character.name }}
				</v-card>
			</v-col>
		</v-row>
		<div v-else>Loading...</div>
	</v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
	data() {
		return {};
	},
	components: {},
	computed: {
		...mapState({
			items: (state) => state['characters'].data,
			loading: (state) => state['characters'].isLoading,
		}),
	},
	methods: {
		...mapActions({
			getData: 'characters/getData',
		}),
		refresh() {
			this.getData();
		},
	},
	created() {
		this.getData();
	},
};
</script>
