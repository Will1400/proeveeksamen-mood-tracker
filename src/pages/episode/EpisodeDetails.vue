<template>
	<div class="container m-auto bg-white rounded-md shadow-lg p-4 md:w-10/12">
		<div class="grid grid-cols-10 items-center">
			<button @click="back" class="w-7 m-3">
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
			<h2 class="text-center text-2xl col-span-8">
				{{ episode.title }}
			</h2>
		</div>
		<div class="flex justify-between items-center">
			<div
				class="text-red-400"
				:class="{ 'text-yellow-400': episode.rating > 2 }"
			>
				<base-emoji classes="w-10" :emoji="episode.rating"></base-emoji>
			</div>
			<p class="text-gray-400 py-2">{{ episode.date }}</p>
		</div>
		<div>
			<p class="break-words">{{ episode.description }}</p>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	props: ["id"],
	methods: {
		back() {
			this.$router.push({ name: "episodes" });
		},
	},
	computed: {
		...mapGetters(["episodes"]),
		episode() {
			const episodes = this.episodes;

			if (episodes.length == 0) {
				return "not found";
			}

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
