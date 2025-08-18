<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted, ref } from 'vue'

const { t } = useI18n()
const buttonRef = ref(null)

const handleMouseMove = (e) => {
  if (!buttonRef.value) return

  const button = buttonRef.value
  const span = button.querySelector('.hover-effect')
  if (!span) return

  const rect = button.getBoundingClientRect()
  const relX = e.clientX - rect.left
  const relY = e.clientY - rect.top

  span.style.left = relX + 'px'
  span.style.top = relY + 'px'
}

const handleMouseEnter = (e) => {
  handleMouseMove(e)
}

const handleMouseLeave = (e) => {
  handleMouseMove(e)
}

onMounted(() => {
  if (buttonRef.value) {
    buttonRef.value.addEventListener('mouseenter', handleMouseEnter)
    buttonRef.value.addEventListener('mousemove', handleMouseMove)
    buttonRef.value.addEventListener('mouseleave', handleMouseLeave)
  }
})
</script>
<template>
  <div class="c2a-container">
    <button ref="buttonRef" class="btn">
      <span class="hover-effect"></span>
      <p class="roman">{{ t('callToActions.login') }}</p>
    </button>
  </div>
</template>
<style scoped>
.c2a-container {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  transition: all 0.3s ease;
  border-radius: 14px;
  overflow: visible;
}

.btn {
  position: relative;
  background-color: var(--coral);
  backdrop-filter: blur(5px);
  border: none;
  border-radius: 14px;
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: all 0.3s ease;
  overflow: hidden;
}

.btn p {
  font-size: 1rem;
  transform: translateY(-8%);
  color: var(--mocha);
  text-wrap: nowrap;
  position: relative;
  z-index: 2;
  transition: color 0.3s ease;
}

.hover-effect {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: var(--mocha);
  transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
  transform: translate(-50%, -50%);
  z-index: 1;
  pointer-events: none;
}

.btn:hover .hover-effect {
  width: 225%;
  height: 225%;
}

.btn:hover p {
  color: var(--coral);
}

.btn:active {
  transform: scale(0.98);
}

/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
}
</style>
