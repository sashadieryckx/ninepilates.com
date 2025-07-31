<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import MembershipsCard from './MembershipsCard.vue'
import { useMembershipsStore } from '@/stores/membershipStore'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const membershipsStore = useMembershipsStore()
const scrollTriggerInstance = ref(null)

onMounted(() => {
  const membershipCards = document.querySelectorAll('.card')
  const membershipsSection = document.getElementById('memberships-section-content')

  if (screen.width >= 1280 && membershipCards.length > 0 && membershipsSection) {
    scrollTriggerInstance.value = gsap.fromTo(
      membershipCards,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          id: 'memberships-section-animation',
          trigger: membershipsSection,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      },
    )
  }
})

onUnmounted(() => {
  if (scrollTriggerInstance.value) {
    scrollTriggerInstance.value.scrollTrigger?.kill()
    scrollTriggerInstance.value.kill()
    scrollTriggerInstance.value = null
  }

  const trigger = ScrollTrigger.getById('memberships-section-animation')
  if (trigger) {
    trigger.kill()
  }

  gsap.killTweensOf('.card')
})
</script>
<template>
  <div id="memberships-section-content">
    <div class="memberships-heading df-pad">
      <h2 class="roman">Memberships made to <span class="light-italic">move</span> with you</h2>
      <h5 class="light">
        Explore our membership options and find the perfect fit for your journey with us.
      </h5>
    </div>
    <div class="memberships df-mar">
      <MembershipsCard
        v-for="membership in membershipsStore.memberships"
        :key="membership.id"
        :memberships="membership"
        class="card"
      />
    </div>
  </div>
</template>
<style scoped>
#memberships-section-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.memberships-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
h2 {
  text-align: center;
}
h5 {
  text-align: center;
  margin-top: 2rem;
}
.memberships {
  margin-top: 4rem;
}
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  .memberships {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
  }
}
</style>
