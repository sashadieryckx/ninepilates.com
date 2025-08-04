<script setup>
import Insta from '@/components/icons/InstaIcon.vue'
import Tiktok from '@/components/icons/TiktokIcon.vue'
import Facebook from '@/components/icons/FacebookIcon.vue'
import Youtube from '@/components/icons/YoutubeIcon.vue'
</script>
<template>
  <div id="connect-section-content">
    <div class="connect-heading df-pad">
      <h2 class="roman">Connect & share with us on <span class="light-italic">socials</span></h2>
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
