<script setup>
import LearnMore from '@/components/actions/C2ALearnMore.vue'
defineProps({
  classesInfo: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="classes-card">
    <div class="circle">{{ classesInfo.id }}</div>
    <div class="card-content">
      <h3 class="card-title roman">{{ classesInfo.name }}</h3>
      <p class="card-description light">{{ classesInfo.description }}</p>
    </div>
    <router-link to="/classes" class="c2a interactive">
      <LearnMore />
    </router-link>
  </div>
</template>
<style scoped>
.classes-card {
  position: relative;
  z-index: 1;
  background-color: #f3ece932;
  border-radius: 15px;
  padding: 1.5rem;
  margin: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: var(--coral);
  backdrop-filter: blur(5px);
}
.card-content {
  color: var(--mocha);
  padding: 2rem 0em 1em 0em;
}
.circle {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: var(--mocha);
  backdrop-filter: blur(5px);
  color: var(--coral);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}
h3 {
  margin-top: .5rem;
  margin-bottom: 0.5rem;
}
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  h3 {
    font-size: 2rem;
    padding-top: 1rem;
  }
  p {
    margin-top: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.2em;
  }
  .c2a {
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
