<template>
	<nav
		class="navbar is-fixed-top"
		role="navigation"
		aria-label="main navigation"
	>
		<div class="navbar-brand">
			<a class="navbar-item" href="/">
				<img src="~/assets/img/yetti-logo.png" />
			</a>

			<a
				role="button"
				class="navbar-burger burger"
				aria-label="menu"
				aria-expanded="false"
				data-target="navbarBasicExample"
				@click="$emit('toggleMenuActive')"
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div
			id="navbarBasicExample"
			class="navbar-menu"
			:class="{ 'is-active': menuActive }"
		>
			<div class="navbar-start">
				<a class="navbar-item">
					About
				</a>
				<a class="navbar-item">
					Financial Services
				</a>
				<a class="navbar-item">
					Coaching and Mentoring
				</a>
				<a class="navbar-item">
					Upcoming Events
				</a>
			</div>

			<div class="navbar-end">
				<div class="navbar-item">
					<div class="buttons">
						<a class="button is-primary">
							<strong>Free Consultation</strong>
						</a>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>
<script>
export default {
	name: 'NavBar',
	props: ['menuActive'],
	data() {
		return {}
	}
}
</script>
<style></style>
