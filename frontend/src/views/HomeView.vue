<script setup>
import BookClass from '@/components/actions/C2ABookClass.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import StatementSection from '@/components/home/StatementSection.vue'
import ClassesSection from '@/components/home/ClassesSection.vue'
</script>

<template>
  <div id="main-content" class="main-content">
    <BookClass class="c2a" />
    <section class="section">
      <HeroSection />
    </section>
    <section class="section">
      <StatementSection />
    </section>
    <section class="section">
      <ClassesSection />
    </section>
  </div>
</template>
<style scoped>
#main-content {
  position: relative;
  z-index: 1;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
}
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.c2a {
  position: fixed;
  z-index: 10;
  bottom: 1rem;
  left: 0;
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
