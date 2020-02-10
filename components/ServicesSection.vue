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
										<figure class="image is-1by1">
											<img :src="serviceModelService.image" alt="" />
										</figure>
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
		<h2 class="title has-text-white content">{{ sectionHeader }}</h2>
		<!-- 		<h3 class="subtitle has-text-white">
			{{ $store.getters.cData('services.section-subtitle') }}
		</h3> -->
		<div class="columns is-multiline is-hidden-mobile">
			<div
				class="column is-one-third"
				v-for="(service, index) in services"
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
		<div class="columns is-multiline is-mobile is-hidden-tablet">
			<div
				class="column has-background-white is-one-third"
				v-for="service in services"
				@click="toggleServiceModal(service)"
			>
				<figure class="image is-1by1">
					<img :src="service.image" alt="" />
				</figure>
				<p class="is-size-7 has-text-centered has-text-primary">
					{{ service.name }}
				</p>
			</div>
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
export default {
	name: 'ServicesSection',
	data() {
		return {
			sectionHeader: 'Family First Financial Services',
			services: [
				{
					name: 'Retirement Planning',
					description:
						'<p><strong>Are you ready for retirement?</strong></p>Are you saving enough to take care of you and your family for the future? More importantly, are you taking advantage of the powerful new financial products that allow you to take advantage of MARKET UPSIDE POTENTIAL WHILE PROTECTING YOU FROM DOWNSIDE LOSSES?<br><br>You can’t afford not to know what you need to know, so call us or schedule a FREE CONSULTATION BELOW.',
					image: require('~/assets/img/svg/retirement-planning.svg')
				},
				{
					name: 'Life Insurance',
					description:
						'<p><strong>Life Insurance – it’s not only one of the most critical assets a person can have for their family, it also happens to be one of the most powerful investment vehicles that exists.</strong></p>If you have TERM LIFE INSURANCE or NO LIFE INSURANCE you are missing the boat! Life Insurance done right, not only protects you and your family in case of death, but it also helps you and protects you WHILE YOU ARE LIVING, with living benefits, as well as helping to PROTECT AND GROW YOUR MONEY as well!<br>To get a life insurance quote, compare plans, or learn more feel free to call us or schedule a FREE CONSULTATION BELOW.',
					image: require('~/assets/img/svg/life-insurance.svg')
				},
				{
					name: `Children's Funds`,
					description: `<p><strong>Saving for your children’s future educational costs is one of the most loving and generous things you can do to ensure their future success.</p></strong> It’s also a key financial decision that needs to be done right.<br>529 plans mean well, but what if I told you there is a way to save for your children in a way that gives you much more flexibility and benefit for the same saving effort?<br>If you have children, you need to know about the new wave of financial products that will potentially do a lot more for you and your children than a traditional 529 educational fund.<br>Call us or schedule a FREE CONSULTATION BELOW.`,
					image: require('~/assets/img/svg/childrens-funds.svg')
				},
				{
					name: `Free Financial Analysis`,
					description: `<p><strong>You have a retirement plan. You have investment accounts, IRA, 401k, etc… <em>but do you know how good it is?</em></strong></p>Do you know how much risk your money is exposed to? Do you know the MANAGEMENT FEES that may be stripping you of your net gains?<br>Call us today or schedule a FREE FINANCIAL ANALYSIS BELOW and we’ll show you exactly how good or bad your plan actually is!`,
					image: require('~/assets/img/svg/free-financial-analysis.svg')
				},
				{
					name: `Financial Literacy`,
					description: `<p><strong>The real truth is that Financial Literacy is crucial to a successful and stress-free life.</strong></p>You would be amazed how intelligent people are often times oblivious to how the financial products of America actually work. Even lawyers and doctors have plenty to learn about how their money is actually being used.<br>So if you or an organization you represent would like a free financial literacy educational program provided for you, please inquire below and schedule a phone call or consultation and let’s learn about money!`,
					image: require('~/assets/img/svg/financial-literacy.svg')
				},
				{
					name: `401k Rollovers`,
					description: `<p><strong>Got a 401k? Great! You do know of course that those funds are at risk, right? Meaning, if the market crashes, your 401k money may very well crash with it.</strong></p>But did you know that there are financial products that allow you to grow your money just like 401k’s BUT with protection from market crashes?<br>If you have a 401k and are considering rolling it over to a new account, let us show you what you can do with that money.<br>Schedule a FREE CONSULTATION BELOW!`,
					image: require('~/assets/img/svg/401k-rollovers.svg')
				},
				{
					name: `High-Income Earners`,
					description: `Congratulations, you’ve established a healthy income for yourself, but the question is – how are you preserving and protecting your money? How are you using that income to retire comfortably while giving as little to Uncle Sam than is necessary?<br>With higher incomes comes higher responsibilities. You need to optimize your cash savings and you might as well do it like the SUPER RICH. At Yetti Financial we focus on wealth generating strategies that the super rich have been using for decades, and yet only a fraction of high-income earners are privy to these savvy financial plans.<br>Schedule a FREE CONSULTATION, and we will provide you an illustration of exactly how we can grow your money with market-size gains, but with special protections and privileges that only those “in the know” are using every day to create wealth today and for generations to come.`,
					image: require('~/assets/img/svg/high-income-earners.svg')
				},
				{
					name: `For Business Owners`,
					description: `Do you own a business?<br>Well then, you already know there are lots of tax benefits that you potentially can tap into – the stuff every business owner immediately thinks about such as write-offs, strategic business expenses, etc… BUT did you know that there are plenty of business-related opportunities you can tap into from the financial products side?<br>From creative ways to increase retention of key employees via highly attractive and mutually beneficial employee benefit plans, to buy-sell agreements, to special types of insurance you can leverage as a strategic business choice, there’s a lot you can tap into to keep even more of that money you are earning.<br>Schedule a FREE CONSULTATION to learn how you tap your business status to set up some powerful and important wealth-building and wealth-preserving strategies for you and your business partners!`,
					image: require('~/assets/img/svg/business-owners.svg')
				},
				{
					name: `Career Opportunities`,
					description: `Looking for a career change? Perhaps extra money? Maybe you want to change the world?<br>Well, believe it or not, not only is a career in financial services one of the most lucrative industries to establish a career, but it happens to be a great way to make a real difference in the world.<br>The fact is most people are unaware of the powerful financial products that exist today, and its costing them thousands of dollars and a lifetime of unnecessary stress.<br>I am always looking for people who are eager to learn, make money, and make a difference. If you think you might be interested, click here so I can tell you more!`,
					image: require('~/assets/img/svg/career-opportunities.svg')
				}
			],
			serviceModalActive: false,
			serviceModelService: {}
		}
	},
	methods: {
		toggleServiceModal(service = {}) {
			this.serviceModelService = service
			this.serviceModalActive = !this.serviceModalActive
		}
	}
}
</script>
<style></style>
