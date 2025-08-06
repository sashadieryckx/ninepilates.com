<template>
  <div class="app-nav">
    <div class="li">
      <p class="light">Home</p>
    </div>
    <div class="li">
      <p class="light">Book Now</p>
    </div>
    <div class="li">
      <p class="light">Schedule</p>
    </div>
  </div>
</template>
<style scoped>
.app-nav {
  position: relative;
  z-index: 1002;
  height: 8vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-top: 1px solid #f3ece95a;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.li {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
}
p {
  font-size: .75rem;
  color: var(--onyx);
}
</style>
