<template>
  <div id="header" class="interactive">
    <router-link to="/" id="logo">
      <Logomark id="logomark" />
    </router-link>
    <div id="mobile-nav">
      <div class="menu">
        <div class="mobile-list">
          <ul>
            <li>
              <RouterLink to="/" class="mobile-link roman">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/about" class="mobile-link roman">About</RouterLink>
            </li>
            <li>
              <RouterLink to="/classes" class="mobile-link roman">Classes</RouterLink>
            </li>
            <li>
              <RouterLink to="/schedule" class="mobile-link roman">Schedule</RouterLink>
            </li>
            <li>
              <a class="mobile-link roman">Contact</a>
            </li>
            <li>
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
            <RouterLink to="/" class="desktop-link">
              Home
              <div class="menu-underline"></div>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="desktop-link">
              About
              <div class="menu-underline"></div>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/schedule" class="desktop-link">
              Schedule
              <div class="menu-underline"></div>
            </RouterLink>
          </li>
          <li>
            <a class="desktop-link">
              Contact
              <div class="menu-underline"></div>
            </a>
          </li>
        </ul>
      </div>
      <div id="menu-btn">
        <p class="light">Menu</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { gsap, Expo } from 'gsap'
import { onMounted } from 'vue'
import Logomark from '@/components/icons/LogomarkMain.vue'
import LangButton from '@/components/LanguageButton.vue'

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

  document.addEventListener('click', function (event) {
    if (event.target.matches('#menu-btn')) {
      dropMenu.reversed(!dropMenu.reversed())
    }
  })
  document.addEventListener('click', function (event) {
    if (event.target.matches('.mobile-link')) {
      dropMenu.reversed(!dropMenu.reversed())
    }
  })
  // GSAP ANIMATION FOR THE MENU HOVER
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
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--coral);
  border-radius: 50px;
  padding: 0.5rem 1rem;
  backdrop-filter: blur(5px);
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
  animation: linkUnHover 1s forwards;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  animation-play-state: running;
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
@keyframes linkHover {
  0% {
    scale: 1;
    margin-left: 0em;
  }
  100% {
    scale: 1.01;
    margin-left: 2em;
  }
}
@keyframes linkUnHover {
  0% {
    scale: 1.01;
    margin-left: 2em;
  }
  100% {
    scale: 1;
    margin-left: 0em;
  }
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
.router-link-exact-active {
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
    padding-left: 4em;
    padding-right: 4em;
  }
  #logomark {
    width: 2em;
    height: 2em;
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
    line-height: 5em;
    margin: 0;
  }
  .mobile-link {
    font-size: 8em;
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
    margin-right: 4em;
  }
  #desktop-menu li {
    margin-left: 3em;
    overflow: hidden;
  }
  #desktop-menu a {
    font-size: 1.25em;
    color: #f8f8f8;
    text-decoration: none;
    letter-spacing: normal;
    mix-blend-mode: difference;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
  .menu-underline {
    width: 0%;
    height: 2px;
    background-color: #f8f8f8;
    will-change: width;
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
