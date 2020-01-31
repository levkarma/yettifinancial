<template>
	<section id="intro" class="section is-marginless is-paddingless">
		<section class="hero is-success is-fullheight">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">
						Meet Yetti
					</h1>
					<h2 class="subtitle">
						"I love to educate. So don't be shy."
						<button class="button">Call me!</button>
					</h2>
				</div>
			</div>
		</section>
		<section class="section">
			<div class="container">
				<nuxt-link to="events" class="level is-mobile" id="events-toggle">
					<div class="level-left">
						<div class="level-item">
							<p class="is-size-5">Events</p>
							<p class="is-size-5 has-left-margin"><em>February 19</em></p>
						</div>
					</div>
					<div class="level-right">
						<div class="level-item">
							<span class="icon"
								><i class="fas fa-chevron-circle-right fa-lg"></i
							></span>
						</div>
					</div>
				</nuxt-link>
				<h2 class="title">
					{{ $store.getters.cData('landing-page.short-business-statement') }}
				</h2>
				<div class="level">
					<div class="level-right">
						<a
							v-for="button of $store.getters.cData(
								'landing-page.action-buttons'
							)"
							href="#about"
							class="button level-item"
							>{{ button }}</a
						>
					</div>
				</div>
			</div>
		</section>
	</section>
</template>

<script>
export default {
	name: 'IntroSection',

	data() {
		return {}
	}
}
</script>

<style lang="css" scoped></style>
