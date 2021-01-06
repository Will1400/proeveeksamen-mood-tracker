import { createStore } from "vuex";

import episodeModule from "./modules/episode";
import authModule from "./modules/auth";

export default createStore({
	modules: {
		episodeModule,
		authModule,
	},
});
