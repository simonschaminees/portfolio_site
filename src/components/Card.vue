<template>
<b-container class="card-container-top" fluid>
  <b-row v-for="cardsData in cardsData" :key="cardsData.id">
    <b-card-title v-html="cardsData.title.rendered">
    </b-card-title>
    <b-card-text v-html="cardsData.content.rendered">
    </b-card-text>
  </b-row>
</b-container>

</template>

<script>
import { mapState} from 'vuex'


export default {
  name: 'Cards',
    computed : {
      ...mapState('cardsData', ['cardsData'])
    },
    created() {
      this.$store.dispatch('cardsData/loadcardsData')
    }


}
</script>

