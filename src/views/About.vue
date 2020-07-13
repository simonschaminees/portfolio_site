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
        <img alt="Simon" src="../assets/images/PV-SimonSchaminee-transperant.png" />
      </b-col>
    </b-row>
    <b-row>
      <b-col offset-lg="1">
        <b-card>
          <b-card-title>
            Adipiscing
          </b-card-title>
          <b-card-text>
            Etiam convallis elementum sapien, a aliquam turpis aliquam vitae. Praesent  nisl sollicitudin felis vel mi facilisis posuere. Nulla ultrices facilisis justo, non varius semper vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
          </b-card-text>
        </b-card>
        
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import navigation from "../components/Navigation.vue";
export default {
  name: "About",
  components: {
    navigation
  }
};
</script>

