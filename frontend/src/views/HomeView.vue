<script setup>
import HeroSection from '@/components/home/HeroSection.vue'
import StatementSection from '@/components/home/StatementSection.vue'
</script>

<template>
  <div id="main-content" class="main-content">
    <section class="section">
      <HeroSection />
    </section>
    <section class="section">
      <StatementSection/>
    </section>
  </div>
</template>
<style scoped>
#main-content {
  position: relative;
  height: 100%;
}
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
