export default ({ store, app }) => {
	// 	// Every time the route changes (fired on initialization too)
	if (process.client) {
		app.router.beforeEach((to, from, next) => {
			const scrollElement = document.scrollingElement
			from = {
				name: from.name,
				path: from.path,
				hash: from.hash,
				scrollY: scrollElement.scrollTop
			}
			to = {
				name: to.name,
				path: to.path,
				hash: to.hash
			}
			store.commit('route', { from: from, to: to })
			store.commit('pushRouteHistory', from)
			next()
		})
	}
}
