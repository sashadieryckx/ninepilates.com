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
    <img :src="principals.image" :alt="principals.name" class="img"/>
    <div class="num"><h6>{{ principals.id }}</h6></div>
    <div class="bar">
      <h4 class="roman">{{ principals.name }}</h4>
      <p class="light-italic">{{ principals.subheading }}</p>
    </div>
  </div>
</template>
<style scoped>
.philosophy-card {
  position: relative;
  width: 20em;
  height: 28em;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  overflow: hidden;
  color: var(--blanco);
}
p {
  font-size: 1rem;
  line-height: 1.1em;
  margin-top: .5rem;
}
.bar {
  position: absolute;
  bottom: -5%;
  left: 0;
  width: 100%;
  height: 8em;
  background-color: #41414130;
  backdrop-filter: blur(5px);
  margin-bottom: 1rem;
  padding: 1rem 1.5rem;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.num {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #1615134a;
  backdrop-filter: blur(5px);
  height: 3em;
  width: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
h6 {
  color: var(--blanco);
}
</style>
