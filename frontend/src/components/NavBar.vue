<script setup>
import { gsap, Expo } from 'gsap'
import { onMounted } from 'vue'
import Logomark from '@/components/icons/LogomarkMain.vue'
import LangButton from '@/components/LanguageButton.vue'
import NavC2A from '@/components/actions/C2ANav.vue'

import { useViewStore } from '@/stores/useViewStore'
import { computed, watch, inject } from 'vue'
import { useRoute } from 'vue-router'

const viewStore = useViewStore()
const route = useRoute()

const openContactForm = inject('openContactForm')

const desktop = window.innerWidth >= 1280

// Reset active section when not on home page
watch(
  () => route.path,
  (newPath) => {
    if (newPath !== '/') {
      viewStore.setActiveSection(null)
    }
  },
)

const logoColor = computed(() => {
  if (!viewStore.activeSection) {
    return 'logo-dark'
  }

  if (viewStore.activeSection === 'footer-section') {
    return 'logo-dark'
  }

  const darkSections = [
    'statement-section',
    'accolades-section',
    'classes-section',
    'philosophy-section',
    'testimonials-section',
    'memberships-section',
    'connect-section',
    'contact-section',
    'about-content',
  ]

  return darkSections.includes(viewStore.activeSection) ? 'logo-light' : 'logo-dark'
})

const desktopLinkColor = computed(() => {
  if (!viewStore.activeSection) {
    return 'var(--coral)'
  }

  if (viewStore.activeSection === 'footer-section') {
    return 'var(--coral)'
  }

  if (viewStore.activeSection === 'hero-section') {
    return 'var(--coral)'
  }

  const darkSections = [
    'statement-section',
    'accolades-section',
    'classes-section',
    'philosophy-section',
    'testimonials-section',
    'memberships-section',
    'connect-section',
    'contact-section',
    'about-content',
  ]

  return darkSections.includes(viewStore.activeSection) ? 'var(--mocha)' : 'var(--coral)'
})

const menuButtonLineColor = computed(() => {
  // If not on home page or no active section, use coral
  if (!viewStore.activeSection) {
    return 'var(--coral)'
  }

  // Footer should use coral color
  if (viewStore.activeSection === 'footer-section') {
    return 'var(--coral)'
  }

  // Hero section should use coral color
  if (viewStore.activeSection === 'hero-section') {
    return 'var(--coral)'
  }

  // Define other sections with dark backgrounds that need coral lines
  const darkSections = [
    'statement-section',
    'accolades-section',
    'classes-section',
    'philosophy-section',
    'testimonials-section',
    'memberships-section',
    'connect-section',
    'contact-section',
    'about-content',
  ]

  return darkSections.includes(viewStore.activeSection) ? 'var(--mocha)' : 'var(--coral)'
})

