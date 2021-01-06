<template>
	<div>
		<auth-form @completed-auth="auth"></auth-form>
	</div>
</template>

<script>
import authForm from "../components/auth/authForm.vue";

export default {
	components: { authForm },
	methods: {
		async auth() {
			this.$router.replace("/");
		},
	},
};
</script>

<style></style>
