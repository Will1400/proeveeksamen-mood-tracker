import { createRouter, createWebHistory } from "vue-router";

import EpisodeOverview from "./pages/EpisodeOverview.vue";
import EpisodeAdd from "./pages/EpisodeAdd.vue";
import UserAuth from "./pages/UserAuth.vue";

import store from "./store";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "episodes",
			component: EpisodeOverview,
		},
		{
			path: "/add",
			name: "episodeAdd",
			component: EpisodeAdd,
			meta: { requiresAuth: true },
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
