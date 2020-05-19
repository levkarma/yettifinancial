<template>
	<section id="contact" class="section">
		<div class="columns is-centered">
			<div class="column is-half">
				<form
					action="https://formspree.io/myynkngn"
					method="POST"
					name="contact-form"
				>
					<div class="content">
						<h2 class="title is-size-3">Contact</h2>
						<a href="tel:833-938-8448"
							><p class="is-size-4">(833)-938-8448</p></a
						>
						<p class="is-size-4">{{ yettiFinancialEmail }}</p>
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
					<div class="field">
						<label class="label">Phone Number</label>
						<div class="control has-icons-left">
							<input
								class="input is-primary"
								type="text"
								placeholder="Phone Number"
								name="Phone Number"
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
								<select name="What are you most intersted in?">
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
								<select name="Interested in anything else?">
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
import axios from 'axios'
export default {
	name: 'ContactSection',
	data() {
		return {
			submittingForm: false,
			submittedForm: false,
			failedForm: false,
			yettiFinancialEmail: 'info@yettifinancial.com',
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
	},
	methods: {
		submit() {
			this.submittingForm = true
			// axios({
			// 	method: 'post',
			// 	url: 'https://homebase.vinmediagroup.com/api/form-submission',
			// 	headers: { 'Content-Type': 'application/json' },
			// 	data: JSON.stringify({
			// 		email: 'levko.k9@gmail.com',
			// 		form_data: {
			// 			Name: this.name,
			// 			Email: this.email,
			// 			'Phone Number': this.phoneNumber,
			// 			'What are you most interested in?': this.whatAreYouMostInterestedIn,
			// 			'Are you interested in anything else?': this
			// 				.interestedInAnythingElse
			// 		}
			// 	})
			// })
			// 	.then(response => {
			// 		this.submittingForm = false
			// 		this.submittedForm = true
			// 	})
			// 	.catch(error => {
			// 		this.submittingForm = false
			// 		this.failedForm = true
			// 	})
		}
	}
}
</script>
<style></style>
