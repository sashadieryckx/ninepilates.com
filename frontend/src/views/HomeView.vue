<script setup>
import HeroSection from '@/components/home/HeroSection.vue'
import StatementSection from '@/components/home/StatementSection.vue'
</script>

<template>
  <div id="main-content" class="main-content">
    <section class="section">
      <HeroSection />
    </section>
    <section class="section">
      <StatementSection />
    </section>
  </div>
</template>
<style scoped>
#main-content {
  position: relative;
  height: 100%;
}
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
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
