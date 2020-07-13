<template>
<b-container fluid>
  <b-row class=lichtgrijs>
    <b-col cols="10" offset-lg="1">
      <navigation/>
    </b-col>
 </b-row>
 <b-row>
   <h1>test</h1>
 </b-row>


   

</b-container>    
</template>

<script>
import navigation from '../components/Navigation.vue'
export default {
  name: 'About',
  components: {
    navigation
  }
}
</script>

