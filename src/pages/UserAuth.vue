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
			this.$router.replace({
				name: this.$route.query.redirect || "episodes",
			});
		},
	},
};
</script>

<style></style>
