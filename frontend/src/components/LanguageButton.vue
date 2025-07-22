<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'

const currentLanguage = ref('en') // Default to English

const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === 'fr' ? 'en' : 'fr'
  console.log(`Language switched to: ${currentLanguage.value}`)
}
onMounted(() => {
  // Any initialization logic can go here
})
</script>
<template>
  <div class="language-switch">
    <div class="language-toggle" @click="toggleLanguage">
      <div class="toggle-track">
        <div class="toggle-slider" :class="{ active: currentLanguage === 'fr' }"></div>
        <span class="language-label left roman" :class="{ active: currentLanguage === 'en' }">
          EN
        </span>
        <span class="language-label right roman" :class="{ active: currentLanguage === 'fr' }">
          FR
        </span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.language-switch {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.language-toggle {
  cursor: pointer;
  user-select: none;
}
.toggle-track {
  position: relative;
  width: 80px;
  height: 36px;
  background-color: transparent;
  border-radius: 18px;
  border: 1px solid var(--coral);
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
.toggle-track:hover {
  border-color: var(--dawn);
  box-shadow: 0 0 0 4px rgba(196, 183, 166, 0.2);
}
.toggle-slider {
  position: absolute;
  top: 1px;
  left: 2px;
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, var(--coral), var(--dawn));
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  transform: translateX(0);
}
.toggle-slider.active {
  transform: translateX(42px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: linear-gradient(135deg, var(--dawn), var(--blanco));
}
.language-label {
  position: relative;
  font-size: 1rem;
  color: var(--blanco);
  opacity: 0.5;
  transition: all 0.3s ease;
  z-index: 2;
  text-transform: uppercase;
  transform: translateY(-8%);
  width: 100%;
}
.language-label.active {
  opacity: 1;
  color: var(--mocha);
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
  transform: scale(1.05) translateY(-8%);
}
.language-label.left {
  text-align: left;
  margin-left: 0px;
  margin-right: 0.25rem;
}
.language-label.right {
  text-align: right;
  margin-right: 0px;
  margin-left: 0.25rem;
}
.toggle-track:active .toggle-slider {
  transform: translateX(0) scale(0.95);
}
.toggle-track:active .toggle-slider.active {
  transform: translateX(40px) scale(0.95);
}
.language-toggle:hover .toggle-track {
  background-color: transparent;
}
.language-toggle:focus-visible {
  outline: 2px solid var(--coral);
  outline-offset: 4px;
  border-radius: 0px;
}
.language-switch {
  animation: slideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
