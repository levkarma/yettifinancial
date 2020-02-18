<template>
	<section id="events" class="section">
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
		<div class="columns is-centered">
			<div class="column is-two-thirds">
				<div class="level is-mobile">
					<div class="level-left">
						<div class="level-item">
							<h1 class="title is-1">Events</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="columns is-centered event" v-for="event in events">
			<div class="column is-one-third">
				<figure class="image">
					<img class="flyer" :src="event.featured_image" />
				</figure>
			</div>
			<div class="column is-one-third content">
				<h2 v-html="event.event_name"></h2>
				<p class="is-size-5" v-html="formatDate(event.date).date"></p>
				<p class="is-size-5" v-html="formatDate(event.date).time"></p>
				<div v-html="$md.render(event.body)"></div>
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
	},
	methods: {
		formatDate(date) {
			const parsed = new Date(date)
			return {
				date: parsed.toDateString(),
				time: parsed.toLocaleTimeString([], {
					hour: '2-digit',
					minute: '2-digit'
				})
			}
		}
	},
	mounted() {
		const scrollElement = document.scrollingElement
		scrollElement.scrollTop = 0
	},
	activated() {
		const scrollElement = document.scrollingElement
		scrollElement.scrollTop = 0
	}
}
</script>

<style lang="css" scoped></style>
