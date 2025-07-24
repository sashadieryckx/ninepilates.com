<template>
  <svg width="100" height="100" viewBox="0 0 100 100">
    <circle
      cx="50"
      cy="50"
      r="45"
      stroke="var(--mocha)"
      stroke-width="2"
      fill="none"
    />
    <circle
      class="progress"
      cx="50"
      cy="50"
      r="45"
      stroke="var(--coral)"
      stroke-width="2"
      fill="none"
      stroke-linecap="round"
    />
  </svg>
</template>

<style>
.progress {
  stroke-dasharray: 283; /* 2πr (2 * 3.14 * 45) */
  stroke-dashoffset: 283;
  animation: fillProgress 1.5s linear forwards;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

@keyframes fillProgress {
  0% {
    stroke-dashoffset: 283;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
