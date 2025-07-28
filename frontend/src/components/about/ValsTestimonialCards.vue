<script setup>
defineProps({
  valeriesTestimonials: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="testimonial df-pad">
    <h3 class="italic">"{{ valeriesTestimonials.statement }}"</h3>
    <h5 class="light">{{ valeriesTestimonials.review }}</h5>
    <p class="roman">- {{ valeriesTestimonials.author }}</p>
    <p class="light">{{ valeriesTestimonials.date }}</p>
  </div>
</template>
<style scoped>
.testimonial {
  width: 100vw;
}
h3 {
  margin-bottom: 1rem;
}
h5 {
  margin-bottom: 1rem;
}
</style>
