<template>
  <div class="about-hero-content">
    <div class="heading df-mar">
      <h1 class="roman">Hello, I'm</h1>
      <h1 class="italic">Valérie.</h1>
      <h2 class="light">The founder of</h2>
      <h2 class="light-italic">Nine Pilates</h2>
    </div>
    <div class="bg-img">
      <div class="overlay"></div>
      <img src="@/assets/content/val.jpg" alt="Valerie" class="img">
    </div>
  </div>
</template>
<style scoped>
.about-hero-content {
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
}
.heading {
  position: relative;
  z-index: 2;
  color: var(--coral);
  margin-top: 22rem;
}
.heading :nth-child(2) {
  font-size: 4rem;
  text-indent: 3rem;
}
h2 {
  text-align: center;
}
.bg-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: #1615134b;
}
.img {
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}
</style>
