<template>
  <div class="columns is-page-wrapper is-fullheight">
    <SideBar></SideBar>
    <div id="main-content" class="column is-main-content">
      <NavBar></NavBar>
      <nuxt/>
    </div>
  </div>
</template>

<style lang="scss">

  #main-content {
    max-width: calc(100% - 325px);
    transform: translatex(325px);
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
    background: $grey-lighter;
    z-index: -1;
  }
</style>
