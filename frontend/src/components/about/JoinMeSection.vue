<script setup>
import BookClass from '@/components/actions/C2ABookClass2.vue'
</script>
<template>
  <div id="join-me-content">
    <div class="line"></div>
    <div class="join-me-heading df-pad">
      <div class="gradient"></div>
      <h2 class="roman">Join me on your wellness <span class="light-italic">journey</span></h2>
    </div>
    <div class="c2a">
      <BookClass />
    </div>
    <div class="img-container">
      <img src="" alt="Placeholder Img" class="img" />
    </div>
  </div>
</template>
<style scoped>
#join-me-content {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.line {
  position: relative;
  z-index: 3;
  width: 4px;
  height: 14em;
  background-color: var(--mocha);
  border-radius: 10px;
}
h2 {
  position: relative;
  z-index: 2;
  text-align: center;
  margin: 4rem 0;
}
.join-me-heading {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.gradient {
  position: absolute;
  z-index: 1;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -14%);
  width: 100%;
  height: 30em;
  background: radial-gradient(
    circle,
    rgba(199, 183, 166, 0) 0%,
    rgba(106, 96, 82, 0.25) 40%,
    rgba(199, 183, 166, 1) 75%,
    rgba(199, 183, 166, 1) 100%
  );
}
.c2a {
  position: relative;
  z-index: 2;
  width: 100%;
  margin-bottom: 4rem;
}
.img-container {
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img {
  width: 90%;
  background-color: var(--soya);
}
</style>
