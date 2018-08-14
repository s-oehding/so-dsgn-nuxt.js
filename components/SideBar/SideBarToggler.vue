<template>
  <a
    role="button"
    id="burger"
    class="tgl navbar-burger"
    aria-label="menu"
    aria-expanded="false"
    @click="handleClick">
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
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
        console.log('click')
      }
    }
  }

</script>

<style lang="scss">

</style>

