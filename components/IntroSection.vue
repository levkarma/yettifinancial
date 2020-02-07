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
									<button
										v-scroll-to="'#contact'"
										class="button level-item is-primary"
									>
										Call me!
									</button>
								</div>
							</div>
							<div class="level">
								<h2 class="subtitle is-size-5 level-item">
									"I love to educate. So don't be shy!"
								</h2>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div class="is-half is-paddingless">
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
							<a class="button is-info" v-scroll-to="'#services'"
								>Our Services</a
							>
						</div>
						<h2 class="title">
							{{
								$store.getters.cData('landing-page.short-business-statement')
							}}
						</h2>
						<div class="content">
							<nuxt-link
								to="events"
								class="button is-medium is-info is-light is-block"
							>
								<span>Next Event: Talk on February 19</span>
								<span class="icon"
									><i class="fas fa-chevron-circle-right"></i
								></span>
							</nuxt-link>
							<a
								href="https://www.youtube.com/channel/UCAFPvZSFfyiirNfT2aCrz7g"
								class="expanding-button is-medium is-info is-light is-block has-top-margin"
								target="_blank"
							>
								<span>Watch my free videos!</span><br /><span class="is-size-6"
									>1k Subscribers</span
								>
								<span class="icon"
									><i class="fas fa-chevron-circle-right"></i
								></span>
							</a>
						</div>
					</div>
				</section>
			</div>
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