onMounted(() => {
  const dropMenu = new gsap.timeline({
    paused: true,
  })
  dropMenu.to(
    '.menu',
    {
      opacity: '100%',
    },
    0,
  )
  dropMenu.to(
    '.menu',
    {
      ease: 'power4.inOut',
      yPercent: 100,
    },
    0.1,
  )
  dropMenu.from('.menu ul li', {
    ease: Expo.easeInOut,
    opacity: 0,
    x: 100,
    delay: -0.5,
    duration: 1,
    stagger: 0.1,
  })
  dropMenu.from(
    '.close-btn',
    {
      ease: 'power4.inOut',
      opacity: 0,
      duration: 0.5,
    },
    0.5,
  )
  dropMenu.totalDuration(2.25)
  dropMenu.reverse(1)
  // MENU BUTTON ANIMATION
  const menuBtn = document.querySelector('#menu-btn')
  const closeBtn = document.querySelector('.close-btn')

  const btnTl = gsap.timeline({
    paused: true,
  })
  btnTl.to(
    '#top-line',
    {
      width: '3rem',
      duration: 0.4,
      ease: 'power2.out',
      transformOrigin: 'center center',
    },
    0,
  )
  btnTl.to(
    '#bottom-line',
    {
      width: '1rem',
      duration: 0.4,
      ease: 'power2.out',
      transformOrigin: 'center center',
    },
    0,
  )
  document.addEventListener('click', function (event) {
    if (event.target.matches('#menu-btn')) {
      dropMenu.reversed(!dropMenu.reversed())
    }
  })
  document.addEventListener('click', function (event) {
    if (event.target === closeBtn || closeBtn.contains(event.target)) {
      dropMenu.reversed(!dropMenu.reversed())
    }
  })
  document.addEventListener('click', function (event) {
    if (event.target.matches('.mobile-link')) {
      dropMenu.reversed(!dropMenu.reversed())
    }
  })
  menuBtn.addEventListener('mouseenter', () => {
    if (dropMenu.reversed()) {
      btnTl.play()
    }
  })
  menuBtn.addEventListener('mouseleave', () => {
    if (dropMenu.reversed()) {
      btnTl.reverse()
    }
  })

  // GSAP ANIMATION FOR THE NAV ITEMS HOVER
  const underLineWrapper = document.querySelectorAll('#desktop-menu li')
  underLineWrapper.forEach((el) => {
    const thisUnderline = el.querySelector('.menu-underline')

    if (thisUnderline) {
      const mouseEnter = () => {
        gsap.to(thisUnderline, {
          width: '100%',
          duration: 0.5,
          ease: 'power4.out',
        })
      }
      const mouseLeave = () => {
        gsap.to(thisUnderline, {
          width: '100%',
          duration: 0.5,
          x: '110%',
          ease: 'power4.out',
          onComplete: () => {
            gsap.set(thisUnderline, {
              x: '0%',
              width: '0%',
            })
          },
        })
      }
      el.addEventListener('mouseenter', mouseEnter)
      el.addEventListener('mouseleave', mouseLeave)
    }
  })
})
</script>
<template>
  <div class="menu">
    <div class="mobile-list interactive">
      <ul>
        <li style="z-index: 6">
          <RouterLink to="/" class="mobile-link roman">Home</RouterLink>
        </li>
        <li style="z-index: 5">
          <RouterLink to="/about" class="mobile-link roman">About</RouterLink>
        </li>
        <li style="z-index: 4">
          <RouterLink to="/classes" class="mobile-link roman">Classes</RouterLink>
        </li>
        <li>
          <RouterLink to="/schedule" class="mobile-link roman">Schedule</RouterLink>
        </li>
        <li>
          <RouterLink to="/packages-and-pricing" class="mobile-link roman"
            >Packages & Pricing</RouterLink
          >
        </li>
        <li style="z-index: 3">
          <a class="mobile-link roman" @click="openContactForm">Contact</a>
        </li>
        <li style="z-index: 2">
          <RouterLink to="/faq" class="mobile-link roman">FAQ</RouterLink>
        </li>
      </ul>
      <div class="close-btn">
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
    <LangButton class="lang-btn" />
  </div>
  <div id="header" class="interactive">
    <router-link to="/" id="logo">
      <Logomark id="logomark" :color="logoColor" />
    </router-link>
    <div id="mobile-nav"></div>
    <div id="nav">
      <div id="desktop-menu">
        <ul>
          <li>
            <RouterLink to="/" class="desktop-link" :style="{ color: desktopLinkColor }">
              Home
              <div class="menu-underline" :style="{ backgroundColor: desktopLinkColor }"></div>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="desktop-link" :style="{ color: desktopLinkColor }">
              About
              <div class="menu-underline" :style="{ backgroundColor: desktopLinkColor }"></div>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/classes" class="desktop-link" :style="{ color: desktopLinkColor }">
              Classes
              <div class="menu-underline" :style="{ backgroundColor: desktopLinkColor }"></div>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/schedule" class="desktop-link" :style="{ color: desktopLinkColor }">
              Schedule
              <div class="menu-underline" :style="{ backgroundColor: desktopLinkColor }"></div>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/packages-and-pricing"
              class="desktop-link"
              :style="{ color: desktopLinkColor }"
            >
              Packages & Pricing
              <div class="menu-underline" :style="{ backgroundColor: desktopLinkColor }"></div>
            </RouterLink>
          </li>
          <li>
            <a class="desktop-link" :style="{ color: desktopLinkColor }" @click="openContactForm">
              Contact
              <div class="menu-underline" :style="{ backgroundColor: desktopLinkColor }"></div>
            </a>
          </li>
          <li>
            <NavC2A v-if="desktop" />
          </li>
        </ul>
      </div>
      <div id="menu-btn" class="interactive">
        <div id="top-line" class="line" :style="{ backgroundColor: menuButtonLineColor }"></div>
        <div id="bottom-line" class="line" :style="{ backgroundColor: menuButtonLineColor }"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* NAVBAR STYLES */
