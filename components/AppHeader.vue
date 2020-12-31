<template>
  <header id="header" class="fixed-top">
    <div class="container">
      <div class="logo float-left">
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <h1 class="text-light"><a href="#header"><span>NewBiz</span></a></h1> -->
        <a href="#intro" v-scroll-to="'#intro'" class="scrollto"
          ><img src="~/assets/img/logo.png" alt="" class="img-fluid"
        /></a>
      </div>
      <navscroll
        class="main-nav float-right d-none d-lg-block"
        item-selector=".item"
        active-class="active"
        v-on:itemchanged="onItemChanged"
      >
        <ul>
          <li>
            <a
              class="item entry"
              :href="'#' + entry"
              v-for="(entry, i) of entries"
              :key="i"
              >{{ entry }}</a
            >
          </li>
        </ul>
      </navscroll>
      <!-- 					<li><a href="#about">About Us</a></li>
					<li><a href="#services">Services</a></li>
					<li><a href="#portfolio">Portfolio</a></li>
					<li><a href="#team">Team</a></li> -->
      <!-- 					<li class="drop-down">
						<a href="">Drop Down</a>
						<ul>
							<li><a href="#">Drop Down 1</a></li>
							<li class="drop-down">
								<a href="#">Drop Down 2</a>
								<ul>
									<li><a href="#">Deep Drop Down 1</a></li>
									<li><a href="#">Deep Drop Down 2</a></li>
									<li><a href="#">Deep Drop Down 3</a></li>
									<li><a href="#">Deep Drop Down 4</a></li>
									<li><a href="#">Deep Drop Down 5</a></li>
								</ul>
							</li>
							<li><a href="#">Drop Down 3</a></li>
							<li><a href="#">Drop Down 4</a></li>
							<li><a href="#">Drop Down 5</a></li>
						</ul>
					</li> -->
      <!-- <li><a href="#contact">Contact Us</a></li> -->
      <!-- 				</ul>
			</nav> -->
      <!-- .main-nav -->
    </div>
  </header>
  <!-- #header -->
</template>

<script>
import { kit } from '~/mixins/kit.js'
export default {
  name: 'AppHeader',
  mixins: [kit],
  data() {
    return {
      entries: ['about', 'services', 'portfolio', 'team', 'contact']
    }
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 100) {
        document.getElementById('header').classList.add('header-scrolled')
        document.querySelector('.back-to-top').style = 'display: inline;'
        return
      }
      document.getElementById('header').classList.remove('header-scrolled')
      document.querySelector('.back-to-top').style = 'display: none;'
      return
    },
    onItemChanged(event) {}
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="css" scoped></style>
