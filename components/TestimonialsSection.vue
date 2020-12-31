<template>
  <section id="testimonials" class="section-bg">
    <div class="container">
      <header class="section-header">
        <h3>Testimonials</h3>
      </header>
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <client-only>
            <carousel
              class="owl-carousel testimonials-carousel wow fadeInUp"
              :perPage="1"
              :autoplay="true"
              :autoplayTimeout="4000"
              :autoplayHoverPause="true"
            >
              <slide
                v-for="(testimonyGiver, index) of $store.getters.cData(
                  'testimonials.testimony-giver'
                )"
                :key="index"
              >
                <div class="testimonial-item">
                  <img
                    src="~/assets/img/testimonial-1.jpg"
                    class="testimonial-img"
                    alt=""
                  />
                  <h3>{{ testimonyGiver }}</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <p>
                    {{ $store.getters.cData('testimonials.testimony')[index] }}
                  </p>
                </div>
              </slide>
            </carousel>
          </client-only>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'TestimonialsSection',
  data() {
    return {}
  }
}
</script>
<style></style>
