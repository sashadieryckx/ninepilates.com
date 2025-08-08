<script setup>
import { useI18n } from 'vue-i18n'
import { useContactStore } from '@/stores/ContactFormStore.js'
import { useParallax } from '@/composables/useParallax.js'

const { t } = useI18n()
const contactStore = useContactStore()
useParallax()
</script>
<template>
  <div id="contact-us-content">
    <div class="contact-heading df-pad">
      <h3 class="roman">{{ t("home.contact.cta") }}</h3>
    </div>
    <div class="img-container">
      <img src="@/assets/content/contact-us.jpg" alt="Contact Us Image" class="img parallax" />
      <button class="c2a interactive" @click="contactStore.openContactForm">
        <span class="roman">{{ t("callToActions.getInTouch") }}</span>
      </button>
    </div>
  </div>
</template>
<style scoped>
#contact-us-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.contact-heading {
  position: relative;
  z-index: 1;
}
h3 {
  text-align: center;
}
.img-container {
  position: relative;
  margin-top: 4rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-left: 1rem;
  padding-right: 1rem;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: visible;
}
.c2a {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(199, 183, 166, 0.404);
  backdrop-filter: blur(5px);
  border: 1px solid var(--mocha);
  border-radius: 50px;
  padding: 0.5rem 2rem;
}
span {
  font-size: 1.5rem;
  transform: translateY(-4px);
  text-wrap: nowrap;
  color: var(--mocha);
}
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  #contact-us-content {
    max-height: 100vh;
  }
  .contact-heading {
    padding-top: 14rem;
  }
  h3 {
    font-size: 6rem;
  }
  .img-container {
    position: absolute;
    z-index: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    padding: 0;
  }
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }
  .c2a {
    padding: 0.75rem 2.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    transform-origin: left center;
    border: 2px solid var(--mocha);
    border-radius: 75px;
  }
  .c2a:hover {
    background-color: rgba(199, 183, 166, 0.6);
    scale: 1.02;
  }
  span {
    font-size: 2.5rem;
    transform: translateY(-8px);
  }
}
</style>
