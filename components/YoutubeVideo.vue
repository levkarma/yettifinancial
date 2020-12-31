<template>
  <figure class="image is-16by9">
    <iframe
      class="has-ratio lazy-youtube"
      width="480"
      height="270"
      :data-src="src"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </figure>
</template>

<script>
export default {
  name: 'YoutubeVideo',
  props: ['src'],
  data() {
    return {}
  }
}
</script>

<style lang="css" scoped></style>
