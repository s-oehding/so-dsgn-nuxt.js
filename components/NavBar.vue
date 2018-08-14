<template>
  <nav class="navbar is-fixed-bottom is-hidden-desktop">
    <div class="navbar-brand">
      <a class="navbar-item" href="http://bulma.io">
        <app-logo
          class=""
          text="S0_DSGN"
          color="black"
        ></app-logo>
      </a>

      <a class="navbar-item" href="https://github.com/s-oehding" target="_blank">
      <span class="icon" style="color: #333;">
        <i class="fa fa-github"></i>
      </span>
      </a>

      <SideBarToggler></SideBarToggler>
    </div>

    <div id="navMenubd-example" class="navbar-menu">
      <div class="navbar-start">
      </div>

      <div class="navbar-end">

      </div>
    </div>
  </nav>
</template>

<script>
  export default {

  }
</script>
