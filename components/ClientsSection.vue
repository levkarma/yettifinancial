<template>
	<section id="clients" class="section-bg">
		<div class="container">
			<div class="section-header">
				<h3>Our Clients</h3>
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque dere santome nida.
				</p>
			</div>

			<div class="row no-gutters clients-wrap clearfix wow fadeInUp">
				<div
					class="col-lg-3 col-md-4 col-xs-6"
					v-for="name of $store.getters.cData('clients.client-name')"
				>
					<div class="client-logo">
						<img
							src="~/assets/img/clients/client-1.png"
							class="img-fluid"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	name: 'ClientsSection',
	data() {
		return {}
	}
}
</script>
<style></style>
