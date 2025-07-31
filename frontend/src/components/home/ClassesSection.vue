<script setup>
import ClassesCard from '@/components/classes/ClassesCard.vue'
import { useClassesStore } from '@/stores/classesStore'
const classesStore = useClassesStore()
</script>
<template>
  <div id="classes-section">
    <div id="classes-heading" class="df-pad">
      <h2 class="roman">Pilates for every body and every mind</h2>
      <h5 class="light">
        Join us in transforming your body and mind through our comprehensive group and specialized
        programs.
      </h5>
    </div>
    <div id="classes-cards">
      <ClassesCard
        v-for="classInfo in classesStore.classesInfo"
        :key="classInfo.id"
        :classesInfo="classInfo"
      />
    </div>
  </div>
</template>
<style scoped>
#classes-section {
  position: relative;
  z-index: 1;
  padding: 4rem 0em;
}
#classes-heading {
  margin-bottom: 4rem;
}
h2 {
  text-align: center;
}
h5 {
  text-align: center;
  margin-top: 1rem;
}
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  #classes-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #classes-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 75%;
    padding-top: 4rem;
  }
  #classes-heading {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h5 {
    margin-top: 1rem;
    font-size: 1.25rem;
    width: 60%;
    text-align: center;
  }
}
/* DESKTOP 2 [GLOBAL] */
@media (min-width: 1440px) {
}
/* DESKTOP 3 [GLOBAL] */
@media (min-width: 1728px) {
  h2 {
    font-size: 4rem;
  }
  h5 {
    margin-top: 1rem;
    font-size: 1.5rem;
  }
}
/* DESKTOP 4 (Standard pc Monitor) */
@media only screen and (min-width: 1920px) {
}
/* DESKTOP 5 (4k Monitor) */
@media only screen and (min-width: 2160px) {
}
</style>
