<script setup>
defineProps({
  classesInfo: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="classes-card">
    <div class="card-content">
      <h3 class="card-title">{{ classesInfo.name }}</h3>
      <p class="card-description">{{ classesInfo.description }}</p>
    </div>
  </div>
</template>
<style scoped>
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
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
