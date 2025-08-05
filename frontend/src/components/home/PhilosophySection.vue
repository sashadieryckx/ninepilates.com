<script setup>
import { ref } from 'vue'
import PhilosophyCard from '@/components/home/PhilosophyCard.vue'
import Arrow from '@/components/icons/ArrowIcon.vue'
import { usePrinciplesStore } from '@/stores/philosophyStore'

const principlesStore = usePrinciplesStore()

const scrollContainer = ref(null)

function scrollLeft() {
  const cardWidth = scrollContainer.value?.querySelector('.philosophy-card')?.offsetWidth || 0
  const gap = 32 // 2rem gap
  scrollContainer.value?.scrollBy({
    left: -(cardWidth + gap),
    behavior: 'smooth',
  })
}

function scrollRight() {
  const cardWidth = scrollContainer.value?.querySelector('.philosophy-card')?.offsetWidth || 0
  const gap = 32 // 2rem gap
  scrollContainer.value?.scrollBy({
    left: cardWidth + gap,
    behavior: 'smooth',
  })
}
</script>
<template>
  <div class="philosophy-section-content">
    <div class="philosophy-heading df-pad">
      <h2 class="roman">Discover the <span class="light-italic">"Nine"</span> Philosophy</h2>
      <h5 class="light">
        Built on the belief that true wellness comes from within. Through our nine principals, we
        help you build a stronger, more connected version of yourself — inside and out.
      </h5>
    </div>
    <div class="philosophy-track interactive" ref="scrollContainer">
      <div class="track-wrapper df-mar">
        <PhilosophyCard
          v-for="principals in principlesStore.principles"
          :key="principals.id"
          :principals="principals"
          class="philosophy-card"
        />
      </div>
    </div>
    <div class="buttons interactive">
      <button class="scroll-btn left" @click="scrollLeft">
        <Arrow fill="var(--mocha)" class="arrow" id="left-arrow" />
      </button>
      <button class="scroll-btn right" @click="scrollRight">
        <Arrow fill="var(--mocha)" class="arrow" id="right-arrow" />
      </button>
    </div>
  </div>
</template>
<style scoped>
.philosophy-section-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.philosophy-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 4rem;
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
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.philosophy-track::-webkit-scrollbar {
  display: none;
}
.track-wrapper {
  display: flex;
  gap: 2rem;
}
.philosophy-card {
  flex: 0 0 80%;
}
.buttons {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
  padding-right: 2rem;
}
.scroll-btn {
  background: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--onyx);
}
#left-arrow {
  transform: rotate(180deg);
}
.arrow {
  width: 1rem;
  height: 1rem;
}
.scroll-btn:hover {
  background: rgba(0, 0, 0, 0.2);
}
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  h2 {
    width: 65%;
  }
  h5 {
    width: 65%;
  }
  .track-wrapper {
    display: flex;
    gap: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    min-width: max-content;
  }
  .philosophy-card {
    flex: 0 0 30%;
    max-width: 300px;
    min-width: 250px;
  }
  .philosophy-heading {
    margin-bottom: 8rem;
  }
  .buttons {
    justify-content: center;
    padding: 0;
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
