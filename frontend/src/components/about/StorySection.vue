<script setup>
import { onMounted } from 'vue'
import { useAboutValarieStore } from '@/stores/aboutValarieStore'
import StoryCard from '@/components/about/StoryCard.vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const aboutValarieStore = useAboutValarieStore()

onMounted(() => {
  const storyCards = document.querySelectorAll('.story-card')
  const isDesktop = window.innerWidth >= 1280

  if (isDesktop) {
    gsap.set(storyCards, { opacity: 0, y: 50 })

    const storyTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#story-section-content',
        start: 'top top',
        end: () => `+=${storyCards.length * 2 * window.innerHeight}`,
        pin: true,
        scrub: 1,
        markers: false,
      },
    })

    storyCards.forEach((card, index) => {
      const baseTime = index * 1.5
      // Fade in animation
      storyTl.to(
        card,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        },
        baseTime,
      )

      // Hold the card visible
      storyTl.to(
        card,
        {
          opacity: 1,
          duration: 0.7,
        },
        baseTime + 0.3,
      )

      // Fade out animation (except for the last card)
      if (index < storyCards.length) {
        storyTl.to(
          card,
          {
            opacity: 0,
            y: -50,
            duration: 0.3,
            ease: 'power2.in',
          },
          baseTime + 1.0,
        )

        // Add a small gap before the next card starts
        storyTl.to(
          card,
          {
            opacity: 0,
            duration: 0.7,
          },
          baseTime + 1.3,
        )
      }
    })
  } else {
    // For mobile/tablet, use a simpler scroll-triggered animation
    storyCards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
          },
        },
      )
    })
  }
})
</script>
<template>
  <div id="story-section-content" class="interactive">
    <div class="story-cards df-mar">
      <StoryCard
        v-for="abouts in aboutValarieStore.aboutValarieInfo"
        :key="abouts.id"
        :abouts="abouts"
      />
    </div>
    <div class="img-container">
      <img src="" alt="" class="img" />
      <h2>Placeholder</h2>
    </div>
  </div>
</template>
<style scoped>
#story-section-content {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.story-cards {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  padding: 2rem 0;
  z-index: 10;
  gap: 4rem;
}
.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40em;
  background-color: var(--soya);
  color: var(--coral);
}
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
  .story-cards {
    padding: 3rem 0;
  }
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
  .story-cards {
    padding: 4rem 0;
  }
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  #story-section-content {
    min-height: 800vh;
  }
  .story-cards {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0;
  }
}
/* DESKTOP 2 [GLOBAL] */
@media (min-width: 1440px) {
}
/* DESKTOP 3 [GLOBAL] */
@media (min-width: 1728px) {
}
/* DESKTOP 4 (Standard pc Monitor) */
@media only screen and (min-width: 1920px) {
}
/* DESKTOP 5 (4k Monitor) */
@media only screen and (min-width: 2160px) {
}
</style>
