<script setup>
import Insta from '@/components/icons/InstaIcon.vue'
import Tiktok from '@/components/icons/TiktokIcon.vue'
import Facebook from '@/components/icons/FacebookIcon.vue'
import Youtube from '@/components/icons/YoutubeIcon.vue'
</script>
<template>
  <div id="connect-section-content" class="interactive">
    <div class="overlay"></div>
    <div class="connect-heading df-pad">
      <h2 class="roman">Connect & share with us on <span class="light-italic">socials</span></h2>
      <h5 class="light">Join our mindful movement online—follow, tag, and share your journey with us.</h5>
    </div>
    <div class="mobile-images df-mar">
      <div class="img-container">
        <img src="@/assets/content/storyPost.jpg" alt="Instagram Story Post" class="img" />
        <div class="color-box"></div>
        <div class="color-box-2"></div>
      </div>
      <div class="img-container">
      </div>
    </div>
    <div class="socials df-mar interactive">
      <a href="https://www.instagram.com/ninepilates.studio/">
        <Insta />
      </a>
      <a href="https://www.tiktok.com/@ninepilates">
        <Tiktok />
      </a>
      <a href="https://www.facebook.com/ninepilatesstudio">
        <Facebook />
      </a>
      <a href="https://www.youtube.com/@ninepilates">
        <Youtube />
      </a>
    </div>
    <div class="desktop-img" id="img-1">
      <div class="img"></div>
    </div>
    <div class="desktop-img" id="img-2">
      <div class="img"></div>
    </div>
    <div class="desktop-img" id="img-3">
      <div class="img"></div>
    </div>
    <div class="desktop-img" id="img-4">
      <div class="img"></div>
    </div>
    <div class="desktop-img" id="img-5">
      <div class="img"></div>
    </div>
    <div class="desktop-img" id="img-6">
      <div class="img"></div>
    </div>
    <div class="desktop-img" id="img-7">
      <div class="img"></div>
    </div>
  </div>
</template>
<style scoped>
#connect-section-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 4rem;
  padding-bottom: 4rem;
}
h2 {
  text-align: center;
}
h5 {
  display: none;
  text-align: center;
  margin-top: 2rem;
}
.mobile-images {
  margin-top: 4rem;
}
.socials {
  margin-top: 4rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
.img-container {
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img {
  width: 90%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  z-index: 1;
}
.color-box {
  position: absolute;
  top: 0;
  z-index: 0;
  width: 98%;
  height: 100%;
  background-color: var(--mocha);
  border-radius: 20px;
  transform: rotate(-4deg) translateX(2px) translateY(-12px);
}
.color-box-2 {
  position: absolute;
  top: 0;
  z-index: 0;
  width: 98%;
  height: 100%;
  background-color: var(--soya);
  border-radius: 20px;
  transform: rotate(4deg) translateX(4px) translateY(14px);
}
a {
  cursor: pointer;
}
.desktop-img {
  display: none;
}
.overlay {
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
  #connect-section-content {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;
    overflow: hidden;
    min-height: 100vh;
    margin-left: 4rem;
    margin-right: 4rem;
  }
  .mobile-images {
    display: none;
  }
  .connect-heading {
    grid-column: 2 / span 3;
    grid-row: 2;
  }
  h2 {
    width: 100%;
  }
  h5 {
    display: flex;
  }
  .socials {
    margin: 0!important;
    padding: 0;
    grid-column: 2 / span 3;
    grid-row: 3;
    display: flex;
    align-items: flex-start;
    height: 100%;
  }
  .desktop-img {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .img {
    height: 20em;
    width: 100%;
    background-color: var(--mocha);
    opacity: .5;
    border-radius: 25px;
  }
  #img-1,
  #img-2,
  #img-3,
  #img-4,
  #img-5 {
    grid-row: 1;
  }
  #img-6,
  #img-7 {
    grid-row: 2;
  }
  #img-6 {
    grid-column: 1;
  }
  #img-7 {
    grid-column: 5;
  }
  #img-2,
  #img-4 {
    transform: translateY(-20%);
  }
  .overlay {
    display: block;
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg,rgba(255, 255, 255, 0) 75%, rgba(199, 183, 166, 1) 100%);
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
