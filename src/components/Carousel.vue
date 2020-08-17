<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="../assets/images/PV-SimonSchaminee-26.png"
      ></b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="../assets/images/PV-SimonSchaminee-21.png"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */

  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>