<template>
  <no-ssr>
    <section class="container">
      <!-- Container for all sliders, and pagination -->
      <tiny-slider
        ref="sliderNumbers"
        :mouse-drag="true"
        :loop="true"
        :controls="false"
        animate-in="fadeInDown"
        animate-out="fadeOutDown"
        animate-normal="fadeIn"
        mode="gallery"
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

      <tiny-slider
        ref="sliderTitle"
        :mouse-drag="true"
        :loop="true"
        :controls="false"
        animate-in="fadeInLeft"
        animate-out="fadeOutRight"
        animate-normal="fadeIn"
        mode="gallery"
        slideBy="1"
        items="1"
        gutter="0"
      >
        <div
          class="animate"
          v-for="(project, key) in projects"
          :key="key">
          <h1 class="title is-1">{{ project.name }}</h1>
        </div>
      </tiny-slider>

      <button class="button is-large is-primary"
              @click="prevSlide()">
        <span class="icon">
          <i class="oi" data-glyph="caret-left"></i>
        </span>
      </button>
      <button class="button is-large is-primary"
              @click="nextSlide()"><span class="icon">
          <i class="oi" data-glyph="caret-right"></i>
        </span>
      </button>
    </section>
  </no-ssr>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {}
    },
    methods: {
      prevSlide: function () {
        for (let slider in this.$refs) {
          this.$refs[slider].goTo('prev')
        }
      },
      nextSlide: function () {
        for (let slider in this.$refs) {
          this.$refs[slider].goTo('next')
        }
      }
    },
    mounted() {

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
