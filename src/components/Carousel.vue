<template>
  <swiper class="swiper" :options="swiperOption">
        <swiper-slide><img src="../assets/images/PV-SimonSchaminee-25-resize.png">Slide 1</swiper-slide>
    <swiper-slide><img src="../assets/images/PV-SimonSchaminee-21.png">Slide 2</swiper-slide>
    <swiper-slide><img src="../assets/images/PV-SimonSchaminee-26.png">Slide 3</swiper-slide>
            <swiper-slide><img src="../assets/images/PV-SimonSchaminee-25-resize.png">Slide 4</swiper-slide>



    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: 'swiper-example-multiple-slides-per-biew',
    title: 'Multiple slides per view',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 1.5,
          spaceBetween: 80,
          loop: true,
          autoplay: {
          delay: 2000,
          },
          loopFillGroupWithBlank: false,
          loopAdditionalSlides: 900,

        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.swiper {


  .swiper-slide {
    flex-shrink: 1;
  }
}
</style>