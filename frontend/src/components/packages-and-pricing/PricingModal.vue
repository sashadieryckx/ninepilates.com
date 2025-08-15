<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { usePricingStore } from '@/stores/pricingStore.js'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  modalType: {
    type: String, // 'memberships' or 'packages'
    default: 'memberships'
  }
})

const emit = defineEmits(['close'])

const pricingStore = usePricingStore()

const pricingData = computed(() => {
  return props.modalType === 'memberships' ? pricingStore.memberships : pricingStore.packages
})

const modalTitle = computed(() => {
  return props.modalType.charAt(0).toUpperCase() + props.modalType.slice(1)
})

const modalSubheading = computed(() => {
  if (props.modalType === 'memberships') {
    return "Choose a membership that supports your lifestyle and helps you stay consistent in your practice — with simple pricing and unlimited potential"
  } else {
    return "Perfect for those new to Pilates or looking to supplement their routine — flexible packages that fit your schedule with no monthly commitment"
  }
})

const closeModal = () => {
  emit('close')
}

// Handle ESC key
const handleEscape = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    closeModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
})
</script>
<template>
  <Transition name="modal-overlay">
    <div v-if="isOpen" id="pricing-modal-overlay" @click="closeModal" class="interactive">
      <Transition name="modal-content">
        <div v-if="isOpen" id="pricing-modal" @click.stop>
          <button class="close-btn light" @click="closeModal">close</button>
          <div class="modal-header">
            <div class="header-content">
              <h2 class="roman">Our {{ modalTitle }}</h2>
              <p class="subheading light">{{ modalSubheading }}</p>
            </div>
          </div>
          <div class="pricing-grid">
            <div
              v-for="(item, index) in pricingData"
              :key="item.id"
              class="pricing-card"
              :class="{ 'featured': item.id === 2 }"
              :style="{ 'animation-delay': `${index * 0.1}s` }"
            >
              <div class="pricing-header">
                <h3 class="roman">{{ item.name }}</h3>
                <div class="price-info">
                  <span class="price roman">${{ item.price }}</span>
                </div>
                <p class="classes-info light">{{ item.classes }}</p>
              </div>

              <div class="pricing-body" v-if="item.description">
                <p class="description light">{{ item.description }}</p>
              </div>

              <div class="pricing-footer">
                <button class="select-btn roman"><p class="roman">{{ item.c2a }}</p></button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>
<style scoped>
/* Modal Overlay Transitions */
.modal-overlay-enter-active {
  transition: all 0.3s ease-out;
}

.modal-overlay-leave-active {
  transition: all 0.25s ease-in;
}

.modal-overlay-enter-from {
  opacity: 0;
  backdrop-filter: blur(0px);
}

.modal-overlay-enter-to {
  opacity: 1;
  backdrop-filter: blur(10px);
}

.modal-overlay-leave-from {
  opacity: 1;
  backdrop-filter: blur(10px);
}

.modal-overlay-leave-to {
  opacity: 0;
  backdrop-filter: blur(0px);
}

/* Modal Content Transitions */
.modal-content-enter-active {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal-content-leave-active {
  transition: all 0.25s ease-in;
}

.modal-content-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}

.modal-content-enter-to {
  opacity: 1;
  transform: scale(1) translateY(0);
}

.modal-content-leave-from {
  opacity: 1;
  transform: scale(1) translateY(0);
}

.modal-content-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(-10px);
}

#pricing-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

#pricing-modal {
  position: relative;
  background: radial-gradient(circle at top left, #c7b7a6 0%, #f0e9e3 40%, #b49e8b 100%);
  border-radius: 20px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2rem;
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  width: 100%;
}
.header-content {
  text-align: center;
  max-width: 800px;
}
.modal-header h2 {
  color: var(--mocha);
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
  animation: fadeInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
}
.subheading {
  color: var(--mocha);
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  opacity: 0.8;
  animation: fadeInUp 0.6s ease 0.4s both;
}
.close-btn {
  position: absolute;
  top: 1rem;
  right: 3rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--mocha);
  cursor: pointer;
  transition: opacity 0.3s ease;
  animation: fadeIn 0.6s ease 0.3s both;
}
.close-btn:hover {
  opacity: 0.7;
}
.pricing-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
.pricing-card {
  background: var(--mocha);
  border-radius: 15px;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  animation: slideInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  opacity: 0;
  transform: translateY(30px);
}
.pricing-card.featured {
  transform: scale(1.05) translateY(30px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 2px solid var(--blanco);
  animation: slideInUpFeatured 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}
.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}
.pricing-card.featured:hover {
  transform: scale(1.05) translateY(-5px);
}
.pricing-header {
  text-align: center;
  margin-bottom: 1.5rem;
}
.pricing-header h3 {
  color: var(--coral);
  font-size: 1.8rem;
}
.price-info {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.price {
  font-size: 3rem;
  color: var(--coral);
}
.classes-info {
  font-size: 1.1rem;
  color: var(--soya);
  opacity: 0.9;
}
.pricing-body {
  margin-bottom: 2rem;
  min-height: 120px;
  display: flex;
  align-items: center;
}
.description {
  color: var(--coral);
  line-height: 1.6;
  text-align: left;
}
.pricing-footer {
  text-align: center;
}
.select-btn {
  background-color: var(--coral);
  backdrop-filter: blur(5px);
  border: none;
  border-radius: 50px;
  padding: 0.5rem 1.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: all 0.3s ease;
}
.select-btn p {
  font-size: 1rem;
  transform: translateY(-8%);
  color: var(--mocha);
}
.select-btn:hover {
  background: var(--soya);
  color: var(--coral);
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Keyframe Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 0.8;
    transform: translateY(0);
  }
}

@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slideInUpFeatured {
  to {
    opacity: 1;
    transform: scale(1.05) translateY(0);
  }
}

/* TABLET 1 */
@media (min-width: 768px) {
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .pricing-card.featured {
    grid-column: 1 / -1;
    max-width: 400px;
    margin: 0 auto;
  }
}

/* DESKTOP 1 */
@media (min-width: 1280px) {
  #pricing-modal {
    height: 90vh;
    width: 90vw;
    max-width: 100%;
  }
  .pricing-grid {
    margin-top: 4rem;
    grid-template-columns: repeat(3, 1fr);
  }
  .pricing-card.featured {
    grid-column: unset;
    max-width: unset;
    margin: 0;
  }
  .modal-header h2 {
    font-size: 5rem;
    padding-top: 2rem;
  }
  .subheading {
    font-size: 1.3rem;
  }
  #pricing-modal {
    padding: 2rem;
  }
  .pricing-card {
    padding: 2.5rem;
  }
  .pricing-header h3 {
    font-size: 3rem;
    text-align: left;
  }
  .price-info {
    justify-content: flex-start;
    margin: 0;
  }
  .classes-info {
    justify-content: flex-start;
    margin: 0;
  }
}
</style>
