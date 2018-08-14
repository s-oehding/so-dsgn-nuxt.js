<template>
  <div id="page-wrapper" class="columns is-page-wrapper is-fullheight" :class="{ 'sidebar-open': open }">
    <SideBar></SideBar>
    <div id="main-content" class="column is-main-content">
      <NavBar></NavBar>
      <nuxt/>
    </div>
  </div>
</template>

<script>

  export default {
    mounted () {
    },

    computed: {
      open () {
        return this.$store.state.ui.sidebar.open
      }
    },

    watch: {
      open: function (open) {
      }
    }
  }

</script>

<style lang="scss">

  #page-wrapper {
    height: 100vh;
    width: 100vw;
    display: flex;
    &.sidebar-open {
      aside {
        flex-basis: calc(#{$sidebar-width} + #{$iconbar-width});
      }
      #main-content {
        flex-basis: calc(100vw - #{$sidebar-width} + #{$iconbar-width});
      }
    }
  }

  #main-content {
    background: $main-content-bg-color;
    height: 100vh;
    flex-basis: calc(100vw - #{$iconbar-width});
    will-change: transform, flex-basis;
    transition: transform, flex-basis 0.25s ease-out;
    flex-grow: 1;
    flex-shrink: 1;
  }

  .columns {
    &.is-page-wrapper {
      margin: 0;
    }

    &.is-fullheight {
      min-height: 100vh;
      max-height: 100vh;
      height: 100vh;

      display: flex;
      flex-direction: row;
      justify-content: stretch;

      .column {
        overflow-y: auto;

        &.is-main-content {
          padding: 0;
        }
      }
    }
  }

  .is-main-content {
  }
</style>
