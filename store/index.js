export const state = () => ({
	data: [],
	route: { to: {}, from: {} },
	routeHistory: [],
	events: []
})
export const mutations = {
	data(state, payload) {
		state.data = payload
	},
	route(state, payload) {
		state.route = payload
	},
	pushRouteHistory(state, payload) {
		const index = state.routeHistory.push(payload)
	},
	setEvents(state, events) {
		state.events = events
	}
}
export const getters = {
	// ...
	cData: state => location => {
		if (state.data.length === 0) {
			return ''
		}
		const splitLocation = location.split('.')
		const component = state.data.filter(
			e =>
				e.componentName === splitLocation[1] &&
				e.elementName === splitLocation[0]
		)[0]
		if (component.values.length > 1) {
			return component.values
		}
		return component.values[0]
	},
	lastTimeFromRoute: state => name => {
		for (var i = state.routeHistory.length - 1; i >= 0; i--) {
			if (state.routeHistory[i].name === name) {
				console.log(state.routeHistory[i])
				return state.routeHistory[i]
			}
		}
		return false
	},
	routeBeforeLast: state => name => {
		console.log(state.routeHistory[state.routeHistory.length - 2])
		return state.routeHistory[state.routeHistory.length - 2]
	}
}

export const actions = {
	async nuxtServerInit({ commit }) {
		let files = await require.context(
			'~/assets/content/event/',
			false,
			/\.json$/
		)
		let events = files.keys().map(key => {
			let res = files(key)
			res.slug = key.slice(2, -5)
			return res
		})
		await commit('setEvents', events)
	}
}
