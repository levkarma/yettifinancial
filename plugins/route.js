export default ({ store, app }) => {
	// 	// Every time the route changes (fired on initialization too)
	if (process.client) {
		app.router.beforeEach((to, from, next) => {
			console.log('in plugin', document.querySelector('html').scrollTop)
			from = {
				name: from.name,
				path: from.path,
				hash: from.hash,
				scrollY: document.querySelector('html').scrollTop
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
