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
            <h3 class="roman">{{ classData.title }}.</h3>
            <p class="class-subtitle light-italic">{{ classData.subtitle }}</p>
          </div>
          <div class="class-body">
            <div class="class-description">
              <p class="description-text light">{{ classData.description }}</p>
            </div>

            <div v-if="classData.notes" class="class-notes">
              <p class="notes-text italic">{{ classData.notes }}</p>
            </div>
          </div>
          <div class="class-actions">
            <a class="book-btn interactive"><span class="bold">Book This Class</span></a>
            <router-link to="/packages-and-pricing" class="learn-more-btn interactive roman">
              <span class="bold">View Packages</span>
            </router-link>
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
  background: var(--blanco);
  transition: all 0.3s ease;
}

.close-line:first-child {
  transform: rotate(45deg);
}

.close-line:last-child {
  transform: rotate(-45deg);
}

.close-btn:hover .close-line {
  background: var(--soya);
}

.class-details {
  color: var(--mocha);
}
.class-details p {
  font-size: 1rem;
  line-height: 1.1em;
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
  color: var(--cream);
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
  color: var(--mocha);
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
  color: var(--coral);
  transform: scale(1.03);
  box-shadow: 0px 2px 10px 1px rgba(63, 58, 52, 0.4);
  -webkit-box-shadow: 0px 2px 10px 1px rgba(63, 58, 52, 0.4);
  -moz-box-shadow: 0px 2px 10px 1px rgba(63, 58, 52, 0.4);
}
.learn-more-btn {
  background: transparent;
  color: var(--mocha);
  border: 2px solid var(--mocha);
  padding: .5rem 1.5rem;
  border-radius: 50px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
}
.book-btn,
.learn-more-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}
.learn-more-btn span,
.book-btn span {
  margin: 0;
  height: 2em;
  font-size: 1rem;
}
.learn-more-btn:hover {
  background: var(--mocha);
  color: var(--coral);
  transform: scale(1.03);
  box-shadow: 0px 2px 10px 1px rgba(63, 58, 52, 0.4);
  -webkit-box-shadow: 0px 2px 10px 1px rgba(63, 58, 52, 0.4);
  -moz-box-shadow: 0px 2px 10px 1px rgba(63, 58, 52, 0.4);
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
    background: radial-gradient(circle at top left, #c7b7a6 0%, #f0e9e3 40%, #b49e8b 100%);
    border-radius: 50px;
  }
  .class-image {
    position: relative;
    grid-column: 2;
    grid-row: 1 / span 2;
    background-color: var(--soya);
    border-radius: 42px;
    overflow: hidden;
    margin: 2rem;
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
    background: radial-gradient(circle at top left, #c7b7a6 0%, #f0e9e3 40%, #b49e8b 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 4rem;
    transform: translateY(-2rem);
    text-align: center;
  }
  .class-details {
    grid-column: 1;
    grid-row: 1 / span 2;
    border-radius: 20px;
    padding: 4rem;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    max-width: 700px;
  }
  .class-details h3 {
    font-size: 4rem;
    margin-bottom: 1rem;
    text-align: left;
  }
  .class-details p {
    font-size: 1.25rem;
    color: var(--mocha);
    text-align: left;
  }
  .close-btn {
    top: 4rem;
    right: 4rem;
    background-color: #16151365;
    backdrop-filter: blur(10px);
    height: 6em;
    width: 6em;
    border-radius: 50%;
    transition: all 0.3s ease;
  }
  .close-btn:hover {
    background-color: var(--mocha);
    transform: scale(1.1);
  }
  .close-line {
    background: var(--coral);
  }
  .close-btn:hover .close-line {
    background: var(--coral);
  }
  .class-actions {
    margin-top: 1rem;
  }
}
/* DESKTOP 2 [GLOBAL] */
@media (min-width: 1440px) {
  .class-details h3 {
    font-size: 6rem;
  }
}
/* DESKTOP 3 [GLOBAL] */
@media (min-width: 1728px) {
  .img-title h2 {
    font-size: 6rem;
  }
  .class-details h3 {
    font-size: 6rem;
  }
}
/* DESKTOP 4 (Standard pc Monitor) */
@media only screen and (min-width: 1920px) {
  .img-title h2 {
    font-size: 8rem;
  }
}
/* DESKTOP 5 (4k Monitor) */
@media only screen and (min-width: 2160px) {
}
</style>
