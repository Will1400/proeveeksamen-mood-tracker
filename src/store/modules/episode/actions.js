export default {
	async addEpisode(context, payload) {
		const response = await fetch(
			`https://mood-tracker-b5b65-default-rtdb.firebaseio.com/episodes/${context.rootGetters.userId}.json?auth=${context.rootGetters.token}`,
			{
				method: "POST",
				body: JSON.stringify(payload),
			}
		);

		const data = await response.json();

		if (!response.ok) {
			throw new Error(data.message || "Failed to send episode.");
		}

		context.commit("addEpisode", payload);
	},
	async editEpisode(context, payload) {
		await context.dispatch("loadEpisodes");

		const key = payload.id;
		const response = await fetch(
			`https://mood-tracker-b5b65-default-rtdb.firebaseio.com/episodes/${context.rootGetters.userId}.json?auth=${context.rootGetters.token}`,
			{
				method: "PATCH",
				body: JSON.stringify({
					[key]: payload,
				}),
			}
		);
		const data = await response.json();

		if (!response.ok) {
			throw new Error(data.message || "Failed to send episode.");
		}

		await context.dispatch("loadEpisodes");
	},
	async loadEpisodes(context) {
		const response = await fetch(
			`https://mood-tracker-b5b65-default-rtdb.firebaseio.com/episodes/${context.rootGetters.userId}.json?auth=${context.rootGetters.token}`
		);

		const data = await response.json();

		if (!response.ok) {
			throw new Error(data.message || "Failed to fetch episodes.");
		}

		const episodes = [];

		for (const key in data) {
			const episode = {
				id: key,
				title: data[key].title,
				date: data[key].date,
				rating: data[key].rating,
				description: data[key].description,
			};
			episodes.push(episode);
		}

		context.commit("setEpisodes", episodes);
	},
};
