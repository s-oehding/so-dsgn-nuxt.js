<template>
  <section class="container content">
    <div class="columns">
      <div class="column">
        <h1 class="title">
          so-dsgn.de
        </h1>
        <h2 class="subtitle">
          Frontend Application for my personal Website
        </h2>
        <div class="links">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="button--green">Documentation</a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--grey">GitHub</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  fetch ({ store, params }) {
    store.dispatch('regions/getRegions');
  }
}
</script>

<style lang="scss">
  .container {
    background-size: cover;
  }
  .content {
    padding: 0 1rem;
  }
  #main-content {


  }
</style>
