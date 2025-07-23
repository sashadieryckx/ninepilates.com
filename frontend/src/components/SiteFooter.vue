<script setup></script>
<template>
  <div id="footer" class="interactive df-pad">
    <div id="divider" class=""></div>
    <img id="default-background" src="" />
    <div id="footer-title">
      <h1 class="roman">Movement with Intention.</h1>
    </div>
    <div id="bottom-bar">
      <div id="contact">
        <h6 class="light">info@ninepilates.com</h6>
        <h6 class="light">595 Montreal Rd, Unit 204</h6>
        <div id="socials">
          <a
            href=""
            target="_blank"
            class="light"
            >Instagram ↗
          </a>
          <a
            href=""
            target="_blank"
            class="light"
            >Tik Tok ↗
          </a>
          <a
            href=""
            target="_blank"
            class="light"
            >Facebook ↗
          </a>
        </div>
      </div>
      <div id="column-1">
        <router-link to="/" class="roman">Home</router-link>
        <router-link to="/" class="roman">About</router-link>
      </div>
      <div id="column-2">
        <router-link to="/" class="roman">Book</router-link>
        <router-link to="/" class="roman">FAQ</router-link>
      </div>
      <div id="column-3">
        <router-link to="/" class="roman">Shop</router-link>
        <router-link to="/" class="roman">Legal</router-link>
      </div>
      <div id="credits">
        <p class="light">© 2025 Nine Pilates® | All rights reserved</p>
        <p class="light">Website by — <a href="https://www.982studios.ca/">982studios®</a></p>
      </div>
      <div id="logos">
        <img src="" alt="" id="cheo-logo" />
      </div>
    </div>
  </div>
</template>
<style scoped>
#footer {
  z-index: 1;
  position: relative;
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(12, 1fr);
  background-color: var(--mocha);
  color: var(--coral);
}
#divider {
  z-index: 1;
  position: relative;
  grid-column: 1 / span 4;
  height: 1px;
  background-color: #f8f8f87c;
  display: none;
}
#default-background {
  display: none;
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
#footer-title {
  z-index: 1;
  position: relative;
  grid-column: 1 / span 4;
  grid-row: 4 / span 6;
  display: flex;
  justify-content: center;
}
#button {
  z-index: 1;
  position: relative;
  grid-column: 1 / span 4;
  grid-row: 8;
  display: flex;
  justify-content: center;
  align-items: center;
}
#footer-title h1 {
  font-size: 2.5em;
  color: var(--font-color-main);
  line-height: 1.1em;
  text-align: center;
  width: 90%;
}
#contact h6 {
  font-size: 1.75em;
  color: var(--font-color-main);
  font-family: sans-serif;
  font-weight: 300;
}
#socials {
  margin-top: 1em;
}
#contact a,
#column-1 a,
#column-2 a,
#column-3 a {
  font-size: 1.25em;
  color: var(--font-color-main);
  font-family: sans-serif;
  font-weight: 300;
  font-style: normal;
  letter-spacing: normal;
  margin-right: 1em;
  text-decoration: none;
}
#bottom-bar {
  z-index: 1;
  position: relative;
  grid-row: 12;
  grid-column: 1 / span 4;
}
#bottom-bar a {
  transition: all 0.5s ease;
}
#column-1,
#column-2,
#column-3 {
  display: none;
}
#contact {
  display: none;
}
#credits {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#credits p,
#credits a {
  color: var(--font-color-main);
  text-decoration: none;
  font-family: sans-serif;
  font-weight: 300;
  font-style: normal;
  transition: all 0.5s ease;
}
#credits a:hover,
#bottom-bar a:hover {
  color: var(--soya);
}
#logos {
  display: none;
}
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
  #footer-title h6 {
    font-size: 4em;
    width: 80%;
  }
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
  #footer-title h6 {
    font-size: 3.5em;
    width: 80%;
  }
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  #footer {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, 1fr);
  }
  #footer-title {
    columns: 1;
    grid-row: 2 / span 3;
    justify-content: flex-start;
  }
  #footer-title h1 {
    font-size: 6rem;
    text-align: left;
    width: 60%;
  }
  #button {
    display: none;
    padding: 0;
  }
  #bottom-bar {
    grid-row: 8 / span 10;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
  #contact {
    display: unset;
    grid-column: 1 / span 4;
    grid-row: 1 / span 2;
  }
  #column-1,
  #column-2,
  #column-3 {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  #column-1 {
    grid-column: 8;
  }
  #column-2 {
    grid-column: 10;
  }
  #column-3 {
    grid-column: 12;
  }
  #credits {
    flex-direction: row;
    justify-content: flex-start;
    grid-column: 1 / span 12;
    grid-row: 4;
    gap: 8em;
  }
  #credits p {
    font-size: 1.25em;
  }
  #logos {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    grid-column: 6 / span 12;
    grid-row: 4;
  }
  #cheo-logo {
    width: auto;
    height: 2em;
  }
}
/* DESKTOP 4 (Standard pc Monitor) */
@media (min-width: 1920px) {
  #footer-title h6 {
    font-size: 6em;
  }
}
</style>
