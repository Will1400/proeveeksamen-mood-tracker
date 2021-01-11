<template>
	<div class="text-center">
		<h2 class="text-4xl mb-4">404 - Side ikke fundet.</h2>
		<p class="text-xl">
			Gå tilbage til
			<router-link :to="{ name: 'episodes' }"
				><span class="underline hover:text-yellow-600"
					>Episoder</span
				></router-link
			>
		</p>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
