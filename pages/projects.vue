<template>
  <no-ssr>
    <section class="container">
      <!-- Container for all sliders, and pagination -->
      <tiny-slider
        ref="sliderNumbers"
        :mouse-drag="true"
        :loop="true"
        :controls="false"
        animate-in="t"
        animate-out="slideOutBottom"
        slideBy="1"
        items="1"
        gutter="0"
      >
        <div
          class="animate"
          v-for="(project, key) in projects"
          :key="key">
          <p class="title is-1">{{key}}</p>
        </div>
      </tiny-slider>

      <tiny-slider
        ref="sliderMain"
        :controls="false"
        :mouse-drag="true"
        :loop="true"
        slideBy="1"
        items="1"
        gutter="0">
        <div
          v-for="(project, key) in projects"
          :key="key">
          <img :src="project.img.main.src" alt="key"/>
        </div>
      </tiny-slider>
      <button class="button is-large is-primary"
              @click="next()"></button>
    </section>
  </no-ssr>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data () {
      return {

      }
    },
    methods: {
      next: function() {
        console.log(this.$refs.sliderMain)
        this.$refs.sliderMain.goTo('next')
        this.$refs.sliderNumbers.goTo('next')
      }
    },
    computed: {
      ...mapGetters({
        projects: 'projects/projects'
      })
    }
  }

</script>

<style lang="scss">
  @import "~tiny-slider/src/tiny-slider";

</style>
