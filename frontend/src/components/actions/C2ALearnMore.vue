<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
  <div id="learn-more">
    <button>
      <p class="roman">{{ t('callToActions.learnMore') }}</p>
    </button>
  </div>
</template>
<style scoped>
#learn-more {
  margin-top: 1rem;
}
#learn-more button {
  font-size: 1rem;
  background-color: transparent;
  color: var(--mocha);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
#learn-more p {
  font-size: 1rem;
  transform: translateY(-3px);
  text-decoration: underline;
}
#learn-more button:hover {
  color: var(--soya);
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  #learn-more button p {
    font-size: 1.25rem;
  }
}
</style>
