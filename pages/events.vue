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
				<h2 class="content is-size-2 has-text-weight-bold">Upcoming Events</h2>
				<span v-if="!upcomingEvents.length">No events scheduled.</span>
				<div class="columns is-multiline event" v-for="event in upcomingEvents">
					<div class="column is-half">
						<figure class="image">
							<img class="flyer" :src="event.featured_image" />
						</figure>
					</div>
					<div class="column is-half content">
						<h3 v-html="event.event_name"></h3>
						<p class="is-size-5" v-html="formatDate(event.date).date"></p>
						<p class="is-size-5" v-html="formatDate(event.date).time"></p>
						<div v-html="$md.render(event.body)"></div>
					</div>
				</div>
				<h2 class="content is-size-2 has-top-margin has-text-weight-bold	">
					Past Events
				</h2>
				<div class="columns is-multiline event" v-for="event in oldEvents">
					<div class="column is-half">
						<figure class="image">
							<img class="flyer" :src="event.featured_image" />
						</figure>
					</div>
					<div class="column is-half content">
						<h3 v-html="event.event_name"></h3>
						<p class="is-size-5" v-html="formatDate(event.date).date"></p>
						<p class="is-size-5" v-html="formatDate(event.date).time"></p>
						<div v-html="$md.render(event.body)"></div>
					</div>
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
			return this.$store.state.events.map(event => {
				event.dateString = Date.parse(event.date)
				return event
			})
		},
		oldEvents() {
			return this.events
				.filter(event => {
					return event.dateString < Date.now()
				})
				.sort((a, b) => b.dateString - a.dateString)
		},
		upcomingEvents() {
			return this.events
				.filter(event => {
					return event.dateString > Date.now()
				})
				.sort((a, b) => a.dateString - b.dateString)
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
