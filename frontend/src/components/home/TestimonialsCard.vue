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
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(20px);
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  color: var(--mocha);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
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
  border: 1px solid var(--mocha);
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
    max-width: 500px;
  }
  .pfp {
    margin-bottom: 2rem;
  }
  .pfp h4 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.5rem;
    line-height: 1.1em;
  }
  .date {
    margin-top: 4rem;
  }
}
</style>
