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
	}
}
