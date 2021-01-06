<template>
	<div class="bg-green-100 min-h-screen">
		<div class="container lg:pt-28 m-auto relative min-h-screen">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {
	name: "App",
	components: {},
	mounted() {
		this.$store.dispatch("autoLogin");
	},
};
</script>
