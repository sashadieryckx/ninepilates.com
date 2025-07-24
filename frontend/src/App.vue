<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/SiteFooter.vue'
import LogoMark from './components/icons/LogoMark.vue'
import CircleLoader from './components/icons/CircleLoader.vue'

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

  const loaderTimeline = gsap.timeline({
    ease: 'power2.inOut',
    delay: 0.5,
    onComplete: () => {
      document.getElementById('loader').style.display = 'none'
    },
  })
  loaderTimeline.from(
    '#logomark-wrapper',
    {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: 'power2.inOut',
    },
    0,
  )
  loaderTimeline.to(
    '#logomark-wrapper',
    {
      opacity: 0,
      scale: 1.2,
      duration: 0.5,
      filter: 'blur(10px)',
      ease: 'power2.inOut',
    },
    1,
  )
  loaderTimeline.to(
    '#loader',
    {
      duration: 1,
      y: '-100%',
      ease: 'power2.inOut',
    },
    1.5,
  )
  loaderTimeline.to(
    '#loader-layers div',
    {
      duration: 1,
      stagger: 0.1,
      y: '-100%',
      ease: 'power2.inOut',
    },
    1.5,
  )
  loaderTimeline.from(
    '#logo',
    {
      duration: 0.5,
      opacity: 0,
      y: '15%',
      ease: 'power1.inOut',
    },
    2.5,
  )
  loaderTimeline.from(
    '#desktop-menu ul li',
    {
      duration: 0.5,
      opacity: 0,
      stagger: 0.1,
      y: '15%',
      ease: 'power1.inOut',
    },
    2.75,
  )
  loaderTimeline.from(
    '#menu-btn',
    {
      duration: 0.5,
      opacity: 0,
      stagger: 0.1,
      ease: 'power1.inOut',
    },
    3.25,
  )
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
    <div id="loader">
      <div id="logomark-wrapper">
        <CircleLoader id="circle"/>
        <LogoMark id="loader-logo" />
      </div>
    </div>
    <div id="loader-layers">
      <div id="coral"></div>
      <div id="soya"></div>
      <div id="dawn"></div>
      <div id="onyx"></div>
    </div>
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
/* LOADER */
#loader {
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--mocha);
}
#loader,
#coral,
#soya,
#dawn,
#onyx {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
#coral {
  background-color: var(--coral);
  z-index: 9998;
}
#soya {
  background-color: var(--soya);
  z-index: 9997;
}
#dawn {
  background-color: var(--dawn);
  z-index: 9996;
}
#onyx {
  background-color: var(--onyx);
  z-index: 9995;
}
#logomark-wrapper {
  width: 12em;
  height: auto;
}
#circle {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -52%);
  height: 14em;
  width: 14em;
}
</style>
