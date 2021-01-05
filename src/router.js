import { createRouter, createWebHistory } from "vue-router";

import EpisodeOverview from "./pages/EpisodeOverview.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "Home",
			component: EpisodeOverview,
			children: [
				{
					path: "/add",
				},
			],
		},
	],
});

export default router;
