<template>
	<form class="w-full p-4">
		<div>
			<label for="title">Title</label>
			<input
				class="form-control w-full"
				type="text"
				name="title"
				placeholder="Klarede opvasken 💪"
			/>
		</div>
		<div class="my-10">
			<h2>Hvordan har du det?</h2>
			<div class="flex gap-4 justify-between px-1">
				<div>
					<label for="rating--1">1</label>
					<input type="radio" name="rating" id="rating--1" hidden />
				</div>
				<div>
					<label for="rating--2">2</label>
					<input type="radio" name="rating" id="rating--2" hidden />
				</div>
				<div>
					<label for="rating--3">3</label>
					<input type="radio" name="rating" id="rating--3" hidden />
				</div>
				<div>
					<label for="rating--4">4</label>
					<input type="radio" name="rating" id="rating--4" hidden />
				</div>
				<div>
					<label for="rating--5">5</label>
					<input type="radio" name="rating" id="rating--5" hidden />
				</div>
			</div>
		</div>
		<div>
			<label for="description">Description</label>
			<textarea
				name="description"
				id="description"
				rows="5"
				placeholder="Kunne ikke overskue at vaske op hele sidste uge. Havde et kæmpe bjerg og gemte mig mest under dynen. I dag havde jeg bare ekstra energi. Måske var det fordi jeg fik snakket med Niels om vores aftale i næste uge."
				class="form-control w-full"
			></textarea>
		</div>
		<div class="flex w-full flex-row-reverse mt-10">
			<button
				type="submit"
				class="bg-green-800 text-gray-300 py-2 px-4 rounded-md justify-self-end"
			>
				Gem
			</button>
		</div>
	</form>
</template>

<script>
export default {};
</script>

<style scoped>
.form-control {
	@apply p-2 rounded-sm border-gray-300 border-solid border-2 focus:outline-none focus:border-yellow-500 transition-colors;
}
</style>
