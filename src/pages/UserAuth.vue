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
		auth() {
			console.log(this.$route.query);
			this.$router.replace({
				name: this.$route.query.redirect || "episodes",
				params: { id: this.$route.query.id || "" },
			});
		},
	},
};
</script>
