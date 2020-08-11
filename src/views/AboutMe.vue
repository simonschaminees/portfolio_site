<template>
  <div class="home">
    <h1>THis is the about page</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>

  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'AboutMe',
    components: {
    HelloWorld
  }
}
</script>
