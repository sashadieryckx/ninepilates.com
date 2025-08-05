<script setup>
defineProps({
  testimonial: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="testimonial df-pad">
    <h3 class="italic">"{{ testimonial.statement }}"</h3>
    <h5 class="light review">{{ testimonial.review }}</h5>
    <div>
      <h5 class="roman">- {{ testimonial.author }}</h5>
      <p class="light date">{{ testimonial.date }}</p>
    </div>
  </div>
</template>
<style scoped>
.testimonial {
  width: 100vw;
  min-height: 50vh;
}
h3 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.review {
  margin: 2rem 0rem;
}
</style>
