<template>
  <div class="columns is-page-wrapper is-fullheight">
    <SideBar></SideBar>
    <div class="column is-main-content">
      <NavBar></NavBar>
      <nuxt/>
    </div>
  </div>
</template>

<style lang="scss">

  .columns {
    &.is-page-wrapper {
      margin: 0;
    }

    &.is-fullheight {
      //min-height: calc(100vh - (#{$navbar-height} - .75rem));
      //max-height: calc(100vh - (#{$navbar-height} - .75rem));
      //height: calc(100vh - (#{$navbar-height} - .75rem));
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
    background: $grey-lighter;
  }
</style>