#header {
  z-index: 100;
  position: fixed;
  width: 100vw;
  max-width: 100vw;
  height: 9vh;
  will-change: transform;
  overflow: visible;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  font-family: sans-serif;
  backdrop-filter: blur(10px);
  border-radius: 15px;
  background-color: #f3ece925;
}
#mobile-nav {
  z-index: 100;
  position: fixed;
  left: 0;
  max-width: 100vw;
  height: 10vh;
  overflow: visible;
}
#menu-btn {
  position: relative;
  z-index: 101;
  width: 3rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
  cursor: pointer;
  transition: transform 0.2s ease;
}
#menu-btn:active {
  transform: scale(0.95);
}
.line {
  height: 2px;
  border-radius: 1px;
  transition: all 0.3s ease;
  will-change: width, transform, background-color;
}
#top-line {
  width: 1rem;
  transform-origin: center center;
}
#bottom-line {
  width: 3rem;
  transform-origin: center center;
}
.menu {
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--onyx);
  opacity: 0%;
  transform: translateY(-100%);
}
/* mobile menu links ------------------------------*/
.mobile-list {
  position: relative;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  padding-top: 2em;
  padding-left: 1em;
}
.mobile-list ul {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 0rem;
}
.mobile-list ul li {
  list-style: none;
  line-height: 3.5em;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  margin-top: 0.25em;
}
.mobile-link {
  font-size: 3rem;
  color: var(--onyx);
  text-shadow:
    1px 1px 0px var(--coral),
    -1px -1px 0px var(--coral),
    -1px 1px 0px var(--coral),
    1px -1px 0px var(--coral);
  text-decoration: none;
  cursor: pointer;
}
.mobile-list li {
  cursor: pointer;
}
#desktop-menu {
  position: relative;
  display: none;
}
.lang-btn {
  position: relative;
  z-index: 100;
}
.close-btn {
  position: fixed;
  z-index: 102;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid var(--coral);
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  transition: all 0.3s ease;
}
.close-btn:hover {
  background-color: var(--soya);
  transform: scale(0.98);
}
.close-btn .line {
  position: absolute;
  width: 1.5rem;
  height: 2px;
  border-radius: 15px;
  background-color: var(--coral);
  margin: 0.25rem;
  transition: all 0.3s ease;
}
.close-btn :nth-child(1) {
  transform: rotate(45deg);
}
.close-btn :nth-child(2) {
  transform: rotate(-45deg);
}
/* Router Link active Styles */
.mobile-list .router-link-exact-active {
  color: var(--coral) !important;
  text-shadow: none !important;
}
a {
  display: flex;
  align-items: center;
  justify-content: center;
}
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL]*/
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  #header {
    height: 7vh;
    padding-left: 3rem;
    padding-right: 3rem;
    margin: 1rem 1rem;
    width: 100%;
    max-width: 98vw;
  }
  #logomark {
    transform: translate(-10px, 0);
  }
  .mobile-list {
    align-items: start;
    justify-content: start;
    padding: 5em 0 0 5em;
  }
  .mobile-list ul li {
    line-height: 6.5em;
    margin: 0;
    cursor: pointer;
  }
  .mobile-link {
    font-size: 6rem;
  }
  #nav {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  #desktop-menu {
    display: contents;
  }
  #desktop-menu ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 0;
    margin-right: 4rem;
  }
  #desktop-menu li {
    margin-left: 3em;
    height: fit-content;
    overflow: hidden;
  }
  #desktop-menu a {
    font-size: 1rem;
    text-decoration: none;
    letter-spacing: normal;
    mix-blend-mode: difference;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  .menu-underline {
    width: 0%;
    height: 2px;
    will-change: width;
    transform: translateY(-4px);
  }
  #menu-btn {
    height: 2rem;
  }

  #top-line {
    width: 1.5rem;
    transform-origin: right center;
  }
  #bottom-line {
    width: 3rem;
    transform-origin: right center;
  }
  .close-btn {
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
  }
  .close-btn .line {
    width: 2.5rem;
    height: 3px;
  }
}
/* DESKTOP 2 (Macbook pro 13 inch display) */
@media screen and (min-width: 1280px) {
  #header {
    height: 7.5vh;
  }
  #desktop-menu ul li {
    font-size: 1rem;
  }
}
/* DESKTOP 3 (15 inch display) [GLOBAL] */
@media screen and (min-width: 1440px) {
  #desktop-menu a {
    font-size: 1.25rem;
  }
}
/* DESKTOP 4 (Standard Pc Monitor) [GLOBAL] */
@media (min-width: 1920px) {
}
/* DESKTOP 5 (4k Monitor) [GLOBAL] */
@media only screen and (min-width: 2160px) {
  .mobile-list ul li {
    margin-bottom: 0em;
    font-size: 1.5em;
  }
}
</style>
