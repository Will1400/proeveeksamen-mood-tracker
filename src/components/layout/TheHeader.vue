<template>
	<Header class="bg-green-200 p-4">
		<section
			class="container flex justify-between items-center m-auto px-4"
		>
			<div>
				<router-link :to="{ name: 'episodes' }">
					<h1 class="text-2xl text-center">Mood Tracker Vercel</h1>
				</router-link>
			</div>
			<div>
				<button
					@click="logout"
					v-if="isAuthenticated"
					class="flex items-center transition-all px-2 rounded-sm focus:outline-none border-b-2 pt-1 border-transparent hover:border-yellow-400"
				>
					log ud
				</button>
			</div>
		</section>
	</Header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	methods: {
		login() {
			this.$router.replace({ name: "auth" });
		},
		logout() {
			this.$store.dispatch("logout");
			this.$router.replace({ name: "episodes" });
		},
	},
	computed: {
		...mapGetters(["isAuthenticated"]),
	},
};
</script>

<style></style>
