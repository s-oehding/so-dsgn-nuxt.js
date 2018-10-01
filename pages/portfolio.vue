<template>
  <section class="container">
    <no-ssr placeholder="Loading...">
      <main class="sliders-container">

          <agile
            ref="sliderNumbers"
            class="slider-numbers"
            :prevArrow="left"
            :nextArrow="right"
            :dots="false"
            :infinite="true"
            :fade="true">
            <div class="slide"><h3 class="title is-1">1</h3></div>
            <div class="slide"><h3 class="title is-1">2</h3></div>
            <div class="slide"><h3 class="title is-1">3</h3></div>
            <div class="slide"><h3 class="title is-1">4</h3></div>
          </agile>

          <agile
            ref="sliderSlides"
            class="slider-slides"
            :arrows="false"
            :dots="false"
            :infinite="true"
            :fade="false">
              <div class="slide"><img src="https://picsum.photos/1024/512/?random"/></div>
              <div class="slide"><img src="https://picsum.photos/1024/512/?random"/></div>
              <div class="slide"><img src="https://picsum.photos/1024/512/?random"/></div>
              <div class="slide"><img src="https://picsum.photos/1024/512/?random"/></div>
          </agile>
          <div class="level is-mobile">
            <div class="level-left">
              <div class="level-item">
                <button class="button is-primary"
                        @click="prevSlide()">prev</button>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <button class="button is-primary"
                        @click="nextSlide()">next</button>
              </div>
            </div>
          </div>
      </main>
    </no-ssr>
  </section>
</template>

<script>
export default {
    data () {
        return {
            left: '<svg x="0px" y="0px" viewBox="0 0 24 24"><path d="M16.2,21c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L9.6,12L17,4.7c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L6.8,12l8.8,8.7C15.7,20.9,16,21,16.2,21z"/></svg>',
            right: '<svg x="0px" y="0px" viewBox="0 0 24 24"><path d="M7.8,21c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l7.4-7.3L7,4.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l8.8,8.7l-8.8,8.7C8.3,20.9,8,21,7.8,21z"/></svg>'
        }
    },
    methods: {
      prevSlide () {
        this.$refs.sliderNumbers.prevSlide()
        this.$refs.sliderSlides.prevSlide()
      },
      nextSlide () {
        this.$refs.sliderNumbers.nextSlide()
        this.$refs.sliderSlides.nextSlide()
      }
    }
}
</script>

<style lang="scss">
  .slide {
    img {
      width: 100%;
      height: auto;
    }
  }
</style>
