<template>
	<router-view v-slot="isProps">
		<transition name="route" mode="out-in">
			<component :is="isProps.Component"></component>
		</transition>
	</router-view>
</template>

<script>
export default {};
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
