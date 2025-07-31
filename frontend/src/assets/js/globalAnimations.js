import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// GLOBAL PARALLAX
export function Parallax() {
  ScrollTrigger.batch('.parallax', {
    onEnter: (elements) => {
      elements.forEach((el) => {
        if (!el.hasAttribute('data-parallax-initialized')) {
          gsap.fromTo(el,
            {
              yPercent: 10
            },
            {
              yPercent: -10,
              ease: 'ease',
              scrollTrigger: {
                trigger: el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
                invalidateOnRefresh: true,
                markers: false
              }
            }
          )
          el.setAttribute('data-parallax-initialized', 'true')
        }
      })
    }
  })
  ScrollTrigger.refresh()
}
export function initParallaxForElement(element) {
  if (element && element.classList.contains('parallax') && !element.hasAttribute('data-parallax-initialized')) {
    gsap.fromTo(element,
      {
        yPercent: 10
      },
      {
        yPercent: -10,
        ease: 'ease',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          invalidateOnRefresh: true,
          markers: false
        }
      }
    )
    element.setAttribute('data-parallax-initialized', 'true')
  }
}
export function cleanupParallax() {
  // Remove all parallax-related ScrollTriggers
  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.vars && trigger.vars.trigger && trigger.vars.trigger.classList.contains('parallax')) {
      trigger.kill()
    }
  })

  // Remove initialization markers
  document.querySelectorAll('.parallax[data-parallax-initialized]').forEach(el => {
    el.removeAttribute('data-parallax-initialized')
  })
}