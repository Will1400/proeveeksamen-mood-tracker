export default {
	addEpisode(state, payload) {
		state.episodes.push(payload);
	},
	setEpisodes(state, payload) {
		state.episodes = payload;
	},
};
