<script setup>
import { watch } from 'vue'
import { ContactOpen, ContactClose } from '@/assets/js/globalUtils.js'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

// Watch for prop changes to trigger animations
watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    ContactOpen()
  } else {
    ContactClose()
  }
}, { immediate: true })

const closeModal = () => {
  emit('close')
}
</script>

<template>
  <div id="contact-spline">
  <spline-viewer
    url="https://prod.spline.design/Q7G8F76kI4CUqhAr/scene.splinecode"
    loading="eager">
  </spline-viewer>
  </div>
  <div id="contact-modal">
    <button class="contact-close light" @click="closeModal">
      close
    </button>
    <h2 class="roman">Contact.</h2>
    <h5 class="roman">Have a question? Reach out, we'd love to hear from you.</h5>
    <div class="details">
      <p class="roman">Email</p>
      <p class="light">info@ninepilates.com</p>
      <p class="roman">Phone</p>
      <p class="light">+1 (613) 555-0199</p>
    </div>
  </div>
</template>
<style scoped>
#contact-spline {
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  overflow: hidden;
}
#contact-modal {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.contact-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 1.5rem;
  color: var(--mocha);
  background: none;
  cursor: pointer;
  opacity: 0;
  z-index: 10;
  text-decoration: underline;
}
.contact-close:hover {
  opacity: 0.7 !important;
}
h2 {
  margin-bottom: 1rem;
  opacity: 0;
}
h5 {
  opacity: 0;
}
.details {
  margin-top: 2rem;
}
p {
  font-size: 1.25rem;
  opacity: 0;
}
p.roman {
  margin-top: 1rem;
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
.contact-close {
  top: 1rem;
  right: 2rem;
}
}
</style>
