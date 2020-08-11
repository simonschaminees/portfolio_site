<template>
  <b-container fluid>
    <b-row class="lichtgrijs">
      <b-col cols="10" offset-lg="1">
        <navigation />
      </b-col>
    </b-row>
  <div class="home">
    <h1>THis is the about page</h1>
        <img  alt="Simon" src="https://i.kym-cdn.com/photos/images/newsfeed/001/176/251/4d7.png" />

  </div>
  </b-container>
</template>

<script>
import navigation from "../components/Navigation.vue";

export default {
  name: 'AboutMe',
    components: {
    navigation
  }
}
</script>
