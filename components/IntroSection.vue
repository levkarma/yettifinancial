<template>
	<section id="intro" class="clearfix">
	  <div class="container">

	    <div class="intro-img">
	      <img src="~/assets/img/intro-img.svg" alt="" class="img-fluid">
	    </div>

	    <div class="intro-info">
	      <h2>{{ $store.getters.cData('landing-page.short-business-statement') }}</h2>
	      <div>
	        <a v-for="button of $store.getters.cData('landing-page.action-buttons')" href="#about" class="btn-services scrollto">{{ button }}</a>
	      </div>
	    </div>

	  </div>
	</section>
</template>

<script>
export default {

  name: 'IntroSection',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>