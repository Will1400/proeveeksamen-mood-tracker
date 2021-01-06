<template>
	<div>
		<episode-list></episode-list>
		<div class="fixed right-5 bottom-5">
			<button
				@click="addResource"
				class="rounded-full h-20 w-20 flex items-center justify-center bg-green-800 text-green-50"
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
</template>

<script>
import EpisodeList from "../components/episode/EpisodeList.vue";
export default {
	components: { EpisodeList },
	methods: {
		addResource() {
			this.$router.replace({ name: "episodeAdd" });
		},
	},
	created() {
		if (this.$store.getters.isAuthenticated) {
			this.$store.dispatch("loadEpisodes");
		}
	},
};
</script>
