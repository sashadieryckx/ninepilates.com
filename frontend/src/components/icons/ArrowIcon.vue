<script setup>
defineProps({
  fill: {
    type: String,
    default: '#000',
  },
})
</script>
<template>
  <svg
    id="arrow"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 392.17 392.17"
    :fill="fill"
  >
    <path
      class="cls-1"
      d="M119.26,392.17h-8.41c-9.53-3.15-27.98-19.84-29.63-29.61-.97-5.74-.14-11.61,3-16.51l148.89-149.3L84.99,47.64c-7.25-11.18-4.38-20.33,3.66-29.7,11.58-13.48,26.08-25.18,42.47-10.32l172.39,172.39c7.46,7.85,9.56,18.65,3.68,28.18-59.35,61.05-119.76,121.44-180.79,180.8l-7.14,3.18Z"
    />
  </svg>
</template>
<style scoped>
#arrow {
  width: 4rem;
  height: 4rem;
  fill: v-bind(fill);
}
</style>
