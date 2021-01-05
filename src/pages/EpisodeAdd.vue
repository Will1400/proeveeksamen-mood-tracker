<template>
	<episode-form @episode-create="createEpisode"></episode-form>
</template>

<script>
import EpisodeForm from "../components/episode/EpisodeForm.vue";
export default {
	components: { EpisodeForm },
	methods: {
		createEpisode(episode) {
			this.$store.dispatch("addEpisode", episode);
			this.$router.replace({ name: "episodes" });
		},
	},
};
</script>

<style></style>
