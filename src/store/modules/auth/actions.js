export default {
	async login(context, payload) {
		return context.dispatch("auth", {
			...payload,
			mode: "login",
		});
	},
	async signup(context, payload) {
		return context.dispatch("auth", {
			...payload,
			mode: "login",
		});
	},
	async auth(context, payload) {
		let url =
			payload.mode === "login"
				? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
				: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDvGDtjY3NGQ9x-NuVGqp_k3Oxva91ZP74";
		const response = await fetch(url, {
			method: "POST",
			body: JSON.stringify({
				email: payload.email,
				password: payload.password,
				returnSecureToken: true,
			}),
		});

		const data = await response.json();

		if (!response.ok) {
			const error = new Error(data.messsage || "Failed to authenticate");
			throw error;
		}

		context.commit("setUser", {
			userId: data.localId,
			token: data.idtoken,
		});
	},
	logout(context) {
		context.commit("setUser", {
			userId: null,
			token: null,
		});
	},
};
