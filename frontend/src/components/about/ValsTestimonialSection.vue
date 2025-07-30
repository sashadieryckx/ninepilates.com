<script setup>
import { ref, computed } from 'vue'
import { useAboutValarieStore } from '@/stores/aboutValarieStore'
import TestimonialCards from '@/components/about/ValsTestimonialCards.vue'
import Arrow from '@/components/icons/ArrowIcon.vue'
import gsap from 'gsap'

const aboutValarieStore = useAboutValarieStore()

const currentIndex = ref(0)
const currentTestimonial = computed(
  () => aboutValarieStore.valeriesTestimonials[currentIndex.value],
)
const testimonialRef = ref(null)

function nextTestimonial() {
  if (currentIndex.value < aboutValarieStore.valeriesTestimonials.length - 1) {
    currentIndex.value++
  }
}
function prevTestimonial() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

function beforeEnter(el) {
  gsap.set(el, { visibility: 'hidden' })
  gsap.set(el.children, { opacity: 0, y: 20 })
}

function enter(el, done) {
  const enterTl = gsap.timeline({
    delay: 0.5,
    onComplete: done,
  })
  enterTl.set(el, { visibility: 'visible' })
  enterTl.to(el.children, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out',
  })
}

function leave(el, done) {
  const leaveTl = gsap.timeline({
    onComplete: done,
  })
  leaveTl.to(el.children, {
    opacity: 0,
    y: -20,
    duration: 0.3,
    stagger: 0.05,
    ease: 'power2.in',
  })
}
</script>
<template>
  <div class="testimonials-content">
    <transition :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <TestimonialCards
        :key="currentIndex"
        :testimonial="currentTestimonial"
        ref="testimonialRef"
      />
    </transition>
    <div class="navigation-buttons df-pad interactive">
      <button
        @click="prevTestimonial"
        :disabled="currentIndex === 0"
      >
        <Arrow />
      </button>
      <button
        @click="nextTestimonial"
        :disabled="currentIndex === aboutValarieStore.valeriesTestimonials.length - 1"
      >
        <Arrow />
      </button>
    </div>
  </div>
</template>
<style scoped>
.testimonials-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  max-height: 90vh;
  gap: 2rem;
  padding: 4rem 0rem;
  overflow: hidden;
}
.navigation-buttons {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  bottom: 1rem;
}
.navigation-buttons button {
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 50%;
  background-color: var(--mocha);
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navigation-buttons button:hover {
  background-color: var(--mocha);
}
</style>
