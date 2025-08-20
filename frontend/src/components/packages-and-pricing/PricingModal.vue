<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { usePricingStore } from '@/stores/pricingStore.js'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  modalType: {
    type: String, // 'memberships' or 'packages'
    default: 'memberships',
  },
})

const emit = defineEmits(['close'])

const pricingStore = usePricingStore()
const { t } = useI18n()

const pricingData = computed(() => {
  return props.modalType === 'memberships' ? pricingStore.memberships : pricingStore.packages
})

const modalTitle = computed(() => {
  return t(`pricing&packages.modal.${props.modalType}.title`)
})

const modalSubheading = computed(() => {
  return t(`pricing&packages.modal.${props.modalType}.subheading`)
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
          <button class="close-btn" @click="closeModal" aria-label="Close modal">
            <span class="close-line"></span>
            <span class="close-line"></span>
          </button>
          <div class="modal-header">
            <div class="header-content">
              <h2 class="roman">{{ modalTitle }}</h2>
              <p class="subheading light">{{ modalSubheading }}</p>
            </div>
          </div>
          <div class="pricing-grid">
            <div
              v-for="(item, index) in pricingData"
              :key="item.id"
              class="pricing-card"
              :class="{ featured: item.id === 2 }"
              :style="{ 'animation-delay': `${index * 0.1}s` }"
            >
              <div class="pricing-header">
                <h3 class="roman">{{ item.name }}</h3>
                <div class="price-info">
                  <span class="price roman">${{ item.price }}/mo</span>
                </div>
                <p class="classes-info light">{{ item.classes }}</p>
              </div>

              <div class="pricing-body" v-if="item.benefits">
                <ul class="benefits-list" v-if="Array.isArray(item.benefits)">
                  <li
                    v-for="(benefit, index) in item.benefits"
                    :key="index"
                    class="benefit-item light"
                  >
                    {{ benefit }}
                  </li>
                </ul>
                <p class="description light" v-else>{{ item.benefits }}</p>
              </div>

              <div class="pricing-footer">
                <button class="select-btn roman">
                  <p class="roman">{{ item.c2a }}</p>
                </button>
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
  height: 100%;
  overflow-y: auto;
  padding: 2rem 0;
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  padding: 1rem 1rem 0 1rem;
  width: 100%;
}
.header-content {
  text-align: center;
  max-width: 800px;
}
.modal-header h2 {
  color: var(--mocha);
  font-size: 3rem;
  margin: 0 0 1rem 0;
  animation: fadeInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
}
.modal-header p {
  font-size: 1rem;
  line-height: 1.2em;
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
  position: fixed;
  z-index: 5;
  top: 1.5rem;
  right: 1.5rem;
  background-color: rgba(22, 21, 19, 0.4);
  backdrop-filter: blur(10px);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  animation: fadeIn 0.6s ease 0.3s both;
}
.close-line {
  position: absolute;
  width: 1.2rem;
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
.close-btn:hover {
  background-color: rgba(22, 21, 19, 0.6);
  transform: scale(1.05);
}
.close-btn:hover .close-line {
  background: var(--soya);
}
.pricing-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  padding: 0 1rem;
}
.pricing-grid::after {
  display: none;
}
.pricing-grid::-webkit-scrollbar {
  display: none;
}
.pricing-grid::-webkit-scrollbar-track {
  display: none;
}
.pricing-grid::-webkit-scrollbar-thumb {
  display: none;
}
.pricing-grid::-webkit-scrollbar-thumb:hover {
  display: none;
}
.pricing-card {
  background: var(--mocha);
  border-radius: 25px;
  padding: 2rem 1rem;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  animation: slideInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  opacity: 0;
  transform: translateY(30px);
  width: 100%;
  max-width: 400px;
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
  padding-left: 1rem;
}
.pricing-header h3 {
  color: var(--coral);
  font-size: 3rem;
  text-align: left;
}
.price-info {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.price {
  font-size: 2.5rem;
  color: var(--coral);
}
.classes-info {
  font-size: 1.1rem;
  color: var(--coral);
  opacity: 0.9;
  text-align: left;
}
.pricing-body {
  margin-bottom: 2rem;
  min-height: 120px;
  display: flex;
  align-items: flex-start;
}
.benefits-list {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}
.benefit-item {
  color: var(--coral);
  line-height: 1.6;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
}
.benefit-item:last-child {
  margin-bottom: 0;
}
.description {
  color: var(--coral);
  line-height: 1.6;
  text-align: left;
}
.pricing-footer {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding-left: 1rem;
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
  background: var(--dawn);
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
  .close-btn {
    top: 2rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
  }

  .close-line {
    width: 1.5rem;
  }

  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
    margin: 0;
  }

  .pricing-card {
    max-width: none;
  }

  .pricing-card.featured {
    grid-column: 1 / -1;
    max-width: 400px;
    margin: 0 auto;
  }
}

/* DESKTOP 1 */
@media (min-width: 1280px) {
  .close-btn {
    top: 4rem;
    right: 7rem;
  }
  #pricing-modal {
    height: 90vh;
    width: 90vw;
    max-width: 100%;
    max-height: 90vh;
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
  .modal-header p {
    font-size: 1.5rem;
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
  .pricing-card.featured {
    transform: scale(1.05) translateY(30px);
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
    border: 2px solid var(--dawn);
    animation: slideInUpFeatured 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  }
}
</style>
