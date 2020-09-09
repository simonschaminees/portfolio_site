<template>
<b-container fluid class="no-padding">
  <b-row class="layout-margin" v-for="cardsData in cardsData" :key="cardsData.id">
    <b-col class="no-padding" cols="2">
    <b-card-title v-html="cardsData.title.rendered">
    </b-card-title>
    </b-col>
    <b-col>
    <b-card-text class="no-padding"  cols="5" v-html="cardsData.content.rendered">
    </b-card-text>
    </b-col>
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

