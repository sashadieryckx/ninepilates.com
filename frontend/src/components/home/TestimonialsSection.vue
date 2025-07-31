<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import Testimonials from './TestimonialsCard.vue'
import { useTestimonialsStore } from '@/stores/testimonialsStore'
import gsap from 'gsap'
const testimonialsStore = useTestimonialsStore()
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const scrollTriggerInstance = ref(null)

onMounted(() => {
  const testimonialCards = document.querySelectorAll('.card')
  const testimonialsSection = document.getElementById('testimonials-section-content')

  if (screen.width >= 1280 && testimonialCards.length > 0 && testimonialsSection) {
    scrollTriggerInstance.value = gsap.fromTo(
      testimonialCards,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: testimonialsSection,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      },
    )
  }
})
onUnmounted(() => {
  if (scrollTriggerInstance.value) {
    scrollTriggerInstance.value.scrollTrigger?.kill()
    scrollTriggerInstance.value.kill()
    scrollTriggerInstance.value = null
  }

  const trigger = ScrollTrigger.getById('memberships-section-animation')
  if (trigger) {
    trigger.kill()
  }

  gsap.killTweensOf('.card')
})
</script>
<template>
  <div id="testimonials-section-content">
    <div class="testimonials-heading df-pad">
      <h2 class="roman">Movement that leaves a <span class="light-italic">impact</span></h2>
      <h5 class="light">
        Every journey begins with a single breath — these are the stories of progress, presence, and
        the quiet strength built through consistent practice.
      </h5>
    </div>
    <div class="testimonials df-mar">
      <Testimonials
        v-for="testimonial in testimonialsStore.testimonials"
        :key="testimonial.id"
        :testimonials="testimonial"
        class="card"
      />
    </div>
  </div>
</template>
<style scoped>
#testimonials-section-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.testimonials-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.testimonials {
  margin-top: 4rem;
}
h2 {
  text-align: center;
}
h5 {
  text-align: center;
  margin-top: 2rem;
}
.card {
  margin-bottom: 1rem;
}
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  .testimonials {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }
  h5 {
    width: 50%;
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
