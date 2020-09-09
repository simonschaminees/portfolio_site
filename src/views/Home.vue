<template>
  <b-container fluid>
    <b-row class="lichtgrijs">
      <b-col cols="10" offset-lg="1">
        <navigation />
      </b-col>
    </b-row>
    <b-row class="lichtgrijs">
      <b-col v-if="posts.length" cols="5" offset-lg="1" class="d-flex flex-column align-self-center">
        <h1 class="mainTitle " v-html="posts[0].title.rendered"></h1>
        <p class="payOff" v-html="posts[0].content.rendered"></p>
          <b-button href="" class="mt-5 primary-button">Mijn werk</b-button>
      </b-col>
        <b-col v-else cols="5" offset-lg="1">
        <h1> content wordt ingeladen</h1>
      </b-col>
      <b-col class="d-none d-md-block" cols="5">
        <img class="banner-image" alt="Simon" src="../assets/images/PV-SimonSchaminee-transperant.png" />
      </b-col> 
    </b-row>
  <b-col offset-lg="1">
    <cards />
  </b-col>

    <b-row class="layout-margin">
      <b-col cols="10" offset-lg="1">
        <h2 class="headers">Portfolio</h2>
      </b-col>
      <b-col cols="5" offset-lg="1">
        <div class="square">
        </div>
        <h3>Project 2</h3>
        <div class="square mt-4">
        </div>
        <h3>Project 2</h3>
      </b-col>
      <b-col cols="5">
        <div class="square square_top">
        </div>
        <h3>Project 1</h3>
        <div class="square mt-4">
        </div>
        <h3>Project 4</h3>
      </b-col>
    </b-row>

    <b-row class="lichtgrijs ">
      <b-col cols="5" offset-lg="1" class="layout-margin"> 
        <p class="payOff">
         Wilt u met mij in contact komen? Druk op de onderstaande knop
        </p>
        <b-button class="primary-button mt-5">Contact</b-button>
      </b-col>
    </b-row>

    <b-row class="footer">
      <b-col cols="10" offset-lg="1" class="mt-4 mb-4">
        <h2 class="footer_header">Footer</h2>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import navigation from "../components/Navigation.vue";
import cards from "../components/Card.vue";
import { mapState} from 'vuex'


export default {
  name: "Home",
  components: {
    navigation,
    cards
  },
      computed : {
      ...mapState('posts', ['posts'])
    },
      created() {
      this.$store.dispatch('posts/loadPosts')
    }
};
</script>

