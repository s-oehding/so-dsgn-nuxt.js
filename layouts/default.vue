<template>
  <div>
    <NavBar></NavBar>
    <div class="columns is-fullheight">
      <SideBar></SideBar>
      <div class="column is-main-content">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

  .columns {
    &.is-fullheight {
      min-height: calc(100vh - ( #{$navbar-height} - .75rem ) );
      max-height: calc(100vh - ( #{$navbar-height} - .75rem ) );
      height: calc(100vh - ( #{$navbar-height} - .75rem ) );
      display: flex;
      flex-direction: row;
      justify-content: stretch;

      .column {
        overflow-y: auto
      }
    }
  }

  .is-main-content {
    background: $grey-lighter;
  }
</style>
