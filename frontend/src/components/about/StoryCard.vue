<script setup>
defineProps({
  abouts: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="story-card">
    <h2 class="roman">{{ abouts.heading }}</h2>
    <h5 class="light">{{ abouts.content }}</h5>
  </div>
</template>
