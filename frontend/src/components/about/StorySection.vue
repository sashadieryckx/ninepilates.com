<script setup>
import { useAboutValarieStore } from '@/stores/aboutValarieStore';
import StoryCard from '@/components/about/StoryCard.vue';

const aboutValarieStore = useAboutValarieStore();
</script>
<template>
  <div id="story-section-content">
    <StoryCard v-for="abouts in aboutValarieStore.aboutValarieInfo" :key="abouts.id" :abouts="abouts" />
  </div>
</template>
<style scoped>
#story-section-content {
  min-height: 100vh;
}
</style>
