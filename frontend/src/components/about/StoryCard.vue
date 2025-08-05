<script setup>
defineProps({
  abouts: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="story-card df-pad">
    <h2 class="roman">{{ abouts.heading }}</h2>
    <h5 class="light">{{ abouts.content }}</h5>
  </div>
</template>
<style scoped>
.story-card {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 90%;
  padding: 1rem 0rem;
  margin: 2rem 0rem;
  background: transparent;
  text-align: left;
}
h2 {
  margin-bottom: 1rem;
  color: var(--mocha);
}
h5 {
  color: var(--mocha);
}
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  .story-card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 650px;
    text-align: left;
    margin: 0;
  }
  h2 {
    font-size: 4rem;
  }
  h5 {
    margin-top: 2rem;
  }
}
/* DESKTOP 2 [GLOBAL] */
@media (min-width: 1440px) {
}
/* DESKTOP 3 [GLOBAL] */
@media (min-width: 1728px) {
}
/* DESKTOP 4 (Standard pc Monitor) */
@media only screen and (min-width: 1920px) {
}
/* DESKTOP 5 (4k Monitor) */
@media only screen and (min-width: 2160px) {
}
</style>
