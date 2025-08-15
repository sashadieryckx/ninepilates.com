<script setup>
import Hero from '@/components/packages-and-pricing/Packages&PricingHero.vue'
import OfferingsBlock from '@/components/packages-and-pricing/OfferingsBlock.vue';
</script>
<template>
  <div id="packages-and-pricing" class="main-content">
    <section class="section" id="packages-and-pricing-hero">
      <Hero />
    </section>
    <section class="section" id="offerings-section">
      <OfferingsBlock
        title="Memberships"
        c2a="Explore Memberships"
      />
      <OfferingsBlock
        title="Packages"
        c2a="View Packages"
      />
    </section>
  </div>
</template>
<style scoped>
.section {
  height: 100%;
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
    height: 90vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 0 1rem 1rem 1rem;
  }
}
</style>
