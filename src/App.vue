<template>
	<div class="bg-green-100 min-h-screen">
		<the-header></the-header>
		<div class="container lg:pt-10 m-auto relative">
			<router-view v-slot="isProps">
				<transition name="route" mode="out-in">
					<component :is="isProps.Component"></component>
				</transition>
			</router-view>
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

<style scoped>
.route-enter-from {
	opacity: 0;
	transform: translateY(-30px);
}
.route-leave-to {
	opacity: 0;
	transform: translateY(30px);
}

.route-enter-active {
	transition: 0.3s ease-out;
}
.route-leave-active {
	transition: 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
	opacity: 1;
	transition: translateY(0);
}
</style>
