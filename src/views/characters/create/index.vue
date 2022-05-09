<template>
	<v-card flat class="pa-4">
		{{ error }}
		<v-form ref="form" v-model="valid" lazy-validation>
			<v-text-field
				v-model="form.name"
				:counter="10"
				:rules="[(v) => !!v || 'Name is required']"
				label="Name"
				required
			></v-text-field>

			<v-text-field
				v-model="form.state"
				:rules="[(v) => !!v || 'Email is required']"
				label="State"
				required
			></v-text-field>

			<v-select
				v-model="form.gender"
				:items="genders"
				:rules="[(v) => !!v || 'Item is required']"
				label="Gender"
				required
			></v-select>

			<v-btn
				:disabled="!valid || loading"
				color="success"
				class="mr-4"
				@click="submit"
				:loading="loading"
				elevation="0"
			>
				Save
			</v-btn>
			<v-btn @click="$router.go(-1)" elevation="0">Cancel</v-btn>
		</v-form>
	</v-card>
</template>

<script>
import modifyStore from '@/mixins/modifyStore.js';
export default {
	mixins: [modifyStore('characters')],
	data: () => ({
		valid: true,
		form: {},
		genders: ['male', 'female'],
	}),

	methods: {
		async submit() {
			const validated = this.$refs.form.validate();
			if (validated) {
				await this.addData(this.form);

				if (!this.error && !this.loading) {
					this.$router.push({ name: 'characters' });
					this.$refs.form.reset(); // reset form
				}
			}
		},
	},
};
</script>

<style></style>
