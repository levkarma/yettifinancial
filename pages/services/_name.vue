<template>
	<section class="section" id="service">
		<div class="level is-mobile">
			<div class="level-left">
				<nuxt-link class="level-item button is-primary" to="/#services">
					<span class="icon fas fa-arrow-left"></span><span>Services</span>
				</nuxt-link>
			</div>
		</div>
		<h2 class="is-hidden-tablet title">{{ service.name }}</h2>
		<div class="columns">
			<div class="column is-one-quarter">
				<figure class="image is-1by1">
					<img :src="service.image" alt="" />
				</figure>
			</div>
			<div class="column is-three-quarter">
				<div class="content">
					<h2 class="is-size-5 is-hidden-mobile">{{ service.name }}</h2>
					<figure v-if="service.youtube" class="image is-16by9">
						<iframe
							class="has-ratio"
							:src="service.youtube"
							frameborder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</figure>
					<div style="white-space: pre-line" v-html="service.description"></div>
				</div>
			</div>
		</div>
		<ContactSection />
	</section>
</template>

<script>
const servicesData = require('~/assets/data/services-data.json')
const ContactSection = require('~/components/ContactSection.vue').default
export default {
	name: 'ServicePage',
	components: { ContactSection },
	props: ['fromRoute'],
	computed: {
		service() {
			if (!this.$route.params.name) {
				return {}
			}
			return servicesData.filter(service => {
				return service.name === this.$route.params.name.split('_').join(' ')
			})[0]
		}
	},
	data() {
		return {}
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
