<script setup>
import Insta from '@/components/icons/InstaIcon.vue'
import Tiktok from '@/components/icons/TiktokIcon.vue'
import Facebook from '@/components/icons/FacebookIcon.vue'
import Youtube from '@/components/icons/YoutubeIcon.vue'
</script>
<template>
  <div id="connect-section-content">
    <div class="connect-heading df-pad">
      <h2 class="roman">Connect & share with us on <span class="light-italic">socials</span>.</h2>
    </div>
    <div class="images">

    </div>
    <div class="socials df-mar">
      <Insta />
      <Tiktok />
      <Facebook />
      <Youtube />
    </div>
  </div>
</template>
<style scoped>
#connect-section-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 4rem;
  padding-bottom: 4rem;
}
h2 {
  text-align: center;
}
h5 {
  text-align: center;
  margin-top: 2rem;
}
.images {
  margin-top: 4rem;
}
.socials {
  margin-top: 4rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
</style>
