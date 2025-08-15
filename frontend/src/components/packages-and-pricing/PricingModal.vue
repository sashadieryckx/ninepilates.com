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
          <div class="modal-header">
            <h2 class="roman">{{ modalTitle }}</h2>
            <button class="close-btn light" @click="closeModal">close</button>
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
                  <span class="period light">/ month</span>
                </div>
                <p class="classes-info light">{{ item.classes }} {{ item.classes === 'Unlimited' ? '' : 'classes' }}</p>
              </div>

              <div class="pricing-body" v-if="item.description">
                <p class="description light">{{ item.description }}</p>
              </div>

              <div class="pricing-footer">
                <button class="select-btn roman">Select Plan</button>
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
  background: var(--soya);
  border-radius: 20px;
  width: 100%;
  max-width: 1200px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2rem;
  position: relative;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--coral);
  padding-bottom: 1rem;
}

.modal-header h2 {
  color: var(--coral);
  font-size: 2.5rem;
  margin: 0;
  animation: slideInLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--mocha);
  cursor: pointer;
  text-decoration: underline;
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
  border: 2px solid var(--coral);
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
  margin-bottom: 1rem;
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

.period {
  font-size: 1.2rem;
  color: var(--soya);
  opacity: 0.8;
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
  color: var(--soya);
  line-height: 1.6;
  text-align: center;
}

.pricing-footer {
  text-align: center;
}

.select-btn {
  background: var(--coral);
  color: var(--mocha);
  border: none;
  border-radius: 25px;
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.select-btn:hover {
  background: var(--soya);
  color: var(--coral);
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Keyframe Animations */
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
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
  .pricing-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .pricing-card.featured {
    grid-column: unset;
    max-width: unset;
    margin: 0;
  }

  .modal-header h2 {
    font-size: 3.5rem;
  }

  #pricing-modal {
    padding: 3rem;
  }

  .pricing-card {
    padding: 2.5rem;
  }
}
</style>
