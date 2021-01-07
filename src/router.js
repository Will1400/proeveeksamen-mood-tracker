import { createRouter, createWebHistory } from "vue-router";

import EpisodeOverview from "./pages/episode/EpisodeOverview.vue";
import EpisodeAdd from "./pages/episode/EpisodeAdd.vue";
import EpisodeSpecific from "./pages/episode/EpisodeSpecific.vue";
import EpisodeDetails from "./pages/episode/EpisodeDetails.vue";
import UserAuth from "./pages/UserAuth.vue";

import store from "./store";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			redirect: "episodes",
		},
		{
			path: "/episodes",
			name: "episodes",
			component: EpisodeOverview,
		},
		{
			path: "/episodes/add",
			name: "episodeAdd",
			component: EpisodeAdd,
			meta: { requiresAuth: true },
		},
		{
			path: "/episodes/:id",
			name: "episodeSpecific",
			meta: { requiresAuth: true },
			component: EpisodeSpecific,
			children: [
				{
					path: "",
					name: "episodeDetails",
					component: EpisodeDetails,
					props: true,
				},
				{
					path: "edit",
					name: "episodeEdit",
					props: true,
					component: EpisodeDetails,
				},
			],
		},
		{
			path: "/auth",
			name: "auth",
			component: UserAuth,
			meta: { requiresUnAuth: true },
		},
	],
});

router.beforeEach(function (to, _, next) {
	if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
		next("/auth?redirect=" + to.name);
	} else if (to.meta.requiresUnAuth && store.getters.isAuthenticated) {
		next({ name: "episodes" });
	} else {
		next();
	}
});

export default router;
