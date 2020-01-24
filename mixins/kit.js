export const kit = {
	methods: {
		offset(el) {
			if (process.browser) {
				const rect = el.getBoundingClientRect()
				return {
					top: rect.top + window.scrollY,
					left: rect.left + window.scrollX,
					bottom: rect.bottom + window.scrollY,
					right: rect.right + window.scrollX
				}
			}
		},
		position(el) {
			return el.getBoundingClientRect()
		},
		windowSize() {
			if (process.browser) {
				const win = window,
					doc = document,
					docElem = doc.documentElement,
					body = doc.getElementsByTagName('body')[0],
					x = win.innerWidth || docElem.clientWidth || body.clientWidth,
					y = win.innerHeight || docElem.clientHeight || body.clientHeight
				return { x: x, y: y }
			}
		}
	}
}