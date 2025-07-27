<script setup>
// Unhead SEO
import { useHead } from '@unhead/vue'
useHead({
  title: 'Nine Pilates | Schedule',
  meta: [
    {
      name: 'description',
      content:
        'See our schedule for upcoming classes at Nine Pilates.',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
  ],
})
</script>
<template>
  <div id="main-content" class="main-content">
    <section class="section">
      <h1>This is a Schedule page.</h1>
    </section>
  </div>
</template>
<style scoped>
#main-content {
  height: 100vh;
}
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
