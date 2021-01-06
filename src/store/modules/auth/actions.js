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
			mode: "signup",
		});
	},
	async auth(context, payload) {
		let url =
			payload.mode === "login"
				? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDYDbWtD9TZ6M94OJMMRtUYbZGB5Czel-o"
				: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDYDbWtD9TZ6M94OJMMRtUYbZGB5Czel-o";
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
			token: data.idToken,
			userId: data.localId,
		});
	},
	logout(context) {
		context.commit("setUser", {
			userId: null,
			token: null,
		});
	},
};
