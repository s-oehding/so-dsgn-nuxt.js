<template>
  <div class="logo">
   <h1 class="title" :style="'color: ' + color">{{ text }} <span class="cursor">|</span></h1>
  </div>
</template>

<script>

  export default {
    props: ['text', 'color', ]
  }
</script>

<style>

  .logo {
    font-size: 24px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cursor {
    animation: blink 1s infinite step-end;
  }

  @keyframes blink {
    from, to {
      color: transparent;
    }
    50% {
      color: inherit;
    }
  }

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}
</style>
