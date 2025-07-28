<script setup>
import BookClass from '@/components/actions/C2ABookClass.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import StatementSection from '@/components/home/StatementSection.vue'
import AccoladesSection from '@/components/home/AccoladesSection.vue'
import ClassesSection from '@/components/home/ClassesSection.vue'
import PhilosophySection from '@/components/home/PhilosophySection.vue'
import TestimonialsSection from '@/components/home/TestimonialsSection.vue'
import MembershipsSection from '@/components/home/MembershipsSection.vue'
import ConnectSection from '@/components/home/ConnectSection.vue'
import ContactSection from '@/components/home/ContactSection.vue'


import { onMounted, onUnmounted } from 'vue'
import { useViewStore } from '@/stores/useViewStore'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

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
  const sections = document.querySelectorAll('section')
  const footer = document.querySelector('#footer-section')

  sections.forEach((section) => observer.observe(section))
  if (footer) observer.observe(footer)

  // Set initial section on page load
  setTimeout(() => {
    const firstSection = document.querySelector('section')
    if (firstSection && !viewStore.activeSection) {
      viewStore.setActiveSection(firstSection.id)
    }
  }, 100)

  // Setup GSAP animation with proper timing
  setTimeout(() => {
    const hero = document.querySelector('#hero-section')
    const statementSection = document.querySelector('#statement-section')

    if (hero && statementSection) {
      gsap.to(hero, {
        scrollTrigger: {
          trigger: statementSection,
          start: 'top 100%',
          end: 'bottom 60%',
          scrub: 1,
        },
        width: '90%',
        borderRadius: '50px',
        ease: 'power1.inOut',
      })
      ScrollTrigger.refresh()
    }
  }, 200)

  onUnmounted(() => {
    sections.forEach((section) => observer.unobserve(section))
    if (footer) observer.unobserve(footer)
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  })
})
</script>
<template>
  <div id="main-content" class="main-content">
    <BookClass class="c2a" />
    <section class="section" id="hero-section">
      <HeroSection />
    </section>
    <section class="section" id="statement-section">
      <StatementSection />
    </section>
    <section class="section" id="accolades-section">
      <AccoladesSection />
    </section>
    <section class="section" id="classes-section">
      <ClassesSection />
    </section>
    <section class="section" id="philosophy-section">
      <PhilosophySection />
    </section>
    <section class="section" id="testimonials-section">
      <TestimonialsSection />
    </section>
    <section class="section" id="memberships-section">
      <MembershipsSection />
    </section>
    <section class="section" id="connect-section">
      <ConnectSection />
    </section>
    <section class="section" id="contact-section">
      <ContactSection />
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
#hero-section {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.c2a {
  position: fixed;
  z-index: 10;
  bottom: 1rem;
  left: 0;
}
.img-container {
  position: relative;
  z-index: 1;
  width: calc(100% - 2rem);
  height: 40em;
  overflow: hidden;
  margin: 4rem 1rem;
  border-radius: 20px;
}
.img {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  background-color: var(--onyx);
}
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  .c2a {
    display: none;
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
