<template>
  <div class="column is-sidebar is-sidebar-menu">
    <aside class="menu">
      <div class="sidebar-top">
        <app-logo/>
      </div>
      <div class="sidebar-center">
        <ul class="menu-list">
          <li><nuxt-link to="/" exact>Home</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <li><nuxt-link to="/portfolio">Portfolio</nuxt-link></li>
          <li><nuxt-link to="/projects">Projects</nuxt-link></li>
        </ul>
      </div>
      <div class="sidebar-bottom">
        <div class="block connect has-text-centered">
          <span class="icon is-medium is-rounded has-background-primary has-text-black-bis">
            <i class="socicon-github"></i>
          </span>
          <span class="icon is-medium is-rounded has-background-primary has-text-black-bis">
            <i class="socicon-linkedin"></i>
          </span>
          <span class="icon is-medium is-rounded has-background-primary has-text-black-bis">
            <i class="socicon-xing"></i>
          </span>
          <span class="icon is-medium is-rounded has-background-primary has-text-black-bis">
            <i class="socicon-soundcloud"></i>
          </span>
        </div>
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

<style lang="scss" scoped>

  .sidebar-top {

  }

  .is-sidebar {
    @include boxShadow(5);
    background: $black;
    width: $sidebar-width;
    display: flex;
    flex: 1 1 auto;
    flex-basis: $sidebar-width;
    height: 100vh;

    &.is-open {
      flex-basis: $sidebar-width;
    }
  }

  .is-sidebar-menu {
    padding: 2.5rem;
    background: $black-bis;

    .menu {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
      li {
        a {
        }
      }
    }

    .icons {

    }
  }
  .connect {
    .icon {
      margin-right: .5rem;
    }
  }
</style>

