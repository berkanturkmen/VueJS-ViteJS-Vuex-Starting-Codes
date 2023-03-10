import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "Welcome",
			component: () => import("@/views/Welcome.vue"),
		},
	],
});

export default router;
