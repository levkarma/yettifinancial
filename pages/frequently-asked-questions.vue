<template>
	<section id="faqs" class="section">
		<div class="columns is-centered">
			<div class="column content is-two-thirds-desktop">
				<h1>Frequently Asked Questions</h1>
				<div v-for="faq in faqs" v-if="faqs.length" class="has-top-margin">
					<h2 v-html="faq.question"></h2>
					<p class="is-size-5" v-html="$md.render(faq.answer)"></p>
				</div>
				<div v-if="!faqs.length">
					Coming soon.
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'frequently-asked-questions',
	computed: {
		faqs() {
			return this.$store.state.faqs
		}
	},
	data() {
		return {}
	},
	methods: {},
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
