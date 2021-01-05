<template>
	<form @submit.prevent="submitData" class="w-full p-4">
		<div>
			<label for="title" class="text-lg">Title</label>
			<input
				class="form-control w-full"
				type="text"
				name="title"
				placeholder="Klarede opvasken 💪"
				v-model="title"
			/>
		</div>
		<div class="my-10">
			<h2>Hvordan har du det?</h2>
			<div class="flex gap-4 justify-between px-1">
				<div>
					<label for="rating--1">1</label>
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
					<label for="rating--2">2</label>
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
					<label for="rating--3">3</label>
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
					<label for="rating--4">4</label>
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
					<label for="rating--5">5</label>
					<input
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
				placeholder="Kunne ikke overskue at vaske op hele sidste uge. Havde et kæmpe bjerg og gemte mig mest under dynen. I dag havde jeg bare ekstra energi. Måske var det fordi jeg fik snakket med Niels om vores aftale i næste uge."
				class="form-control w-full"
				v-model="description"
			></textarea>
		</div>
		<div class="flex w-full flex-row-reverse mt-10">
			<button
				type="submit"
				class="bg-green-800 text-gray-300 py-2 px-4 rounded-md justify-self-end focus:outline-none hover:bg-green-700 transition-colors"
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
			rating: 0,
			description: "",
		};
	},
	methods: {
		submitData() {
			this.$emit("episode-create", {
				id: new Date().toISOString(),
				title: this.title,
				rating: this.rating,
				date: new Date().toISOString(),
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
.form-control {
	@apply p-2 rounded-sm border-gray-300 text-gray-600 border-solid border-2 focus:outline-none focus:border-yellow-500 transition-colors;
}
</style>
