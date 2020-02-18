import Vue from 'vue'
const possibleClasses = '.lazy-youtube, .lazy-instagram, .lazy-google-maps'
const intersectionObserverOptions = {
	rootMargin: getAdjustedRootMargin(300) + 'px'
}
const DelayHeavyElements = {
	install: function(Vue, options) {
		Vue.prototype.$delayHeavyElements = function(methodOptions) {
			const elements = document.querySelectorAll(possibleClasses)
			let observer = createObserver()
			elements.forEach(element => {
				observer.observe(element)
			})

			function createObserver() {
				return new IntersectionObserver(function(entries, observer) {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							loadElement(entry.target)
							observer.unobserve(entry.target)
						}
					})
				}, intersectionObserverOptions)
			}

			function loadElement(element) {
				if (element.classList.contains('lazy-instagram')) {
					const src = document
						.getElementById('instagram-embed-script')
						.getAttribute('data-src')
					document.getElementById('instagram-embed-script').src = src
				} else if (element.nodeName === 'IFRAME') {
					const src = element.getAttribute('data-src')
					element.src = src
				}
			}
		}
	}
}
Vue.use(DelayHeavyElements)

function getAdjustedRootMargin(desiredMarginPx) {
	const elementsInOrderOfClosestToTop = Array.from(
		document.querySelectorAll(possibleClasses)
	).sort((a, b) => {
		return a.getBoundingClientRect().top - b.getBoundingClientRect().top
	})
	const highestElement = elementsInOrderOfClosestToTop[0]
	const bottomOfViewportToTopOfHighestElement =
		highestElement.getBoundingClientRect().top - window.innerHeight
	const elementIsAlreadyInViewOnLoad = bottomOfViewportToTopOfHighestElement < 0
	if (elementIsAlreadyInViewOnLoad) {
		return desiredMarginPx
	}
	if (bottomOfViewportToTopOfHighestElement < desiredMarginPx) {
		return bottomOfViewportToTopOfHighestElement - 1
	}
	return desiredMarginPx
}
