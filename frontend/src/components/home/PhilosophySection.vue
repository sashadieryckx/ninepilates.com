<script setup>
import PhilosophyCard from '@/components/home/PhilosophyCard.vue'
import { usePrinciplesStore } from '@/stores/philosophyStore'
const principlesStore = usePrinciplesStore()
</script>
<template>
  <div id="philosophy-section">
    <div class="philosophy-heading df-pad">
      <h2 class="roman">Discover the <span class="light-italic">"Nine"</span> Philosophy</h2>
      <h5 class="light">Built on the belief that true wellness comes from within. Through our nine principals, we help you build a stronger, more connected version of yourself — inside and out.</h5>
    </div>
    <div class="philosophy-track">
      <div class="track-wrapper df-mar">
        <PhilosophyCard v-for="principals in principlesStore.principles" :key="principals.id" :principals="principals" />
      </div>
    </div>
  </div>
</template>
<style scoped>
#philosophy-section {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 4rem;
}
.philosophy-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
h2 {
  text-align: center;
}
h5 {
  text-align: center;
  margin-top: 2rem;
}
.philosophy-track {
  position: relative;
  width: 100vw;
  padding-top: 4rem;
  overflow: scroll;
}
.track-wrapper {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 2rem;
}
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  .philosophy-heading {
    width: 75%;
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
