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
}
#contact-modal {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem;
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
#description {
  opacity: 0;
  margin-bottom: 2rem;
}
#local {
  opacity: 0;
  margin-bottom: 2rem;
}
#contact-form {
  opacity: 0;
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
.contact-close {
  top: 1rem;
  right: 2rem;
}
}
</style>
