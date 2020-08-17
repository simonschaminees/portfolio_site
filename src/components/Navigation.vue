<template>
  <b-navbar>
    <b-navbar-brand>
          <router-link to="/">
       <img class="mt-4 mb-4" alt="Logo Simon" src="../assets/images/logo-simon.svg">
       </router-link>
    </b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <b-nav-item class="nav-link" :to="{ name: 'AboutMe'}">Over mij</b-nav-item>
        <b-nav-item class="nav-link" :to="{ name: 'Contact'}">Contact</b-nav-item>
      </b-navbar-nav>

  </b-navbar>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>
