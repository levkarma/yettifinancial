<template>
	<section id="services" class="section has-background-primary has-text-white">
		<div
			class="modal"
			:class="{ 'is-active': serviceModalActive }"
			@click="serviceModalActive = false"
		>
			<div class="modal-background"></div>
			<div class="modal-content" @click.capture="">
				<div class="card has-top-margin">
					<!-- 					<header class="card-header">
						<p class="card-header-title  is-size-6">
							{{ service.name }}
						</p>
						<a href="#" class="card-header-icon" aria-label="more options">
							<span class="icon">
								<i class="fas fa-angle-down" aria-hidden="true"></i>
							</span>
						</a>
					</header> -->
					<!-- 					<div class="card-image">
						<div class="box is-shadowless">

						</div>
					</div> -->
					<div class="card-content">
						<div class="media">
							<div class="media-left">
								<figure class="image is-48x48">
									<img
										src="~/assets/img/yetti-profile-tiny.jpg"
										alt="Placeholder image"
									/>
								</figure>
							</div>
							<div class="media-content">
								<p class="title is-4">{{ serviceModelService.name }}</p>
								<p class="subtitle is-6">@yettifinancial</p>
							</div>
						</div>
						<div class="">
							<div class="preview-container">
								<div class="columns">
									<div class="column is-one-quarter">
										<!-- 								<figure class="image is-1by1">
											<img :src="serviceModelService.image" alt="" />
										</figure> -->
									</div>
									<div class="column content is-three-quarters">
										<!-- <p class="is-size-5">{{ serviceModelService.name }}</p> -->
										<div v-html="serviceModelService.description"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<button class="modal-close is-large" aria-label="close"></button>
		</div>
		<div class="content has-text-white content">
			<h2 class="has-text-white">{{ sectionHeader }}</h2>
			<p>Read about the services I can help you with!</p>
		</div>
		<!-- 		<h3 class="subtitle has-text-white">
			{{ $store.getters.cData('services.section-subtitle') }}
		</h3> -->
		<div class="columns is-multiline is-hidden-mobile">
			<div
				class="column is-one-third"
				v-for="(service, index) in services"
				:key="service.name"
				@click="toggleServiceModal(service)"
			>
				<div class="card has-top-margin">
					<!-- 					<header class="card-header">
						<p class="card-header-title  is-size-6">
							{{ service.name }}
						</p>
						<a href="#" class="card-header-icon" aria-label="more options">
							<span class="icon">
								<i class="fas fa-angle-down" aria-hidden="true"></i>
							</span>
						</a>
					</header> -->
					<!-- 					<div class="card-image">
						<div class="box is-shadowless">

						</div>
					</div> -->
					<div class="card-content">
						<!-- 						<div class="media">
							<div class="media-left">
								<figure class="image is-48x48">
									<img
										src="~/assets/img/yetti-profile-tiny.jpg"
										alt="Placeholder image"
									/>
								</figure>
							</div>
							<div class="media-content">
								<p class="title is-4">{{ service.name }}</p>
								<p class="subtitle is-6">@yettifinancial</p>
							</div>
						</div> -->
						<div class="">
							<figure class="image is-1by1">
								<img :src="service.image" alt="Placeholder image" />
							</figure>
							<div class="content preview-container">
								<p class="is-size-5">{{ service.name }}</p>
								<div class="preview">
									<div v-html="service.description"></div>
									<div class="preview-gradient"></div>
								</div>
								<p><a>Read more...</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div
			class="columns is-multiline is-mobile is-hidden-tablet has-background-white "
		>
			<nuxt-link
				class="column is-one-third"
				v-for="service in services"
				:key="service.name"
				:to="'/services/' + service.name.split(' ').join('_')"
			>
				<figure class="image is-1by1">
					<img :src="service.image" alt="" />
				</figure>
				<p class="is-size-7 has-text-centered has-text-primary">
					{{ service.name }}
				</p>
			</nuxt-link>
		</div>
		<!-- 		<div class="columns is-centered">
			<div class="column is-three-quarters">
				<div class="card has-top-margin">
					<header class="card-header">
						<p class="card-header-title">
							{{ service.name }}
						</p>
						<a href="#" class="card-header-icon" aria-label="more options">
							<span class="icon">
								<i class="fas fa-angle-down" aria-hidden="true"></i>
							</span>
						</a>
					</header>
					<div class="card-image">
						<div class="box is-shadowless">
							<figure class="image is-1by1">
								<img :src="service.image" alt="Placeholder image" />
							</figure>
						</div>
					</div>
					<div class="card-content">
						<div class="media">
							<div class="media-left">
								<figure class="image is-48x48">
									<img
										src="~/assets/img/yetti-profile-tiny.jpg"
										alt="Placeholder image"
									/>
								</figure>
							</div>
							<div class="media-content">
								<p class="title is-4">{{ service.name }}</p>
								<p class="subtitle is-6">@yettifinancial</p>
							</div>
						</div>

						<div class="content" v-html="service.description"></div>
					</div>
				</div>
			</div>
		</div> -->
	</section>
</template>
<script>
const servicesData = require('~/assets/data/services-data.json')
export default {
	name: 'ServicesSection',
	data() {
		return {
			sectionHeader: 'Family First Financial Services',
			services: servicesData,
			serviceModalActive: false,
			serviceModelService: {}
		}
	},
	methods: {
		toggleServiceModal(service = {}) {
			this.serviceModelService = service
			this.serviceModalActive = !this.serviceModalActive
		},
		handleScroll(e) {
			console.log(e.target)
			e.preventDefault()
		}
	},
	mounted() {
		console.log('services section activated')
	}
}
</script>
<style></style>
