<template>
  <div class="column is-sidebar is-sidebar-menu">
    <aside class="menu">
      <app-logo/>
      <ul class="menu-list">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/portfolio">Portfolio</nuxt-link></li>
        <li><nuxt-link to="/projects">Projects</nuxt-link></li>
      </ul>
      <div class="block connect has-text-centered">
        <span class="icon is-medium is-rounded has-background-primary has-text-dark">
          <i class="socicon-github"></i>
        </span>
        <span class="icon is-medium is-rounded has-background-primary has-text-dark">
          <i class="socicon-linkedin"></i>
        </span>
        <span class="icon is-medium is-rounded has-background-primary has-text-dark">
          <i class="socicon-xing"></i>
        </span>
        <span class="icon is-medium is-rounded has-background-primary has-text-dark">
          <i class="socicon-soundcloud"></i>
        </span>
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

    .menu {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
      li {
        a {
          color: $white;
        }
      }
    }
  }
  .connect {
    .icon {
      margin-right: .5rem;
    }
  }
</style>

