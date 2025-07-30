<script setup>
defineProps({
  abouts: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="story-card df-pad">
    <h2 class="roman">{{ abouts.heading }}</h2>
    <h5 class="light">{{ abouts.content }}</h5>
  </div>
</template>
<style scoped>
.story-card {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 1rem 0rem;
  margin: 2rem 0rem;
}
h2 {
  margin-bottom: 1rem;
  color: var(--mocha);
}
h5 {
  color: var(--mocha);
}
</style>
