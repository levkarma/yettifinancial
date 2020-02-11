<template>
	<section class="section" id="service">
		<div class="level is-mobile">
			<div class="level-left">
				<nuxt-link class="level-item button is-primary" to="/#services">
					<span class="icon fas fa-arrow-left"></span><span>Services</span>
				</nuxt-link>
			</div>
		</div>
		<div class="columns">
			<div class="column is-one-quarter">
				<figure class="image is-1by1">
					<img :src="service.image" alt="" />
				</figure>
			</div>
			<div class="column is-three-quarter">
				<div class="content">
					<h2>{{ service.name }}</h2>
					<div v-html="service.description"></div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
const servicesData = require('~/assets/data/services-data.json')
export default {
	name: 'ServicePage',
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
		document.querySelector('html').scrollTop = 0
	}
}
</script>

<style lang="css" scoped></style>
