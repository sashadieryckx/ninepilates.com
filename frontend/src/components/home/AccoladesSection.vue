<template>
  <div id="accolades-section" class="df-mar">
    <div class="accolade one">
      <div class="icon"></div>
      <h4 class="roman">Accolade 1</h4>
    </div>
    <div class="accolade two">
      <div class="icon"></div>
      <h4 class="roman">Accolade 2</h4>
    </div>
    <div class="accolade three">
      <div class="icon"></div>
      <h4 class="roman">Accolade 3</h4>
    </div>
  </div>
</template>
<style scoped>
#accolades-section {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 2rem 0rem;
}
.accolade {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
}
.accolade h4 {
  font-size: 1rem;
  color: var(--soya);
}
.icon {
  width: 4em;
  height: 4em;
  border-radius: 50%;
  border: 1px solid var(--soya);
}
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  #accolades-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    min-height: 50vh;
  }
  .one {
    grid-column: 3;
    grid-row: 1;
  }
  .two {
    grid-column: 2;
    grid-row: 2;
  }
  .three {
    grid-column: 1;
    grid-row: 3;
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
