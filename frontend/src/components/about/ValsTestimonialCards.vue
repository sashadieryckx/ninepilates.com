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
      <h5 class="roman">{{ testimonial.author }}</h5>
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
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  .testimonial {
    width: 80vw;
    min-height: 40vh;
    margin-bottom: 2rem;
  }
  h3 {
    font-size: 4rem;
  }
  .review {
    font-size: 1.5rem;
  }
}
/* DESKTOP 3 [GLOBAL] */
@media (min-width: 1728px) {
  .testimonial {
    width: 60vw;
    min-height: 40vh;
    margin-bottom: 2rem;
  }
  h3 {
    font-size: 4rem;
  }
  .review {
    font-size: 1.5rem;
  }
}
</style>
