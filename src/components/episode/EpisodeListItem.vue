<template>
	<div class="rounded-md bg-white m-auto p-4">
		<div>
			<h2 class="font-semibold">{{ title }}</h2>
		</div>
		<div>
			<p class="text-gray-500">{{ date }}</p>
		</div>
		<div>
			<p class="overflow-ellipsis overflow-hidden break-words">
				{{ description }}
			</p>
		</div>
		<div class="pt-1">Rating: {{ rating }}</div>
	</div>
</template>

<script>
export default {
	props: ["title", "date", "rating", "description"],
	// props: {
	// 	title: String,
	// 	date: String,
	// 	rating: Number,
	// 	description: String,
	// },
};
</script>

<style></style>
