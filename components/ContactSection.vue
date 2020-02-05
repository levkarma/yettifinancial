<template>
	<section id="contact" class="section">
		<div class="columns is-centered">
			<div class="column is-half">
				<form action="/" method="post" name="contact-form">
					<div class="content">
						<h2 class="title is-size-3">Contact</h2>
						<p class="is-size-5">
							Request a free consultation and/or financial analysis.
						</p>
					</div>
					<div class="field">
						<label class="label">Name</label>
						<div class="control">
							<input class="input" type="text" placeholder="Name" name="name" />
						</div>
					</div>
					<div class="field">
						<label class="label">Email</label>
						<div class="control">
							<input
								class="input"
								type="text"
								placeholder="Email"
								name="email"
								required
							/>
						</div>
					</div>
					<div class="field">
						<label class="label">Phone Number</label>
						<div class="control">
							<input
								class="input"
								type="text"
								placeholder="Phone Number"
								name="phone-number"
								required
							/>
						</div>
					</div>
					<div class="field">
						<label class="label">What are you most interested in?</label>
						<div class="control">
							<input
								class="input"
								type="text"
								placeholder="What are you most interested in?"
								name="what-are-you-most-interested-in"
								required
							/>
						</div>
					</div>
					<input type="submit" class="button" />
				</form>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	name: 'ContactSection',
	data() {
		return {}
	}
}
</script>
<style></style>
