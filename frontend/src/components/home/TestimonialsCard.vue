<script setup>
defineProps({
  testimonials: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="testimonial-card">
    <div class="testimonial-content">
      <div class="pfp">
        <img :src="testimonials.image" :alt="testimonials.author" class="img" />
        <h4 class="light">{{ testimonials.author }}</h4>
      </div>
      <h4 class="italic">"{{ testimonials.text }}"</h4>
      <p class="date light">{{ testimonials.date }}</p>
    </div>
  </div>
</template>
<style scoped>
.testimonial-card {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  background-color: #3f3a3496;
  backdrop-filter: blur(5px);
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  color: var(--coral);
}
.pfp {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
}
.img {
  width: 6em;
  height: 6em;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--coral);
}
.date {
  font-size: 1.25rem;
  padding-top: 1.5rem;
  text-align: right;
}
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  .testimonial-card {
    padding: 2.5rem;
  }
  .pfp {
    margin-bottom: 4rem;
  }
  h4 {
    font-size: 2rem;
    line-height: 1.1em;
  }
  .date {
    margin-top: 4rem;
  }
}
</style>
