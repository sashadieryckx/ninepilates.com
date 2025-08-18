<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
  <div class="hero-container">
    <div class="hero-heading df-pad">
      <h2 class="roman">{{ t('pricing&packages.heading') }}</h2>
      <h5 class="light">
        {{ t('pricing&packages.subheading') }}
      </h5>
    </div>
  </div>
</template>
<style scoped>
.hero-container {
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h2 {
  text-align: left;
}
h5 {
  text-align: left;
  margin-top: 2rem;
}
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  .hero-container {
    align-items: flex-start;
  }
}
</style>
