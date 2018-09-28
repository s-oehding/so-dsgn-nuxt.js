<template>
  <section class="container">
    <no-ssr placeholder="Loading...">
      <main class="sliders-container">

          <agile
            class="slides"
            :arrows="false"
            :dots="false"
            :infinite="false">
            <div class="slide"><h3>1</h3></div>
            <div class="slide"><h3>2</h3></div>
            <div class="slide"><h3>3</h3></div>
            <div class="slide"><h3>4</h3></div>
          </agile>

          <agile
            class="slider--numbers"
            :arrows="false"
            :dots="false"
            :infinite="false">
              <div class="slide"><img src="https://picsum.photos/1024/512/?random"/></div>
              <div class="slide"><img src="https://picsum.photos/1024/512/?random"/></div>
              <div class="slide"><img src="https://picsum.photos/1024/512/?random"/></div>
              <div class="slide"><img src="https://picsum.photos/1024/512/?random"/></div>
          </agile>

      </main>
    </no-ssr>
  </section>
</template>

<script>

</script>

<style lang="scss">

</style>
