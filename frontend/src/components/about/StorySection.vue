<script setup>
import { useAboutValarieStore } from '@/stores/aboutValarieStore';
import StoryCard from '@/components/about/StoryCard.vue';
import TestimonialCards from '@/components/about/ValsTestimonialCards.vue';
import { onMounted } from 'vue';

const aboutValarieStore = useAboutValarieStore();

// Debug logging to help verify data is loaded
onMounted(() => {
  console.log('Story cards data:', aboutValarieStore.aboutValarieInfo);
  console.log('Number of story cards:', aboutValarieStore.aboutValarieInfo.length);
});
</script>
<template>
  <div id="story-section-content">
    <div class="story-cards df-mar">
      <StoryCard v-for="abouts in aboutValarieStore.aboutValarieInfo" :key="abouts.id" :abouts="abouts" />
    </div>
    <div class="img-container">
      <img src="" alt="" class="img"/>
      <h2>Placeholder</h2>
    </div>
    <div class="testimonials">
      <TestimonialCards v-for="testimonial in aboutValarieStore.valeriesTestimonials" :key="testimonial.id" :valeriesTestimonials="testimonial" />
    </div>
    <div class="join-me">

    </div>
  </div>
</template>
<style scoped>
#story-section-content {
  min-height: 100vh;
}
.story-cards {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 2rem;
  width: 100vw;
  padding: 2rem 0;
}
.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40em;
  background-color: var(--soya);
  border-radius: 25px;
  color: var(--coral);
}
.testimonials {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 70vh;
  gap: 2rem;
  overflow-y: hidden;
  overflow-x: auto;
}
</style>
