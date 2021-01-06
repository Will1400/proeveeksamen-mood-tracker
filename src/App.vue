<template>
	<div class="bg-green-100 min-h-screen">
		<the-header></the-header>
		<div class="container lg:pt-10 m-auto relative">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
	name: "App",
	components: { TheHeader },
	mounted() {
		this.$store.dispatch("autoLogin");
	},
};
</script>
