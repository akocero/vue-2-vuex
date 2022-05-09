<template>
	<v-card class="groups pa-4" flat>
		<h3>groups</h3>
		<v-icon @click="refresh()">mdi-refresh</v-icon>
		<v-row v-if="!loading">
			<v-col
				cols="12"
				sm="4"
				v-for="character in data"
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
import initStore from '@/mixins/initStore.js';

export default {
	mixins: [initStore('groups')],
	data() {
		return {};
	},
	components: {},
};
</script>

<style></style>
