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
    <img :src="principals.image" :alt="principals.name" />
    <div class="bar">
      <h4 class="light">{{ principals.name }}</h4>
    </div>
  </div>
</template>
<style scoped>
.philosophy-card {
  position: relative;
  width: 20em;
  height: 28em;
  padding: 2rem 2rem 1em 2em;
  border: 2px solid var(--coral);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  overflow: hidden;
}
p {
  margin-top: 1.5rem;
  font-size: 1rem;
  line-height: 1.5em;
}
.bar {
  position: absolute;
  bottom: -5%;
  left: 0;
  width: 100%;
  height: 8em;
  background-color: #161513a4;
  backdrop-filter: blur(5px);
  margin-bottom: 1rem;
  padding: 1rem;
}
</style>
