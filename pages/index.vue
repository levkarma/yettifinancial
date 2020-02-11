<template>
  <div id="home" class="has-navbar-fixed-top">
    <!-- <EventsModal /> -->
    <!-- <AppHeader></AppHeader> -->
    <IntroSection></IntroSection>
    <main id="section is-marginless is-paddingless">
      <AboutSection />
      <AboutYettiSection />
      <ServicesSection />
      <!-- <WhyUsSection /> -->
      <!-- <PortfolioSection /> -->
      <!-- <TestimonialsSection /> -->
      <!-- <TeamSection /> -->
      <!-- <ClientsSection /> -->
      <ContactSection />
    </main>
    <!-- <AppFooter></AppFooter> -->

    <footer class="footer">
      <div class="content has-text-centered">
        <p>Yetti Financial</p>
      </div>
      <div class="content has-text-centered">
        <span class="icon">
          <i class="fab fa-2x fa-facebook"></i>
        </span>
        <span class="icon"><i class="fab fa-2x fa-instagram"></i></span>
      </div>
    </footer>
    <!-- Uncomment below i you want to use a preloader -->
    <!-- <div id="preloader"></div> -->
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import IntroSection from '~/components/IntroSection.vue'
import AppFooter from '~/components/AppFooter.vue'
import IsotopeTest from '~/components/IsotopeTest.vue'
import AboutSection from '~/components/AboutSection.vue'
import ServicesSection from '~/components/ServicesSection.vue'
import WhyUsSection from '~/components/WhyUsSection.vue'
import PortfolioSection from '~/components/PortfolioSection.vue'
import ContactSection from '~/components/ContactSection.vue'
import ClientsSection from '~/components/ClientsSection.vue'
import TeamSection from '~/components/TeamSection.vue'
import TestimonialsSection from '~/components/TestimonialsSection.vue'
import NavBar from '~/components/NavBar.vue'
import AboutYettiSection from '~/components/AboutYettiSection.vue'
if (process.client) {
  const imagesLoaded = require('vue-images-loaded')
}

export default {
  scrollToTop: false,
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  },
  data() {
    return {
      menuActive: false
    }
  },
  methods: {
    ensureScroll(px) {
      document.querySelector('body').scrollTop = px
      document.querySelector('html').scrollTop = px
    }
  },
  components: {
    AppHeader,
    NavBar,
    IntroSection,
    AppFooter,
    IsotopeTest,
    AboutSection,
    ServicesSection,
    WhyUsSection,
    PortfolioSection,
    ContactSection,
    ClientsSection,
    TeamSection,
    TestimonialsSection,
    AboutYettiSection
  },
  mounted() {
    if (
      this.$store.state.route.from.name === 'services-name' &&
      this.$store.state.route.to.name === 'index'
    ) {
      console.log('scrolling to adjusted position')
      const adjustedLastHomepageScrollPosition = this.$store.state
        .lastHomepageScrollPosition
      // document.querySelector('nav').offsetHeight
      this.ensureScroll(adjustedLastHomepageScrollPosition)
    } else {
      console.log('scrolling to 0')
      return this.ensureScroll(0)
    }
  }
}
</script>

<style></style>
