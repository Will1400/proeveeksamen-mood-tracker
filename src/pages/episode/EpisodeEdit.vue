<template>
	<div>
		<button @click="cancel" class="w-7 m-3">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="p-1"
			>
				<path
					fill-rule="evenodd"
					d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
		<episode-form
			@episode-submit="editEpisode"
			:episode="episode"
		></episode-form>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import EpisodeForm from "/src/components/episode/EpisodeForm.vue";
export default {
	props: ["id"],
	components: { EpisodeForm },
	methods: {
		editEpisode(episode) {
			this.$store.dispatch("editEpisode", episode);
			this.$router.go(-1); // Go back
		},
		cancel() {
			this.$router.go(-1); // Go back
			// this.$router.replace({ name: "episodes" });
		},
	},
	computed: {
		...mapGetters(["episodes"]),
		episode() {
			const episodes = this.episodes;

			if (episodes.length == 0) {
				return "not found";
			}
			console.log(episodes);

			const episode = episodes.find((x) => x.id === this.id);
			console.log(episode);

			return episode;
		},
	},
	created() {
		this.$store.dispatch("loadEpisodes");
		console.log("loading...");
	},
};
</script>

<style></style>
