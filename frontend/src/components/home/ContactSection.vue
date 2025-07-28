<script setup>
import { useContactStore } from '@/stores/ContactFormStore.js'
const contactStore = useContactStore()
</script>
<template>
  <div id="contact-us-content">
    <div class="contact-heading df-pad">
      <h3 class="roman">Have a question?</h3>
      <h3 class="light-italic">Shoot us a message!</h3>
    </div>
    <div class="img-container df-pad">
      <img src="@/assets/content/contact-us.jpg" alt="Contact Us Image" class="img">
      <button class="c2a" @click="contactStore.openContactForm">
        <span class="roman">Let's get in touch</span>
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
  min-height: 100vh;
  padding-top: 4rem;
  padding-bottom: 4rem;
}
h3 {
  text-align: center;
}
h5 {
  text-align: center;
  margin-top: 2rem;
}
.img-container {
  position: relative;
  margin-top: 4rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  padding: .5rem 2rem;
}
span {
  font-size: 1.5rem;
  transform: translateY(-4px);
  text-wrap: nowrap;
  color: var(--mocha);
}
</style>
