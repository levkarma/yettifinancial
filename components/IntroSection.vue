<template>
  <section id="intro" class="section is-marginless is-paddingless">
    <div class="columns is-marginless">
      <div class="column is-half is-paddingless">
        <section class="hero is-fullheight-with-navbar">
          <div class="hero-body">
            <div class="container box is-hidden-tablet">
              <div class="level is-mobile">
                <div class="level-left">
                  <h1 class="title is-size-4 level-item">
                    Meet Yetti
                  </h1>
                </div>
                <div class="level-right">
                  <button
                    v-scroll-to="'#contact'"
                    class="button level-item is-primary"
                  >
                    Call me!
                  </button>
                </div>
              </div>
              <div class="level">
                <h2 class="subtitle is-size-5 level-item">
                  "I love to educate. So don't be shy!"
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="column is-half is-paddingless right-content">
        <div class="box is-shadowless content">
          <div class="is-hidden-mobile">
            <h1 class="title is-size-1">
              Meet Yetti
            </h1>
            <h2 class="subtitle">
              "I love to educate. So don't be shy."
            </h2>
            <button v-scroll-to="'#contact'" class="button is-primary">
              Call me!
            </button>
            <a class="button is-info" v-scroll-to="'#services'">Our Services</a>
          </div>
          <h2 class="title">
            {{ $store.getters.cData('landing-page.short-business-statement') }}
          </h2>
          <div class="content">
            <nuxt-link
              to="events"
              class="button is-medium is-info is-light is-block"
              v-if="nextEventFormattedDate"
            >
              <span>Next Event on {{ nextEventFormattedDate }}</span>
              <span class="icon"
                ><i class="fas fa-chevron-circle-right"></i
              ></span>
            </nuxt-link>

            <a
              href="https://www.youtube.com/channel/UCAFPvZSFfyiirNfT2aCrz7g"
              class="expanding-button is-medium is-info is-light is-block "
              target="_blank"
            >
              <span>Watch my free videos!</span><br /><span class="is-size-6"
                >5k+ Subscribers</span
              >
              <span class="icon"
                ><i class="fas fa-chevron-circle-right"></i
              ></span>
            </a>
            <nuxt-link
              to="/5-reasons-you-should-consider-rolling-over-your-401k"
              class="button is-medium is-info is-light is-block has-top-margin multi-line-button"
            >
              <span>5 Reasons You Should Consider Rolling Over Your 401k</span>
              <span class="icon"
                ><i class="fas fa-chevron-circle-right"></i
              ></span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'IntroSection',

  data() {
    return {}
  },
  computed: {
    events() {
      return this.$store.state.events
    },
    nextEventFormattedDate() {
      const futureEvents = getFutureEvents(this.events)
      if (!futureEvents.length) return null
      // already sorted
      const nextEvent = futureEvents.pop()
      const date = dayjs(nextEvent.date).format('MM/DD')
      return date

      function getFutureEvents(events) {
        return events.filter(event => {
          return new Date(event.date).valueOf() > Date.now()
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.multi-line-button {
  height: auto;
  white-space: pre-wrap;
}
</style>
