<template>
  <div class="smoothLayer">
    <div class="container">
      <h1>Smooth Scroll</h1>
      <h2>Nux app</h2>
      <a href="https://github.com/ehsan-shv">github</a>
    </div>
  </div>
</template>

<script>
import smoothScroll from '~/mixins/smoothScroll'

export default {
  mixins: [smoothScroll]
}
</script>

<style>
html{
  overflow: hidden;
}
.smoothLayer{
  position: fixed !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.container{
  min-height: 400vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
