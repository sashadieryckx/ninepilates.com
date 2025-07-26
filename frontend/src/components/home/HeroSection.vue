<template>
  <div id="hero-section">
    <div class="hero-bg">
      <div class="overlay"></div>
      <img src="../../assets/content/placeholder01.jpg" alt="Hero Background" class="hero-img" />
    </div>
    <div class="hero-content df-pad">
      <h1 class="roman">Find your balance with Nine Pilates</h1>
      <h5 class="light">
        Join us in transforming your body and mind through our expert-led classes and supportive
        community.
      </h5>
    </div>
  </div>
</template>
<style scoped>
#hero-section {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.hero-bg {
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.hero-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.75;
}
.overlay {
  background-color: #1615137e;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  text-align: center;
  padding-top: 8rem;
  color: var(--coral);
}
.hero-content h1 {
  font-size: 3.5rem;
  line-height: 1em;
  margin: 0;
}
.hero-content h5 {
  font-size: 1.25rem;
  width: 100%;
  margin-top: 1rem;
}
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  .hero-content {
    width: 70%;
    align-items: flex-start;
    padding-top: 12rem;
  }
  .hero-content h1 {
    font-size: 8rem;
    text-align: left;
  }
  .hero-content h5 {
    font-size: 2rem;
    text-align: left;
    width: 75%;
    padding-top: 1rem;
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
