export default ({ store, app }) => {
	// 	// Every time the route changes (fired on initialization too)
	if (process.client) {
		app.router.beforeEach((to, from, next) => {
			console.log(to)

			from = {
				name: from.name,
				path: from.path,
				hash: from.hash,
				scrollY: window.scrollY
			}
			to = {
				name: to.name,
				path: to.path,
				hash: to.hash
			}
			store.commit('route', { from: from, to: to })
			store.commit('routeHistory', from)
			next()
		})
	}
}
