<template>
	<section id="contact" class="section">
		<div class="columns is-centered">
			<div class="column is-half">
				<form action="/" method="post" name="contact-form">
					<div class="content">
						<h2 class="title is-size-3">Contact</h2>
						<p class="is-size-4">703-362-4773</p>
						<p class="is-size-4">info@yettifinancial.com</p>
						<p class="is-size-5">
							Request a free consultation and/or financial analysis.
						</p>
					</div>
					<div class="field">
						<label class="label">Name</label>
						<div class="control has-icons-left">
							<input
								class="input is-primary"
								type="text"
								placeholder="Name"
								name="name"
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
								name="email"
								required
							/>
							<span class="icon is-small is-left">
								<i class="fas fa-envelope"></i>
							</span>
						</div>
					</div>
					<div class="field">
						<label class="label">Phone Number</label>
						<div class="control has-icons-left">
							<input
								class="input is-primary"
								type="text"
								placeholder="Phone Number"
								name="phone-number"
								required
							/>
							<span class="icon is-small is-left">
								<i class="fas fa-phone"></i>
							</span>
						</div>
					</div>
					<div class="field">
						<label class="label">What are you most interested in?</label>
						<div class="control has-icons-left">
							<div class="select is-primary">
								<select>
									<option v-for="option in contact.interestedOptions">{{
										option
									}}</option>
								</select>
							</div>
							<span class="icon is-small is-left">
								<i class="fas fa-question-circle"></i>
							</span>
						</div>
					</div>
					<div class="field">
						<label class="label">Interested in anything else?</label>
						<div class="control has-icons-left">
							<div class="select is-primary">
								<select>
									<option v-for="option in contact.interestedOptions">{{
										option
									}}</option>
								</select>
							</div>
							<span class="icon is-small is-left">
								<i class="fas fa-question"></i>
							</span>
						</div>
					</div>
					<input type="submit" class="button is-primary" />
				</form>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	name: 'ContactSection',
	data() {
		return {
			contact: {
				interestedOptions: [
					'FREE Financial Analysis',
					'Retirement Savings Plan',
					'Life Insurance Quotes',
					'401k Rollover',
					"Children's Educational Funds",
					'Tax Optimization',
					'Financial Literacy Education',
					'Career/Job Opportunities',
					'Business Related Financial Products',
					'Business Coaching and Mentoring'
				]
			}
		}
	}
}
</script>
<style></style>
