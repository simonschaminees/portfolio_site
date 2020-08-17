<template>
  <b-container fluid>
    <b-row class="lichtgrijs">
      <b-col cols="10" offset-lg="1">
        <navigation />
      </b-col>
    </b-row>

    <b-row class="black">
      <b-col cols="5" offset-lg="1">
        <h1 class="mainTitle">Aliquam nec </h1>
        <p class="payOff white-font">
          De verlosser,
          De oppergeneraal
          De redder van dx2
          De wcm goeroe, Eerlijkheid boven alles.
        </p>
      </b-col>
    </b-row>

    <b-row>
      <b-col offset-lg="1">
        <carousel />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import navigation from "../components/Navigation.vue";
import carousel from "../components/Carousel.vue";

export default {
  name: 'AboutMe',
    components: {
    navigation,
    carousel
  }
}
</script>
