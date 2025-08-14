<script setup>
import Hero from '@/components/packages-and-pricing/Packages&PricingHero.vue'
import ProductBlock from '@/components/packages-and-pricing/OfferingsBlock.vue'
</script>
<template>
  <div id="packages-and-pricing">
    <section class="section" id="packages-and-pricing-hero">
      <Hero />
    </section>
    <section class="section" id="offerings-section">
      <ProductBlock />
    </section>
  </div>
</template>
<style scoped>
.section {
  min-height: 100vh;
}
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  #offerings-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}
</style>
