<template>
	<div>
		<section class="section">
			<div class="columns is-centered">
				<div class="content column is-half-desktop">
					<h1>5 REASONS YOU SHOULD CONSIDER ROLLING OVER YOUR 401K</h1>
					<div class="main-image">
						<div class="image is-3by4">
							<img
								class="has-ratio"
								src="~/static/img/rollover-401k.jpg"
								alt=""
							/>
						</div>
					</div>

					<p>
						Do you have a 401k? Have you wondered what you could/should do with
						that money or retirement savings account depending on your financial
						situation or needs?
					</p>

					<p>
						Are you changing jobs or leaving a job and need to know where you
						should roll it over to?
					</p>
					<p>
						The facts are that whether you need to roll over your 401k into
						another retirement savings account out of necessity OR if you are
						just curious how you could be using that allocated savings funds,
						<strong>I STRONGLY ENCOURAGE YOU TO GET THIS FREE REPORT</strong> on
						the 5 reasons why you need to consider rolling over your 401k money
						into a different financial product – which might give you exactly
						what you want when you know how it all works!
					</p>

					<p>
						<strong
							>Just fill out the form below and I will email it to you
							today!</strong
						>
					</p>
					<p>~ Yetti Esatu</p>
					<form
						action="https://formspree.io/mqkyeypq"
						method="POST"
						name="request-form"
					>
						<div class="content">
							<h2>FREE 401k SPECIAL REPORT</h2>
							<p>5 REASONS WHY SHOULD CONSIDER ROLLING OVER YOUR 401K</p>
						</div>
						<div class="field">
							<label class="label">Name</label>
							<div class="control has-icons-left">
								<input
									class="input is-primary"
									type="text"
									placeholder="Name"
									name="Name"
								/>
								<span class="icon is-small is-left">
									<i class="fas fa-user"></i>
								</span>
							</div>
						</div>
						<div class="field">
							<label class="label">Email</label>
							<div class="control has-icons-left">
								<input
									class="input is-primary"
									type="text"
									placeholder="Email"
									name="Email"
									required
								/>
								<span class="icon is-small is-left">
									<i class="fas fa-envelope"></i>
								</span>
							</div>
						</div>
						<input type="submit" class="button is-primary" />
					</form>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: '5-reasons-you-should-consider-rolling-over-your-401k',

	data() {
		return {}
	}
}
</script>

<style lang="scss" scoped>
.main-image {
	max-width: 20rem;
	display: block;
	margin: auto;
	margin-bottom: 4rem;
}
</style>
