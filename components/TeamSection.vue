<template>
	<section id="team">
		<div class="container">
			<div class="section-header">
				<h3>Team</h3>
				<!--             <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque
            </p> -->
			</div>

			<div class="row">
				<div
					class="col-lg-3 col-md-6 wow fadeInUp"
					v-for="(teamMemberName, index) of $store.getters.cData(
						'team.team-member-name'
					)"
				>
					<div class="member">
						<img src="~/assets/img/team-1.jpg" class="img-fluid" alt="" />
						<div class="member-info">
							<div class="member-info-content">
								<h4>{{ teamMemberName }}</h4>
								<span>{{
									$store.getters.cData('team.team-member-position')[index]
								}}</span>
								<div class="social">
									<a href=""><i class="fa fa-twitter"></i></a>
									<a href=""><i class="fa fa-facebook"></i></a>
									<a href=""><i class="fa fa-google-plus"></i></a>
									<a href=""><i class="fa fa-linkedin"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	name: 'TeamSection',
	data() {
		return {}
	}
}
</script>
<style></style>
