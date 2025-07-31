<script setup>
import MembershipsCard from './MembershipsCard.vue'
import { useMembershipsStore } from '@/stores/membershipStore'

const membershipsStore = useMembershipsStore()
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
