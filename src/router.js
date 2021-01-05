import { createRouter, createWebHistory } from "vue-router";

import EpisodeOverview from "./pages/EpisodeOverview.vue";
import EpisodeAdd from "./pages/EpisodeAdd.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "Home",
			component: EpisodeOverview,
		},
		{
			path: "/add",
			name: "EpisodeAdd",
			component: EpisodeAdd,
		},
	],
});

export default router;
