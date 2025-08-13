<script setup>
import FAQBlock from '@/components/faq/FAQBlock.vue'
import { useFAQStore } from '@/stores/faqStore'

const faqStore = useFAQStore()
</script>
<template>
  <div id="faq-content" class="main-content">
    <div id="faq-heading" class="df-pad">
      <h2 class="roman">Frequently asked questions.</h2>
      <h5 class="light">
        Experience fully customized Pilates sessions tailored to your body, goals, and pace—offering the attention, precision, and guidance you need to progress with confidence.
      </h5>
    </div>
    <section id="faq-section" class="section interactive">
      <FAQBlock v-for="faq in faqStore.faqs" :key="faq.id" :faq="faq" />
    </section>
  </div>
</template>
<style scoped>
#faq-content {
  min-height: 100vh;
}
h2 {
  text-align: left;
}
h5 {
  text-align: left;
  margin-top: 1rem;
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  #faq-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  #faq-heading {
    grid-column: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  #faq-section {
    grid-column: 2;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  h5 {
    margin-top: 2rem;
  }
}
</style>
