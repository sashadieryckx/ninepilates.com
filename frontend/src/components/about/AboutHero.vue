<script setup>
import Insta from '@/components/icons/InstaIcon.vue'
import Tiktok from '@/components/icons/TiktokIcon.vue'
import Facebook from '@/components/icons/FacebookIcon.vue'
</script>
<template>
  <div class="about-hero-content">
    <div class="heading df-mar">
      <h1 class="roman">Hello, I'm</h1>
      <h1 class="italic">Valérie.</h1>
      <h2 class="light">The founder of <span class="light-italic">Nine Pilates</span></h2>
    </div>
    <div class="socials">
      <a href="https://www.instagram.com/valerie.ninepilates/">
        <Insta />
      </a>
      <a href="https://www.tiktok.com/@valerie.ninepilates">
        <Tiktok />
      </a>
      <a href="https://www.facebook.com/valerie.ninepilates">
        <Facebook />
      </a>
    </div>
    <div class="bg-img">
      <div class="overlay"></div>
      <img src="@/assets/content/val.jpg" alt="Valerie" class="img">
    </div>
  </div>
</template>
<style scoped>
.about-hero-content {
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
}
.heading {
  position: relative;
  z-index: 2;
  color: var(--coral);
  margin-top: 22rem;
}
.heading :nth-child(2) {
  font-size: 4rem;
  text-indent: 3rem;
}
h2 {
  text-align: center;
}
.bg-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: #1615134b;
}
.img {
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}
.socials {
  display: none;
}
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  h1 {
    font-size: 8rem;
  }
  h2 {
    text-align: left;
    margin-top: 1rem;
  }
  .heading :nth-child(2) {
    font-size: 10rem;
    text-indent: 4rem;
  }
  .overlay {
    background: #16151380;
  }
  .socials {
    position: absolute;
    top: 45%;
    right: 2rem;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
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
