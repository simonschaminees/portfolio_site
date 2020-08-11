<template>
  <b-navbar>
    <b-navbar-brand>
       <img class="mt-4 mb-4" alt="Logo Simon" src="../assets/images/logo-simon.svg">
    </b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <b-nav-item :to="{ name: 'AboutMe'}">Over mij</b-nav-item>
        <b-nav-item :to="{ name: 'Contact'}">Contact</b-nav-item>
      </b-navbar-nav>

  </b-navbar>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>
