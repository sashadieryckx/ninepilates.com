<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
  <div class="c2a-container">
    <button>
      <p class="light">{{ t('callToActions.bookNow') }}</p>
    </button>
  </div>
</template>
<style scoped>
.c2a-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: 100%;
}
.c2a-container button {
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  color: var(--blanco);
  border: none;
  border-radius: 18px;
  border: 1px solid #f3ece95a;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
  0 2px 8px rgba(0, 0, 0, 0.3),
  0 0 0 1px rgba(255, 255, 255, 0.1);
}
.c2a-container button p {
  font-size: 1rem;
  transform: translateY(-8%);
  color: var(--blanco);
}
</style>
