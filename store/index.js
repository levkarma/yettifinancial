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
	routeHistory(state, payload) {
		const index = state.routeHistory.findIndex(
			object => object.name === payload.name
		)
		if (index === -1) {
			state.routeHistory.push(payload)
		} else {
			state.routeHistory[index] = payload
		}
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
		return state.routeHistory.filter(route => route.name === name)[0]
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
