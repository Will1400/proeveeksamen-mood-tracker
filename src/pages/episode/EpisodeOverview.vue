<template>
	<div v-if="isAuthenticated">
		<episode-list></episode-list>
		<div
			class="fixed sm:relative right-5 bottom-5 sm:block sm:right-auto sm:ml-4 sm:mt-5 sm:bottom-auto sm:pb-4"
		>
			<button
				@click="addResource"
				class="rounded-full h-20 w-20 flex items-center justify-center transition-colors bg-green-800 text-green-50 hover:bg-green-600"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 6v6m0 0v6m0-6h6m-6 0H6"
					/>
				</svg>
			</button>
		</div>
	</div>
	<div v-else class="p-4 w-full">
		<div>
			<h1 class="text-center text-xl">
				Login for at få adgang til dine episoder
			</h1>
		</div>
		<div class="w-full mt-10 flex justify-center">
			<button
				@click.prevent="goToAuth"
				class="focus:outline-none bg-green-500 w-full md:w-3/4 px-10 py-2 rounded-sm text-gray-50 btn-click-scale"
			>
				Login
			</button>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import EpisodeList from "/src/components/episode/EpisodeList.vue";
export default {
	components: { EpisodeList },
	methods: {
		addResource() {
			this.$router.push({ name: "episodeAdd" });
		},
		goToAuth() {
			this.$router.push({ name: "auth" });
		},
	},
	computed: {
		...mapGetters(["isAuthenticated"]),
	},
	created() {
		if (this.isAuthenticated) {
			this.$store.dispatch("loadEpisodes");
		}
	},
};
</script>
