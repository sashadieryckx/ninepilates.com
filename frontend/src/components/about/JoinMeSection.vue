<script setup>
import BookClass from '@/components/actions/C2ABookClass2.vue'
</script>
<template>
  <div id="join-me-content">
    <div class="line"></div>
    <div class="gradient"></div>
    <div class="join-me-heading df-pad">
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
  overflow: visible;
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
  overflow: visible;
}
.gradient {
  position: absolute;
  z-index: 0;
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
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  #join-me-content {
    min-height: 100vh;
    background: transparent;
  }
  .gradient {
    height: 100%;
    top: -10%;
    background: radial-gradient(
      circle,
      rgba(199, 183, 166, 0) 0%,
      rgba(106, 96, 82, 0.25) 20%,
      rgba(199, 183, 166, 1) 35%,
      rgba(199, 183, 166, 1) 100%
    );
  }
  .line {
    display: none;
  }
  .join-me-heading {
    padding-top: 8rem;
  }
  h2 {
    width: 65%;
  }
  .img {
    height: 60vh;
  }
  .c2a {
    margin-bottom: 12rem;
  }
}
</style>
