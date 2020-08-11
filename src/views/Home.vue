<template>
  <b-container fluid>
    <b-row class="lichtgrijs">
      <b-col cols="10" offset-lg="1">
        <navigation />
      </b-col>
    </b-row>
    <b-row class="lichtgrijs">
      <b-col cols="5" offset-lg="1">
        <h1 class="mainTitle">Welkom</h1>
        <p class="payOff">
          De verlosser,
          De oppergeneraal
          De redder van dx2
          De wcm goeroe, Eerlijkheid boven alles.
        </p>
      </b-col>
      <b-col cols="5">
        <img  class="bannerImage" alt="Simon" src="../assets/images/PV-SimonSchaminee-transperant.png" />
      </b-col>
    </b-row>



  <cards/>


  <b-row>
    <b-col cols="10" offset-lg="1">
      <h2 class="headers">Portfolio</h2>
    </b-col>
    <b-col cols="5" offset-lg="1">
      <div class="square">
      </div>
      <div class="square mt-4">
      </div>
    </b-col>
        <b-col cols="5">
      <div class="square square_top">
      </div>
      <div class="square mt-4">
      </div>
    </b-col>
  </b-row>

  <b-row class="footer mt-4">
    <b-col cols="10" offset-lg="1" class="mt-4 mb-4">
      <h2 class="footer_header">Footer</h2>
    </b-col>

  </b-row>


  </b-container>
</template>

<script>
import navigation from "../components/Navigation.vue";
import cards from "../components/Card.vue"
export default {
  name: "Home",
  components: {
    navigation,
    cards
  }
};
</script>

