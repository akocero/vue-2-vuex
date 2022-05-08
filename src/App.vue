<template>
	<v-app>
		<NavBar />

		<v-main class="grey lighten-3">
			<div class="ma-4">
				<router-view />
			</div>
		</v-main>
	</v-app>
</template>

<script>
import NavBar from '@/components/NavBar';
export default {
	name: 'App',
	components: {
		NavBar,
	},
};
</script>
