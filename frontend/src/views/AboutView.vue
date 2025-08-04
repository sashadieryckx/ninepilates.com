<script setup>
import { onMounted, onUnmounted } from 'vue'
import AboutHero from '@/components/about/AboutHero.vue'
import StorySection from '@/components/about/StorySection.vue'
import ValsTestimonialSection from '@/components/about/ValsTestimonialSection.vue'
import JoinMeSection from '@/components/about/JoinMeSection.vue'
import { useViewStore } from '@/stores/useViewStore'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const viewStore = useViewStore()

const desktop = window.innerWidth >= 1280

onMounted(() => {
  const observerOptions = {
    root: null,
    rootMargin: '-0% 0px -0% 0px',
    threshold: 0.6,
  }

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        viewStore.setActiveSection(entry.target.id)
      }
    })
  }

  const observer = new IntersectionObserver(callback, observerOptions)
  const aboutContent = document.querySelector('#about-content')
  const footer = document.querySelector('#footer-section')

  if (aboutContent) {
    observer.observe(aboutContent)
  }
  if (footer) observer.observe(footer)

  // Set initial section on page load
  setTimeout(() => {
    if (aboutContent && !viewStore.activeSection) {
      viewStore.setActiveSection('about-content')
    }
  }, 100)

  onUnmounted(() => {
    if (aboutContent) {
      observer.unobserve(aboutContent)
    }
    // Clean up ScrollTrigger instances
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  })
})

// Unhead SEO
import { useHead } from '@unhead/vue'
useHead({
  title: 'Nine Pilates | About',
  meta: [
    {
      name: 'description',
      content:
        'Meet Valerie, the founder of Nine Pilates, and learn about her journey and vision for the studio.',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
  ],
})
</script>

<template>
  <div id="about-content" class="main-content">
    <spline-viewer
      v-if="desktop"
      id="story-spline"
      url="https://prod.spline.design/Q7G8F76kI4CUqhAr/scene.splinecode"
      loading="eager">
    </spline-viewer>
    <section class="section" id="about-hero-section">
      <AboutHero />
    </section>
    <section class="section" id="story-section">
      <StorySection />
    </section>
    <section class="section" id="testimonials-section">
      <ValsTestimonialSection />
    </section>
    <section class="section" id="join-me-section">
      <JoinMeSection />
    </section>
  </div>
</template>

<style scoped>
.main-content {
  height: 100%;
}
.section {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
#story-section {
  position: relative;
}
#story-spline {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
}
#testimonials-section,
#join-me-section {
  background-color: var(--coral);
}

/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  #story-spline {
    display: block;
  }
}
</style>
