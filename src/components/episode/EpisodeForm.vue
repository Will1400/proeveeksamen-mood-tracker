<template>
	<form @submit.prevent="submitData" class="w-full p-4 mx-auto">
		<div>
			<label for="title" class="text-lg">Titel</label>
			<input
				class="form-control w-full"
				type="text"
				name="title"
				required
				placeholder="Klarede opvasken 💪"
				v-model.trim="title"
			/>
		</div>
		<div class="my-10">
			<h2>Hvordan har du det?</h2>
			<div
				class="ratings flex gap-4 justify-between px-1 mt-5 text-gray-300"
			>
				<div>
					<label
						for="rating--1"
						class="cursor-pointer hover:text-red-500 transition-colors"
						:class="{ active: rating == 1 }"
					>
						<base-emoji classes="w-10 h-10" emoji="1"></base-emoji>
					</label>
					<input
						type="radio"
						name="rating"
						id="rating--1"
						value="1"
						v-model="rating"
						hidden
					/>
				</div>
				<div>
					<label
						for="rating--2"
						class="cursor-pointer hover:text-red-400 transition-colors"
						:class="{ active: rating == 2 }"
					>
						<base-emoji classes="w-10 h-10" emoji="2"></base-emoji>
					</label>
					<input
						type="radio"
						name="rating"
						id="rating--2"
						value="2"
						v-model="rating"
						hidden
					/>
				</div>
				<div>
					<label
						for="rating--3"
						class="cursor-pointer hover:text-yellow-400 transition-colors"
						:class="{ active: rating == 3 }"
						><base-emoji classes="w-10 h-10" emoji="3"></base-emoji
					></label>
					<input
						type="radio"
						name="rating"
						id="rating--3"
						value="3"
						v-model="rating"
						hidden
					/>
				</div>
				<div>
					<label
						for="rating--4"
						class="cursor-pointer hover:text-yellow-400 transition-colors"
						:class="{ active: rating == 4 }"
						><base-emoji classes="w-10 h-10" emoji="4"></base-emoji>
					</label>
					<input
						type="radio"
						name="rating"
						id="rating--4"
						value="4"
						v-model="rating"
						hidden
					/>
				</div>
				<div>
					<label
						for="rating--5"
						class="cursor-pointer hover:text-yellow-400 transition-colors"
						:class="{ active: rating == 5 }"
						><base-emoji classes="w-10 h-10 " emoji="5"></base-emoji
					></label>
					<input
						checked
						type="radio"
						name="rating"
						id="rating--5"
						value="5"
						v-model="rating"
						hidden
					/>
				</div>
			</div>
		</div>
		<div>
			<label for="description">Beskrivelse</label>
			<textarea
				name="description"
				id="description"
				rows="5"
				required
				placeholder="Kunne ikke overskue at vaske op hele sidste uge. Havde et kæmpe bjerg og gemte mig mest under dynen. I dag havde jeg bare ekstra energi. Måske var det fordi jeg fik snakket med Niels om vores aftale i næste uge."
				class="form-control w-full"
				v-model.trim="description"
			></textarea>
		</div>
		<div class="flex md:block w-full flex-row-reverse mt-10">
			<button
				type="submit"
				class="bg-green-800 text-gray-300 py-2 px-4 rounded-md justify-self-end focus:outline-none hover:bg-green-700 btn-click-scale"
			>
				Gem
			</button>
		</div>
	</form>
</template>

<script>
export default {
	emits: ["episode-create", "cancel"],
	data() {
		return {
			title: "",
			rating: 5,
			description: "",
		};
	},
	methods: {
		submitData() {
			const date = new Date();
			this.$emit("episode-create", {
				title: this.title,
				rating: this.rating,
				date:
					date.toLocaleDateString() +
					" kl " +
					date.toLocaleTimeString(),
				description: this.description,
			});
		},
		cancel() {
			this.$emit("cancel");
		},
	},
};
</script>

<style scoped>
.ratings .active {
	@apply text-yellow-400;
}
</style>
