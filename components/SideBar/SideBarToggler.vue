<template>
  <button
    class="hamburger hamburger--arrow"
    :class="{ 'is-active': open }"
    type="button"
    @click="handleClick">
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>
</template>

<script>
  export default {
    name: 'SideBarToggler',
    computed: {
      open () {
        return this.$store.state.ui.sidebar.open
      }
    },

    methods: {
      handleClick () {
        this.$store.dispatch('ui/toggleSidebar')
      }
    }
  }

</script>

<style lang="scss">

</style>

