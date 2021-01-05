<template>
	<ul class="flex flex-col gap-y-4 p-4">
		<li v-for="episode in episodes" :key="episode.id">
			<episode-list-item v-bind="episode"></episode-list-item>
		</li>
	</ul>
</template>

<script>
import { mapGetters } from "vuex";
import EpisodeListItem from "./EpisodeListItem.vue";

export default {
	components: { EpisodeListItem },
	computed: {
		...mapGetters({
			episodes: "episodes",
		}),
	},
};
</script>

<style></style>
