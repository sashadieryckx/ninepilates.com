<script setup>
import { gsap, Expo } from 'gsap'
import { onMounted } from 'vue'
import Logomark from '@/components/icons/LogomarkMain.vue'
import LangButton from '@/components/LanguageButton.vue'

import { useViewStore } from '@/stores/useViewStore'
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const viewStore = useViewStore()
const route = useRoute()

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
  // If not on home page or no active section, use default dark logo
  if (!viewStore.activeSection) {
    return 'logo-dark'
  }

  // Footer should use coral color (.logo-dark class)
  if (viewStore.activeSection === 'footer-section') {
    return 'logo-dark'
  }

  // Define other sections with dark backgrounds that need light logo
  const darkSections = [
    'statement-section',
    'accolades-section',
    'classes-section',
    'philosophy-section',
  ]

  return darkSections.includes(viewStore.activeSection) ? 'logo-light' : 'logo-dark'
})

const desktopLinkColor = computed(() => {
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

  // Define other sections with dark backgrounds that need coral links
  const darkSections = [
    'statement-section',
    'accolades-section',
    'classes-section',
    'philosophy-section',
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
    '#top-line',
    {
      rotate: 45,
      y: '8px',
      width: '2rem',
      transformOrigin: 'center center',
    },
    0,
  )
  dropMenu.to(
    '#bottom-line',
    {
      rotate: 135,
      width: '2rem',
      y: '-8px',
      transformOrigin: 'center center',
    },
    0,
  )
  dropMenu.to(
    '.menu',
    {
      ease: Expo.easeInOut,
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
  dropMenu.totalDuration(2.25)
  dropMenu.reverse(1)
  // MENU BUTTON ANIMATION
  const menuBtn = document.querySelector('#menu-btn')

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

  const clickTl = gsap.timeline({
    paused: true,
  })
  clickTl.to(
    menuBtn,
    {
      scale: 0.9,
      duration: 0.1,
      ease: 'power2.out',
    },
    0,
  )

  document.addEventListener('click', function (event) {
    if (event.target.matches('#menu-btn')) {
      // Reset hover animation when menu is clicked
      if (!dropMenu.reversed()) {
        btnTl.reverse()
      }
      dropMenu.reversed(!dropMenu.reversed())
    }
  })
  document.addEventListener('click', function (event) {
    if (event.target.matches('.mobile-link')) {
      dropMenu.reversed(!dropMenu.reversed())
      // Reverse the menu button timeline when menu is closed
      if (dropMenu.reversed()) {
        btnTl.reverse()
      }
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

  menuBtn.addEventListener('mousedown', () => {
    clickTl.restart()
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
  <div id="header" class="interactive">
    <router-link to="/" id="logo">
      <Logomark id="logomark" :color="logoColor" />
    </router-link>
    <div id="mobile-nav">
      <div class="menu">
        <div class="mobile-list">
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
            <li style="z-index: 3">
              <a class="mobile-link roman">Contact</a>
            </li>
            <li style="z-index: 2">
              <RouterLink to="/faq" class="mobile-link roman">FAQ</RouterLink>
            </li>
          </ul>
        </div>
        <LangButton class="lang-btn" />
      </div>
    </div>
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
            <a class="desktop-link" :style="{ color: desktopLinkColor }">
              Contact
              <div class="menu-underline" :style="{ backgroundColor: desktopLinkColor }"></div>
            </a>
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
  height: fit-content;
  will-change: transform;
  overflow: visible;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  font-family: sans-serif;
}
#mobile-nav {
  z-index: 100;
  position: fixed;
  left: 0;
  max-width: 100vw;
  height: 10vh;
  overflow: visible;
}
#logo {
  z-index: 99;
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
}
#menu-btn {
  position: relative;
  z-index: 101;
  width: 3rem;
  height: auto;
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
#menu-btn p {
  font-size: 1rem;
  letter-spacing: 0.1em;
  height: 1em;
  pointer-events: none;
  transform: translateY(-42%);
  color: var(--coral);
}
.menu {
  position: fixed;
  z-index: 100;
  top: 0;
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
  line-height: 2em;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  margin-top: 0.25em;
  overflow: hidden;
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
}
/* Link Hover Animation */
.mobile-list li:hover {
  animation: linkHover 1.5s forwards;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  animation-play-state: running;
}
.mobile-list li {
  animation: linkUnHover 1.5s forwards;
  animation-play-state: running;
}
#mobile-socials {
  position: relative;
  z-index: 100;
  width: 100%;
  height: 20%;
  margin-top: -2em;
}
#mobile-socials ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0;
}
#mobile-socials ul li {
  list-style: none;
}
#mobile-socials ul li a {
  font-size: 1.5em;
  color: #f8f8f8;
  text-decoration: none;
  letter-spacing: normal;
  mix-blend-mode: difference;
}
#desktop-menu {
  position: relative;
  display: none;
}
.lang-btn {
  position: relative;
  z-index: 100;
}
/* Router Link active Styles */
.mobile-list .router-link-exact-active {
  color: var(--coral) !important;
  text-shadow: none !important;
}
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
  #logo-txt {
    display: contents;
  }
  #mobile-socials {
    display: none;
  }
}
/* TABLET 2 [GLOBAL]*/
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  #header {
    height: 10vh;
    padding-left: 4rem;
    padding-right: 4rem;
  }
  .mobile-list {
    align-items: start;
    justify-content: start;
    padding: 5em 0 0 5em;
  }
  .mobile-list ul {
    display: unset;
  }
  .mobile-list ul li {
    line-height: 3.5em;
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
    padding-top: 0.5rem;
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
    overflow: hidden;
  }
  #desktop-menu a {
    font-size: 1.25rem;
    /* color now set dynamically via style binding */
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
    /* background-color now set dynamically via style binding */
    will-change: width;
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
}
/* DESKTOP 2 (Macbook pro 13 inch display) */
@media screen and (min-width: 1280px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
  #desktop-menu ul li {
    font-size: 1em;
  }
}
/* DESKTOP 3 (15 inch display) [GLOBAL] */
@media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2) {
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
