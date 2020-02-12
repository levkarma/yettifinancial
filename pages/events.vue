<template>
	<section id="events" class="section">
		<div v-for="event in events" v-html="event.default"></div>
		<!-- 		<nuxt-link to="/" class="level is-mobile">
			<div class="level-left">
				<div class="level-item">
					<span class="icon"
						><i class="fas fa-chevron-circle-left fa-lg"></i
					></span>
				</div>
				<div class="level-item">
					<h1 class="title is-1">Events</h1>
				</div>
			</div>
		</nuxt-link> -->
		<div class="level is-mobile">
			<div class="level-left">
				<div class="level-item">
					<h1 class="title is-1">Events</h1>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'events',
	computed: {
		events() {
			return this.$store.state.events
		}
	},
	data() {
		return {}
	}
}
</script>

<style lang="css" scoped></style>
