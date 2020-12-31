<template>
  <section id="why-us" class="wow fadeIn">
    <div class="container">
      <header class="section-header">
        <h3>Why choose us?</h3>
        <p>
          {{ $store.getters.cData('why-choose-us.section-subtitle') }}
        </p>
      </header>

      <div class="row row-eq-height justify-content-center">
        <div
          class="col-lg-4 mb-4"
          v-for="reason of $store.getters.cData('why-choose-us.reasons')"
          :key="reason"
        >
          <div class="card wow bounceInUp">
            <i class="fa fa-diamond"></i>
            <div class="card-body">
              <h5 class="card-title">{{ reason }}</h5>
              <p class="card-text">
                Deleniti optio et nisi dolorem debitis. Aliquam nobis est
                temporibus sunt ab inventore officiis aut voluptatibus.
              </p>
              <a href="#" class="readmore">Read more </a>
            </div>
          </div>
        </div>
      </div>

      <div class="row counters">
        <div
          class="col-lg-3 col-6 text-center"
          v-for="number of $store.getters.cData('why-choose-us.the-numbers')"
          :key="number"
        >
          <!-- <span>{{number.split(':')[1].trim()}}</span> -->
          <client-only>
            <number
              :from="0"
              :to="number.split(':')[1].trim()"
              :duration="5"
              :delay="2"
              easing="Power1.easeOut"
            />
          </client-only>
          <p>{{ number.split(':')[0].trim() }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'WhyUsSection',
  data() {
    return {}
  }
}
</script>
<style></style>
