<template>
	<div>
		<auth-form @completed-auth="auth"></auth-form>
	</div>
</template>

<script>
import AuthForm from "../components/auth/AuthForm.vue";

export default {
	components: { AuthForm },
	methods: {
		async auth() {
			this.$router.replace("/");
		},
	},
};
</script>

<style></style>
