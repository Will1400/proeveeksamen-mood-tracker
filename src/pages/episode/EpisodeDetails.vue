<template>
	<div class="container m-auto p-4 md:w-10/12">
		<div class="flex justify-between items-center">
			<button @click="back" class="w-7 m-3 ml-0">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class=""
				>
					<path
						fill-rule="evenodd"
						d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
			<h2 class="text-center text-2xl">
				{{ episode.title }}
			</h2>
			<router-link
				:to="{ name: 'episodeEdit', params: { id: episode.id } }"
			>
				<div
					class="flex gap-2 border-b-2 pl-2 border-transparent hover:border-yellow-400 justify-center transition-colors"
				>
					<span>Edit</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="w-5"
					>
						<path
							d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
						/>
					</svg>
				</div>
			</router-link>
		</div>
		<hr class="border-gray-400 relative -bottom-5" />

		<div class="flex justify-between items-center">
			<div
				class="text-red-400"
				:class="{ 'text-yellow-400': episode.rating > 2 }"
			>
				<base-emoji classes="w-10" :emoji="episode.rating"></base-emoji>
			</div>
			<p class="text-gray-400 py-2">{{ formattedDate }}</p>
		</div>
		<hr class="border-gray-400 relative bottom-6" />
		<div>
			<p class="break-words">{{ episode.description }}</p>
		</div>
	</div>
</template>

<script>
import Dayjs from "dayjs";

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

			return episode;
		},
		formattedDate() {
			return Dayjs(this.episode.date).format("D/M/YYYY hh:mm");
		},
	},
	created() {
		this.$store.dispatch("loadEpisodes");
	},
};
</script>

<style></style>
