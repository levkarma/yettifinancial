<template>
	<section id="intro" class="section is-marginless is-paddingless">
		<div class="columns is-marginless is-vcentered">
			<div class="column is-half is-paddingless">
				<section class="hero is-fullheight-with-navbar">
					<div class="hero-body">
						<div class="container box is-hidden-tablet">
							<div class="level is-mobile">
								<div class="level-left">
									<h1 class="title is-size-4 level-item">
										Meet Yetti
									</h1>
								</div>
								<div class="level-right">
									<button class="button level-item is-primary">Call me!</button>
								</div>
							</div>
							<div class="level">
								<h2 class="subtitle is-size-5 level-item">
									"I love to educate. So don't be shy."
								</h2>
							</div>
						</div>
					</div>
				</section>
			</div>
			<column class="is-half is-paddingless">
				<section class="section">
					<div class="container content">
						<div class="is-hidden-mobile">
							<h1 class="title is-size-1">
								Meet Yetti
							</h1>
							<h2 class="subtitle">
								"I love to educate. So don't be shy."
							</h2>
							<button class="button is-primary">Call me!</button>
						</div>
						<h2 class="title">
							{{
								$store.getters.cData('landing-page.short-business-statement')
							}}
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
						<nuxt-link to="events" class="level is-mobile" id="events-toggle">
							<div class="level-left">
								<div class="level-item">
									<p class="is-size-5 is-marginless">Events</p>
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
						<nuxt-link to="videos" class="level is-mobile" id="events-toggle">
							<div class="level-left">
								<p class="is-size-5">Watch my free videos!</p>
							</div>
							<div class="level-right">
								<div class="level-item">
									<span class="icon"
										><i class="fas fa-chevron-circle-right fa-lg"></i
									></span>
								</div>
							</div>
						</nuxt-link>
					</div>
				</section>
			</column>
		</div>
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
