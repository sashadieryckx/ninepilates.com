<script setup>
import { useAboutValarieStore } from '@/stores/aboutValarieStore'
import StoryCard from '@/components/about/StoryCard.vue'

import { onMounted } from 'vue'

const aboutValarieStore = useAboutValarieStore()


// Debug logging to help verify data is loaded
onMounted(() => {
  console.log('Story cards data:', aboutValarieStore.aboutValarieInfo)
  console.log('Number of story cards:', aboutValarieStore.aboutValarieInfo.length)
})
</script>
<template>
  <div id="story-section-content" class="interactive">
    <div class="story-cards df-mar">
      <StoryCard
        v-for="abouts in aboutValarieStore.aboutValarieInfo"
        :key="abouts.id"
        :abouts="abouts"
      />
    </div>
    <div class="img-container">
      <img src="" alt="" class="img" />
      <h2>Placeholder</h2>
    </div>
  </div>
</template>
<style scoped>
#story-section-content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.story-cards {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100vw;
  padding: 2rem 0;
  z-index: 10;
}
.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40em;
  background-color: var(--soya);
  border-radius: 25px;
  color: var(--coral);
}
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  .story-cards {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50vh; /* Even larger gap for desktop */
    margin: 30vh 0;
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
