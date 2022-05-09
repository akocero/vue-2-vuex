<template>
	<nav>
		<v-app-bar color="grey lighten-5" flat app dense>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

			<v-toolbar-title>HxH AdminPanel</v-toolbar-title>

			<v-spacer></v-spacer>
			<v-btn icon>
				<v-icon>mdi-logout</v-icon>
			</v-btn>
		</v-app-bar>

		<v-navigation-drawer
			v-model="drawer"
			color="blue-grey darken-3"
			flat
			app
			dark
		>
			<v-list>
				<v-list-item>
					<v-list-item-avatar>
						<v-img
							src="https://cdn.vuetifyjs.com/images/john.png"
						></v-img>
					</v-list-item-avatar>
				</v-list-item>

				<v-list-item link>
					<v-list-item-content>
						<v-list-item-title class="text-h6">
							John Doe
						</v-list-item-title>
						<v-list-item-subtitle
							>johndoe@hxh.com</v-list-item-subtitle
						>
					</v-list-item-content>

					<v-list-item-action>
						<v-icon>mdi-menu-down</v-icon>
					</v-list-item-action>
				</v-list-item>
			</v-list>
			<v-divider></v-divider>
			<v-list nav dense>
				<v-list-item-group
					v-model="selectedItem"
					color="grey lighten-5"
				>
					<v-list-item
						v-for="(item, i) in items"
						:key="i"
						router
						:to="item.route"
					>
						<v-list-item-icon>
							<v-icon v-text="item.icon"></v-icon>
						</v-list-item-icon>

						<v-list-item-content>
							<v-list-item-title
								v-text="item.text"
							></v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			drawer: true,
			selectedItem: 0,
			items: [
				{
					text: 'Dashboard',
					icon: 'mdi-chart-areaspline',
					route: '/dashboard',
				},
				{
					text: 'Characters',
					icon: 'mdi-human-queue',
					route: '/characters',
				},
				{
					text: 'Groups',
					icon: 'mdi-account-group',
					route: '/groups',
				},
				{
					text: 'Family',
					icon: 'mdi-human-male-female-child',
					route: '/families',
				},
			],
		};
	},
	mounted() {
		// console.log(this.drawer);
	},
};
</script>

<style></style>
