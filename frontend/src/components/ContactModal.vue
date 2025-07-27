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
  <div id="contact-modal">
    <div id="contact-form-header">
      <button class="contact-close" @click="closeModal">×</button>
      <h1>Contact Us</h1>
    </div>

    <div id="contact-spline">
      <!-- Add your spline/background animation here -->
    </div>

    <div id="description">
      <p>Get in touch with us to start your pilates journey.</p>
    </div>

    <div id="local">
      <!-- Local info content -->
    </div>

    <div id="contact-form">
      <!-- Your contact form will go here -->
      <h2>Contact Form</h2>
      <p>Form fields will be added here...</p>
    </div>
  </div>
</template>

<style scoped>
#contact-modal {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--mocha);
  border-radius: 25px;
  padding: 2rem;
  overflow-y: auto;
}
#contact-form-header {
  opacity: 0;
  transform: translateY(20px);
  margin-bottom: 2rem;
}
.contact-close {
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  z-index: 10;
}
.contact-close:hover {
  opacity: 0.7 !important;
}
#contact-spline {
  opacity: 0;
  /* Add your spline styling here */
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
</style>
