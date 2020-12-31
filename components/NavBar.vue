<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <picture>
          <source type="image/webp" srcset="~/assets/img/yetti-logo.png.webp" />
          <source type="image/png" srcset="~/assets/img/yetti-logo.png" />
          <img src="~/assets/img/yetti-logo.png" alt="" />
        </picture>
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="menuActive = !menuActive"
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
        <nuxt-link class="navbar-item" :to="'/#about'">
          About
        </nuxt-link>
        <nuxt-link class="navbar-item" :to="'/#services'">
          Financial Services
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/#contact">
          Coaching and Mentoring
        </nuxt-link>
        <nuxt-link to="events" class="navbar-item">
          Upcoming Events
        </nuxt-link>
        <nuxt-link to="frequently-asked-questions" class="navbar-item">
          FAQ's
        </nuxt-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <nuxt-link class="button is-primary" to="/#contact">
              <strong>Free Consultation</strong>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'NavBar',
  // props: ['menuActive'],
  data() {
    return {
      menuActive: false
    }
  }
}
</script>
<style></style>
