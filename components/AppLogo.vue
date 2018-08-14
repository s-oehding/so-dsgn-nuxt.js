<template>
  <div class="logo">
   <img src="~/static/space-cube.svg"/>
  </div>
</template>

<style>

  .logo {
    font-size: 24px;
    font-family: "Fira Sans ExtraBold";
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
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
