<script setup>
import { computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const currentLanguage = computed(() => locale.value)

function toggleLanguage() {
  const newLocale = locale.value === 'en' ? 'fr' : 'en'
  locale.value = newLocale
  localStorage.setItem('locale', newLocale)

  document.documentElement.lang = newLocale
}

watch(locale, (newLocale) => {
  localStorage.setItem('locale', newLocale)
  document.documentElement.lang = newLocale
})
</script>
<template>
  <div class="language-switch interactive">
    <div class="language-toggle" @click="toggleLanguage">
      <div class="toggle-track">
        <div class="toggle-slider" :class="{ active: currentLanguage === 'fr' }"></div>
        <span class="language-label left light" :class="{ active: currentLanguage === 'en' }">
          En
        </span>
        <span class="language-label right light" :class="{ active: currentLanguage === 'fr' }">
          Fr
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
  width: 64px;
  height: 36px;
  background-color: transparent;
  border-radius: 18px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.25rem 0.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}
.toggle-track:hover {
  border-color: var(--dawn);
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.2);
}
.toggle-slider {
  position: absolute;
  top: 1px;
  left: 2px;
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #f3ece960, var(--coral));
  backdrop-filter: blur(10px);
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  transform: translateX(0);
}
.toggle-slider.active {
  transform: translateX(30px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: .75;
}
.language-label {
  position: relative;
  font-size: 1rem;
  color: var(--blanco);
  opacity: 0.5;
  transition: all 0.3s ease;
  z-index: 2;
  transform: translateY(-12%);
  width: 100%;
}
.language-label.active {
  opacity: 1;
  color: var(--mocha);
  transform: scale(1.05) translateY(-12%);
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
