export const state = () => ({
	data: [],
	route: { to: {}, from: {} },
	routeHistory: []
})
export const mutations = {
	data(state, payload) {
		state.data = payload
	},
	route(state, payload) {
		state.route = payload
	},
	routeHistory(state, payload) {
		const index = state.routeHistory.findIndex(
			object => object.name === payload.name
		)
		if (index === -1) {
			state.routeHistory.push(payload)
		} else {
			state.routeHistory[index] = payload
		}
	}
}
