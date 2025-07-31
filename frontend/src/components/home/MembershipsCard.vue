<script setup>
import JoinNow from '@/components/actions/C2AJoinNow.vue'
defineProps({
  memberships: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="membership-card">
    <div class="heading">
      <h2 class="bold">{{ memberships.title }}</h2>
      <h3 class="roman">{{ memberships.price }}</h3>
      <JoinNow class="c2a" />
    </div>
    <div class="info">
      <p>{{ memberships.description }}</p>
    </div>
  </div>
</template>
<style scoped>
.membership-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid var(--mocha);
  margin-bottom: 1rem;
  background-color: #f3ece967;
  backdrop-filter: blur(5px);
}
.heading {
  margin-bottom: 1.5rem;
}
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  .membership-card {
    max-width: 500px;
  }
}
</style>
