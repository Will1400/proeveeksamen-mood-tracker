import { createStore } from "vuex";

import episodeModule from "./modules/episode";

export default createStore({
	modules: {
		episodeModule,
	},
});
