<template>
  <div class="c2a-container">
    <button>
      <p class="roman">Book Your Class</p>
    </button>
  </div>
</template>
<style scoped>
.c2a-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: 100%;
}
.c2a-container button {
  background-color: #1615137e;
  backdrop-filter: blur(5px);
  color: var(--blanco);
  border: none;
  border-radius: 50px;
  border: 1px solid var(--coral);
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
.c2a-container button p {
  font-size: 1.25rem;
  transform: translateY(-8%);
  color: var(--coral);
}
</style>
