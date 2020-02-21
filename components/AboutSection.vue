<template>
	<div id="about" class="has-background-light">
		<section class="section">
			<div class="container">
				<div class="content">
					<h2 class="title is-size-3">About Yetti Financial</h2>
					<p class="is-size-4">
						At Yetti Financial, we are focused on financial services and
						products
						<strong>that serve the family interests first and foremost</strong>.
					</p>
				</div>
				<div class="columns">
					<div class="column is-half">
						<YoutubeVideo
							:src="
								'https://www.youtube.com/embed/videoseries?list=PLEMDtyFuzwKajsLKrhwEk9HoL2NVDz5qJ'
							"
						/>
					</div>
					<div class="column is-half">
						<div class="content">
							<div class="level">
								<div class="level-left">
									<div class="level-item has-text-centered">
										<p class="is-size-5">
											We'll discuss topics like:
										</p>
									</div>
								</div>
							</div>
							<div class="content">
								<div class="level" v-for="question in keyQuestions">
									<div class="level-left">
										<div class="level-item">
											<span class="icon">
												<i :class="'fas fa-lg ' + question.icon"></i>
											</span>
										</div>
										<div
											class="level-item has-text-centered-mobile"
											v-html="question.phrase"
										></div>
									</div>
								</div>
								<!-- 								<ul>
									<li>
										<strong>Saving for retirement</strong>
									</li>
									<li>
										<strong>Life insurance plans</strong>
									</li>
									<li>
										<strong
											>Take advantage of my business for retirement
											purposes</strong
										>
									</li>
									<li><strong>Grow your money tax free</strong></li>
									<li>
										<strong>Save for my children’s education</strong>
									</li>
									<li><strong>Create generational wealth</strong></li>
									<button class="button is-primary">
										Schedule a free consultation
									</button>
								</ul> -->
							</div>
						</div>
					</div>
				</div>
				<div class="columns is-centered">
					<div class="column is-half">
						<figure class="image is-4by1 has-top-margin">
							<picture>
								<source data-srcset="~/assets/img/yetti-logo.png.webp" />
								<source data-srcset="~/assets/img/yetti-logo.png" />
								<img
									:data-src="'~/assets/img/yetti-logo.png'"
									class="lazy-picture"
									alt=""
								/>
							</picture>
						</figure>
					</div>
				</div>
			</div>
		</section>
		<!-- <header class="section-header"> -->
		<!-- <h3>About Us</h3> -->
		<!-- 				<p>
					{{ $store.getters.cData('about-us-section.first-sentence') }}
				</p> -->
		<!-- </header> -->

		<!-- 			<div class="row about-container">
				<div class="col-lg-6 content order-lg-1 order-2"> -->
		<!-- <p>{{ $store.getters.cData('about-us-section.body') }} NULL</p> -->

		<!-- 					<div class="icon-box wow fadeInUp">
						<div class="icon"><i class="fa fa-shopping-bag"></i></div>
						<h4 class="title">
							<a href=""></a>
						</h4> -->
		<!-- <h4 class="title"><a href="">Eiusmod Tempor</a></h4> -->
		<!-- 						<p class="description">
							Et harum quidem rerum facilis est et expedita distinctio. Nam
							libero tempore, cum soluta nobis est eligendi
						</p>
					</div> -->

		<!-- 					<div class="icon-box wow fadeInUp" data-wow-delay="0.2s">
						<div class="icon"><i class="fa fa-photo"></i></div>
						<h4 class="title"><a href="">Magni Dolores</a></h4>
						<p class="description">
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
							officia deserunt mollit anim id est laborum
						</p>
					</div> -->

		<!-- 					<div class="icon-box wow fadeInUp" data-wow-delay="0.4s">
						<div class="icon"><i class="fa fa-bar-chart"></i></div>
						<h4 class="title"><a href="">Dolor Sitema</a></h4>
						<p class="description">
							Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
							aliquip ex ea commodo consequat tarad limino ata
						</p>
					</div> -->
		<!-- </div> -->
		<!-- 
				<div class="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
					<img src="~/assets/img/about-img.svg" class="img-fluid" alt="" />
				</div>
			</div> -->

		<!-- 			<div class="row about-extra">
				<div class="col-lg-6 wow fadeInUp">
					<img src="~/assets/img/about-extra-1.svg" class="img-fluid" alt="" />
				</div>
				<div class="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
					<h4></h4>

					<p></p>
				</div>
			</div>

			<div class="row about-extra">
				<div class="col-lg-6 wow fadeInUp order-1 order-lg-2">
					<img src="~/assets/img/about-extra-2.svg" class="img-fluid" alt="" />
				</div> -->

		<!-- 				<div class="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
					<h4>
						Neque saepe temporibus repellat ea ipsum et. Id vel et quia tempora
						facere reprehenderit.
					</h4>
					<p>
						Delectus alias ut incidunt delectus nam placeat in consequatur. Sed
						cupiditate quia ea quis. Voluptas nemo qui aut distinctio. Cumque
						fugit earum est quam officiis numquam. Ducimus corporis autem at
						blanditiis beatae incidunt sunt.
					</p>
					<p>
						Voluptas saepe natus quidem blanditiis. Non sunt impedit voluptas
						mollitia beatae. Qui esse molestias. Laudantium libero nisi vitae
						debitis. Dolorem cupiditate est perferendis iusto.
					</p>
					<p>
						Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore sint
						quia modi. Numquam est aut fuga mollitia exercitationem nam
						accusantium provident quia.
					</p>
				</div>
			</div>
		</div> -->
	</div>
</template>
<script>
import YoutubeVideo from '../components/YoutubeVideo.vue'
export default {
	name: 'AboutSection',
	components: {
		YoutubeVideo
	},
	data() {
		return {
			keyQuestions: [
				{
					phrase: 'Saving for retirement',
					icon: 'fa-glass-cheers'
				},
				{
					phrase: 'Life insurance plans',
					icon: 'fa-heartbeat'
				},
				{
					phrase: 'Taking advantage of my business<br> for retirement purposes',
					icon: 'fa-building'
				},
				{
					phrase: 'Growing your money tax free',
					icon: 'fa-chart-line'
				},
				{
					phrase:
						'Leverage up to 3 to 1 bank matching<br> for tax-free retirement savings',
					icon: 'fa-percent'
				},
				{
					phrase: 'Saving for my children’s education',
					icon: 'fa-university'
				},
				{
					phrase: 'Creating generational wealth',
					icon: 'fa-hand-holding-usd'
				}
			]
		}
	}
}
</script>
<style></style>
