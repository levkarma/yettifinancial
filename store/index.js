export const state = () => {
	data: []
}
export const mutations = {
	data(state, payload) {
		state.data = payload
	}
}
export const getters = {
	// ...
	cData: state => field => {
		if (state.data.length === 0) {
			return ''
		}
		const split = field.split('.')
		const component = state.data.filter(
			e => e.elementName === split[0] && e.componentName === split[1]
		)[0]
		if (component.values.length > 1) {
			return component.values
		}
		return component.values[0]
	}
}