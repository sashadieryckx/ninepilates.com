<script setup>
import { onMounted, onUnmounted } from 'vue'
import AboutHero from '@/components/about/AboutHero.vue'
import StorySection from '@/components/about/StorySection.vue'
import { useViewStore } from '@/stores/useViewStore'

const viewStore = useViewStore()

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
    <section class="section" id="about-hero-section">
      <AboutHero />
    </section>
    <section class="section" id="story-section">
      <StorySection />
    </section>
  </div>
</template>

<style scoped>
.main-content {
  height: 100%;
}
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
