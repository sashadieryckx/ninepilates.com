<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/SiteFooter.vue'

import { RouterView } from 'vue-router'

import { watch, nextTick, onMounted, onUnmounted } from 'vue'

// Gsap
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Lenis
import { VueLenis, useLenis } from 'lenis/vue'
import { useRoute } from 'vue-router'

// Unhead
import { useHead } from '@unhead/vue'
useHead({
  title: 'Nine Pilates | Home',
  meta: [
    {
      name: 'description',
      content: 'Nine Pilates is a modern pilates studio offering classes and workshops to enhance your fitness journey.',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
  ],
})

let rafCallback = null

const lenis = useLenis(() => {
  // ?
})
function updateLenis() {
  lenis.value?.resize()
}

onMounted(() => {
  lenis.value.on('scroll', ScrollTrigger.update())

  rafCallback = (time) => {
    lenis.value?.raf(time * 1000)
  }

  const resizeObserver = new ResizeObserver(() => {
    updateLenis()
    ScrollTrigger.refresh()
  })

  resizeObserver.observe(document.body)

  window.addEventListener('resize', () => {
    updateLenis()
    ScrollTrigger.refresh()
  })
})
onUnmounted(() => {
  if (lenis.value) {
    lenis.value.off('scroll', ScrollTrigger.update())
  }
  if (rafCallback) {
    gsap.ticker.remove(rafCallback)
  }
})

// Handle route changes for smooth scrolling
const route = useRoute()
watch(
  () => route.path,
  async () => {
    await nextTick()

    if (lenis.value) {
      lenis.value.scrollTo(0, { immediate: false })
    }

    if (lenis.value) {
      lenis.value.resize()
      ScrollTrigger.refresh(true)
    }
  },
)
</script>

<template>
  <VueLenis
    root
    :options="{
      duration: 1.5,
      lerp: 0.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: 1,
      touchMultiplier: 1,
      smoothWheel: true,
      autoResize: true,
      autoRaf: true,
      anchors: false,
      infinite: false,
    }"
  >
    <header>
      <NavBar />
    </header>
    <RouterView v-slot="{ Component }">
      <transition>
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </RouterView>
    <footer>
      <Footer> </Footer>
    </footer>
  </VueLenis>
</template>

<style scoped>
/* TRANSITIONS */
.v-enter-from {
  filter: blur(10px);
  opacity: 0;
}
.v-leave-to {
  filter: blur(10px);
  opacity: 0;
}
.v-enter-active {
  transition: all 1s ease-out;
}
.v-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
/* GLOBAL COMPONENTS */
header {
  position: relative;
}
footer {
  position: relative;
  z-index: 1;
  max-width: 100vw;
}
</style>
