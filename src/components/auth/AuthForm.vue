<template>
	<h1 class="text-center font-semibold text-xl pt-10">
		{{ submitButtonCaption }}
	</h1>
	<form @submit.prevent="submitData" class="p-4 pt-10">
		<div>
			<label for="email">Email</label>
			<input
				type="email"
				id="email"
				v-model.trim="email"
				class="form-control w-full"
				required
				autofocus
				ref="emailInput"
			/>
		</div>
		<div class="mt-10">
			<label for="password">Password</label>
			<input
				type="password"
				id="password"
				v-model.trim="password"
				class="form-control w-full"
				required
			/>
		</div>
		<div>
			<p class="text-red-500">{{ error }}</p>
		</div>
		<div class="flex justify-between mt-10">
			<button
				type="submit"
				class="focus:outline-none bg-green-500 px-4 py-2 rounded-sm text-gray-50 btn-click-scale"
			>
				{{ submitButtonCaption }}
			</button>
			<button
				@click.prevent="switchAuthMode"
				class="focus:outline-none px-4 py-2 rounded-sm border-solid border-2 border-green-400 hover:bg-green-400 hover:text-white btn-click-scale"
			>
				{{ switchModeButtonCaption }}
			</button>
		</div>
	</form>
</template>

<script>
export default {
	name: "AuthForm",
	emits: ["completed-auth"],
	data() {
		return {
			email: "",
			password: "",
			formIsvalid: true,
			mode: "login",
			error: null,
		};
	},
	computed: {
		submitButtonCaption() {
			return this.mode === "login" ? "Log ind" : "Tilmed";
		},
		switchModeButtonCaption() {
			return this.mode === "login" ? "Tilmed istedet" : "Log ind istedet";
		},
	},
	methods: {
		async submitData() {
			this.error = null;

			if (!email || !this.password) {
				this.error = "Indtast en gyldig email og et password.";
				return;
			}

			try {
				const info = {
					email: this.email,
					password: this.password,
				};

				if (this.mode === "login") {
					await this.$store.dispatch("login", info);
				} else {
					await this.$store.dispatch("signup", info);
				}
				this.$emit("completed-auth");
			} catch (err) {
				this.error = err.message;
				console.log(err);
			}
		},
		switchAuthMode() {
			this.mode = this.mode === "login" ? "signup" : "login";
		},
	},
	mounted() {
		this.$refs.emailInput.focus();
	},
};
</script>

<style></style>
