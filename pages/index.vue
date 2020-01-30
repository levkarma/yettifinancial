<template>
  <div id="home">
    <!-- <AppHeader></AppHeader> -->
    <IntroSection></IntroSection>
    <main id="section is-marginless is-paddingless">
      <AboutSection />
      <ServicesSection />
      <!-- <WhyUsSection /> -->
      <!-- <PortfolioSection /> -->
      <!-- <TestimonialsSection /> -->
      <!-- <TeamSection /> -->
      <!-- <ClientsSection /> -->
      <!-- <ContactSection /> -->
    </main>
    <!-- <AppFooter></AppFooter> -->

    <a href="#" v-scroll-to="'#header'" class="back-to-top"
      ><i class="fa fa-chevron-up"></i
    ></a>
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

if (process.client) {
  const imagesLoaded = require('vue-images-loaded')
}

export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  },
  data() {
    return {}
  },
  components: {
    AppHeader,
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
    TestimonialsSection
  }
}
</script>

<style></style>
