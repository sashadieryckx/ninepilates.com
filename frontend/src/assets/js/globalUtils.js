import { gsap } from 'gsap'

// CONTACT OPEN ANIMATION
let contactTimeline = null
export function ContactOpen() {
  const container = document.querySelector('#contact-container')
  const contactWrapper = document.querySelector('#contact-wrapper')

  if (contactTimeline) {
    contactTimeline.kill()
  }

  contactTimeline = gsap.timeline({
    paused: true,
  })
  contactTimeline.set(
    container,
    {
      height: '100vh',
    },
    0,
  )
  contactTimeline.set(
    contactWrapper,
    {
      visibility: 'visible',
    },
    0,
  )
  contactTimeline.to(
    container,
    {
      opacity: 1,
      ease: 'power2.out',
      duration: .5,
    },
    0,
  )
  contactTimeline.to(
    contactWrapper,
    {
      height: '100%',
      ease: 'power4.out',
      duration: 1.5,
    },
    0,
  )
  contactTimeline.to(
    '#contact-modal h2',
    {
      opacity: '100%',
      yPercent: 0,
      ease: 'power2.out',
      duration: 0.5,
    },
    0.5,
  )
  contactTimeline.to(
    '#contact-modal h5',
    {
      opacity: '100%',
      yPercent: 0,
      ease: 'power2.out',
      duration: 0.5,
    },
    0.6,
  )
  contactTimeline.to(
    '.details p',
    {
      opacity: '100%',
      yPercent: 0,
      ease: 'power2.out',
      duration: 1,
      stagger: .1,
    },
    0.7,
  )
  contactTimeline.to(
    '.contact-close',
    {
      opacity: '100%',
      yPercent: 0,
      ease: 'power3.out',
      duration: 0.5,
    },
    1,
  )
  contactTimeline.to(
    '#contact-spline',
    {
      opacity: .95,
      ease: 'power1.out',
      duration: 1,
    },
    1,
  )

  contactTimeline.play(0)
  return contactTimeline
}
export function ContactClose() {
  if (contactTimeline) {
    contactTimeline.reverse().then(() => {
      // Reset the container and wrapper to initial state after animation completes
      const container = document.querySelector('#contact-container')
      const contactWrapper = document.querySelector('#contact-wrapper')

      gsap.set(container, {
        height: 0,
        opacity: 0
      })

      gsap.set(contactWrapper, {
        visibility: 'hidden',
        height: 0
      })
    })
  }
}
