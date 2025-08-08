<script setup>
import { ref, watch } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  classData: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits(['close'])

const modalRef = ref(null)
const overlayRef = ref(null)
const contentRef = ref(null)

watch(
  () => props.isOpen,
  (newValue) => {
    if (newValue) {
      openModal()
    } else {
      closeModal()
    }
  },
)

const openModal = () => {
  if (!modalRef.value || !overlayRef.value || !contentRef.value) return

  gsap.set(modalRef.value, { display: 'flex' })
  gsap.set(overlayRef.value, { opacity: 0 })
  gsap.set(contentRef.value, { y: 100, opacity: 0 })

  gsap
    .timeline()
    .to(overlayRef.value, { opacity: 1, duration: 0.3 })
    .to(contentRef.value, { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }, '-=0.1')
}

const closeModal = () => {
  if (!modalRef.value || !overlayRef.value || !contentRef.value) return

  gsap
    .timeline()
    .to(contentRef.value, { y: 100, opacity: 0, duration: 0.3, ease: 'power2.in' })
    .to(overlayRef.value, { opacity: 0, duration: 0.3 }, '-=0.1')
    .set(modalRef.value, { display: 'none' })
}

const handleOverlayClick = () => {
  emit('close')
}

const handleCloseClick = () => {
  emit('close')
}
</script>

<template>
  <div
    ref="modalRef"
    class="modal-overlay interactive"
    @click="handleOverlayClick"
    style="display: none"
  >
    <div ref="overlayRef" class="overlay-bg"></div>
    <div ref="contentRef" class="modal-content" @click.stop>
      <button class="close-btn" @click="handleCloseClick" aria-label="Close modal">
        <span class="close-line"></span>
        <span class="close-line"></span>
      </button>
      <div v-if="classData" class="class-image">
        <div class="img-overlay"></div>
        <img :src="classData.image" :alt="classData.title" class="modal-img" />
        <div class="img-title">
          <h2 class="bold">{{ classData.title }}.</h2>
        </div>
      </div>
      <div v-if="classData" class="class-details">
        <div class="class-header">
          <p class="class-subtitle light">{{ classData.subtitle }}</p>
        </div>

        <div class="class-body">
          <div class="class-description">
            <p class="description-text">{{ classData.description }}</p>
          </div>

          <div v-if="classData.notes" class="class-notes">
            <p class="notes-text italic">{{ classData.notes }}</p>
          </div>
        </div>
      </div>
      <div class="class-c2a">
        <p>Placeholder</p>
        <div class="class-actions">
          <button class="book-btn interactive">Book This Class</button>
          <button class="learn-more-btn interactive" @click="handleCloseClick">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.overlay-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #161513e0;
  backdrop-filter: blur(10px);
}
.close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
.modal-content {
  position: relative;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.img-title h2 {
  color: var(--blanco);
  text-transform: uppercase;
  transform: translateY(-20px);
}
.close-line {
  position: absolute;
  width: 1.5rem;
  height: 2px;
  background: var(--mocha);
  transition: all 0.3s ease;
}

.close-line:first-child {
  transform: rotate(45deg);
}

.close-line:last-child {
  transform: rotate(-45deg);
}

.close-btn:hover .close-line {
  background: var(--blanco);
}

.class-details {
  color: var(--mocha);
  background-color: var(--coral);
}

.class-header {
  margin-bottom: 2rem;
  text-align: center;
}

.class-title {
  font-size: 2.5rem;
  color: var(--mocha);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}
.class-subtitle {
  font-size: 1.2rem;
  color: var(--coral);
  margin-bottom: 0;
}
.class-body {
  margin-bottom: 2rem;
}
.description-text {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}
.class-notes {
  background: var(--mocha);
  color: var(--cream);
  padding: 1.5rem;
  border-radius: 15px;
  margin-bottom: 1rem;
}
.notes-title {
  color: var(--coral);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}
.notes-text {
  margin: 0;
  line-height: 1.5;
}
.class-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
.book-btn {
  background: var(--coral);
  color: var(--cream);
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
}
.book-btn:hover {
  background: var(--mocha);
  transform: translateY(-2px);
}
.learn-more-btn {
  background: transparent;
  color: var(--mocha);
  border: 2px solid var(--mocha);
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
}

.learn-more-btn:hover {
  background: var(--mocha);
  color: var(--cream);
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .modal-content {
    padding: 2rem;
    margin: 1rem;
  }

  .class-title {
    font-size: 2rem;
  }

  .class-actions {
    flex-direction: column;
  }

  .book-btn,
  .learn-more-btn {
    width: 100%;
  }
}
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  .modal-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem;
  }
  .class-image {
    position: relative;
    grid-column: 1;
    grid-row: 1 / span 2;
    background-color: var(--soya);
    border-radius: 20px;
    overflow: hidden;
  }
  .modal-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .img-overlay {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: #16151355;
  }
  .img-title {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .img-title h2 {
    color: var(--blanco);
    font-size: 7rem;
    transform: translateY(-3rem);
    text-align: center;
  }
  .class-details {
    grid-column: 2;
    border-radius: 20px;
    padding: 3rem;
  }
  .class-c2a {
    grid-column: 2;
    grid-row: 2;
    background-color: var(--coral);
    border-radius: 20px;
    padding: 3rem;
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
