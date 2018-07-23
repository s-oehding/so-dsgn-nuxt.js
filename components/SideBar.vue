<template>
  <div class="column is-sidebar is-sidebar-menu is-hidden-mobile">
    <aside class="menu">
      <ul class="menu-list">
        <li><a>Home</a></li>
        <li><a>About</a></li>
      </ul>
      <p class="menu-label">
        Blog
      </p>
      <ul class="menu-list">
        <li><a>Categorys</a></li>
        <li>
          <a class="is-active">Category one</a>
          <ul>
            <li><a>Subcat</a></li>
            <li><a>Subcat</a></li>
            <li><a>Subcat</a></li>
          </ul>
        </li>
        <li><a>Category Two</a></li>
        <li><a>Category Three</a></li>
      </ul>
      <p class="menu-label">
        Projects
      </p>
      <ul class="menu-list">
        <li><a>Clients</a></li>
        <li><a>Portfolio</a></li>
      </ul>
    </aside>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .is-sidebar {
    max-width: $sidebar-width;
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

