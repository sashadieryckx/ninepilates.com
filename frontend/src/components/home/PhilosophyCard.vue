<script setup>
defineProps({
  principals: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="philosophy-card">
    <h2>{{ principals.name }}</h2>
    <p>{{ principals.description }}</p>
  </div>
</template>
