<template>
  <aside id="sidebar" :class="{ 'is-open': open }">
    <div class="inner-wrapper">
      <div class="icon-bar">
        <div class="sidebar-top">
          <SideBarToggler></SideBarToggler>
        </div>
        <div class="sidebar-center">
          <ul class="menu-list">
            <li>
              <nuxt-link class="home" to="/" exact>
                <span class="icon">
                  <i class="oi " data-glyph="home"></i>
                </span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">
                <span class="icon">
                  <i class="oi " data-glyph="person"></i>
                </span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/portfolio">
                <span class="icon">
                  <i class="oi " data-glyph="pencil"></i>
                </span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/projects">
                <span class="icon">
                  <i class="oi " data-glyph="terminal"></i>
                </span>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="sidebar-bottom">
          <div class="block connect has-text-centered">
          <span class="icon is-medium is-rounded has-background-black-bis has-text-black-bis">
            <i class="socicon-github"></i>
          </span>
          </div>
        </div>
      </div>
      <div class="sidebar">
        <div class="sidebar-top">
          <app-logo
            class=""
            text="S0_DSGN"
            color="white"
          ></app-logo>
        </div>
        <div class="sidebar-center">
          <ul class="menu-list">
            <li class="home">
              <nuxt-link class="home" to="/" exact>Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">About</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/portfolio">Portfolio</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/projects">Projects</nuxt-link>
            </li>
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
      </div>
    </div>

  </aside>
</template>

<script>

  export default {
    name: 'sidebar',
    mounted() {
    },

    computed: {
      open() {
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
  @mixin menuHover($name, $color, $color-hover) {
    .#{$name} {

      color: #{$color};
      &:focus, &:hover {
        color: #{$color-hover};
      }
    }
  }

  .sidebar-top {
    height: 3rem;
  }

  .sidebar-center {
  }

  .sidebar-bottom {
    padding-bottom: 3rem;
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

  .menu-list {
    li {
      @include menuHover(home, $white, $primary);
      a {
        height: $iconbar-width;
        min-width: $iconbar-width;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: initial;
      }
    }
  }

  aside {
    background: $sidebar-bg-color;
    height: 100vh;
    flex-basis: $iconbar-width;
    flex-grow: 1;
    flex-shrink: 1;
    will-change: transform, flex-basis;
    transition: transform, flex-basis 0.25s ease-out;
    z-index: 10;

    .inner-wrapper {
      display: flex;
      height: 100vh;
      background: $sidebar-bg-color;
      align-items: stretch;
      justify-content: space-between;
      flex-direction: row-reverse;
    }

    .icon-bar {
      background: $iconbar-bg-color;
      width: $iconbar-width;
      box-shadow: 1px 0px 5px #3a3a3a;
      height: 100vh;
      display: inline-flex;
      flex-direction: column;
      justify-content: space-between;

      .menu-list {
        li {
          a {
            justify-content: center;
          }
        }
      }


      .navbar-burger {
        display: block;
        span {
          background-color: red;
        }
        a {
          color: red;
        }
      }
    }
    .sidebar {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100vh;
      width: calc(#{$sidebar-width} - #{$iconbar-width});
      position: absolute;
      right: $iconbar-width;
      padding: 0 1rem;
    }
  }
</style>

