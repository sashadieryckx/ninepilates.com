<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
  <div class="c2a-container">
    <button>
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
.c2a-container button {
  background-color: var(--coral);
  backdrop-filter: blur(5px);
  border: none;
  border-radius: 14px;
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: all 0.3s ease;
}
.c2a-container button p {
  font-size: 1rem;
  transform: translateY(-8%);
  color: var(--mocha);
  text-wrap: nowrap;
}
.c2a-container button:hover {
  transform: scale(1.03);
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
}
</style>
