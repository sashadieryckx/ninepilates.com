<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import SplitType from 'split-type'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

let splitTypeInstances = []

onMounted(() => {
  const splitTypes = document.querySelectorAll('.split-type')

  splitTypes.forEach((char) => {
    const bg = char.dataset.bgColor
    const fg = char.dataset.fgColor

    const text = new SplitType(char, { types: 'words chars' })
    splitTypeInstances.push(text)

    gsap.fromTo(
      text.chars,
      {
        color: bg,
      },
      {
        color: fg,
        duration: 0.3,
        stagger: 0.02,
        scrollTrigger: {
          trigger: char,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
          toggleActions: 'play play reverse reverse',
        },
      },
    )
  })
})

onBeforeUnmount(() => {
  splitTypeInstances.forEach((instance) => {
    if (instance && instance.revert) {
      instance.revert()
    }
  })

  ScrollTrigger.getAll().forEach((trigger) => {
    if (
      trigger.vars &&
      trigger.vars.trigger &&
      trigger.vars.trigger.classList &&
      trigger.vars.trigger.classList.contains('split-type')
    ) {
      trigger.kill()
    }
  })
})
</script>
<template>
  <div id="statement-section" class="df-mar">
    <h2 id="statement" class="split-type light" data-bg-color="#6f1a0722" data-fg-color="var(--mocha)">
      <span>D</span>iscover the transformative power of Pilates. Whether you're a beginner or an
      experienced practitioner.
    </h2>
  </div>
</template>
<style scoped>
#statement-section {
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 0rem;
}
#statement {
  text-align: center;
  font-size: 3rem;
  line-height: 1em;
  width: 100%;
  font-variant-alternates: stylistic(1);
  will-change: color;
}
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
  #statement-section {
    padding-left: 4em;
    padding-right: 4em;
  }
  #statement {
    font-size: 3.5em;
  }
  .first-char {
    margin-left: 1.5em;
  }
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
  #statement {
    font-size: 4rem;
  }
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  #statement-section {
    padding: 8rem 4rem;
  }
  #statement {
    font-size: 4rem;
  }
  .first-char {
    margin-left: 2em;
  }
}
/* DESKTOP 2 [GLOBAL] */
@media (min-width: 1440px) {
  #statement {
    font-size: 4rem;
  }
  #main-c2a {
    padding-top: 0rem;
    padding-left: 18rem;
  }
}
/* DESKTOP 3 [GLOBAL] */
@media (min-width: 1728px) {
  #statement {
    font-size: 5rem;
  }
}
/* DESKTOP 4 (Standard pc Monitor) */
@media only screen and (min-width: 1920px) {
  #statement-section {
    padding-top: 18em;
    padding-bottom: 16em;
  }
  #statement {
    font-size: 6rem;
  }
}
/* DESKTOP 5 (4k Monitor) */
@media only screen and (min-width: 2160px) {
  #statement-section {
    padding-top: 14em;
    padding-bottom: 14em;
  }
  #statement {
    font-size: 12em;
  }
}
</style>
