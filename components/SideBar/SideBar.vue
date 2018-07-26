<template>
  <div class="column is-sidebar is-sidebar-menu">
    <aside class="menu">
      <app-logo/>
      <ul class="menu-list">
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Clients</a></li>
        <li><a>Portfolio</a></li>
      </ul>
      <div class="block connect">
        <i class="socicon-500px"></i>
      </div>

    </aside>
  </div>
</template>

<script>

  export default {
    name: 'sidebar',
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
  .is-sidebar {

    background: $grey-dark;
    position: fixed;
    top: 0;
    left: 0;
    width: $sidebar-width;
    height: 100vh;
  }
  .is-sidebar-menu {
    padding: 2.5rem;
    background: $grey-dark;

    li {
      a {
        color: $white;
      }
    }
  }
</style>

