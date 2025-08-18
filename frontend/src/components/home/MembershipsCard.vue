<script setup>
import JoinNow from '@/components/actions/C2ASignUp.vue'
import LearnMore from '@/components/actions/C2ALearnMore.vue'
defineProps({
  memberships: {
    type: Object,
    required: true,
  },
  reverse: {
    type: Boolean,
    default: false,
  },
})
</script>
<template>
  <div class="membership-card interactive" :class="{ reverse: reverse }">
    <div class="img-container">
      <img :src="memberships.image" alt="Membership Image" class="img" />
    </div>
    <div class="content">
      <div class="heading">
        <h3 class="bold">{{ memberships.title }}</h3>
        <h4 class="roman">{{ memberships.price }}/mo</h4>
      </div>
      <div class="info">
        <p class="italic">{{ memberships.classes }}</p>
        <p class="light">{{ memberships.description }}</p>
      </div>
      <div class="c2a interactive">
        <a :href="memberships.signUp">
          <JoinNow />
        </a>
        <LearnMore />
      </div>
    </div>
  </div>
</template>
<style scoped>
.membership-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-width: 400px;
  padding-left: 1rem;
  padding-right: 1rem;
}
.img-container {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 25px 25px 0 0;
}
.img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  border-radius: 0 0 25px 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 4rem;
  background-color: #f3ece967;
}
.heading {
  margin-bottom: 1.5rem;
}
h3 {
  font-size: 3rem;
}
h4 {
  font-size: 2.5rem;
  margin-top: 0.5rem;
}
.c2a {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;
  width: 100%;
}
p {
  font-size: 1rem;
}
.info :nth-child(1) {
  margin-bottom: 1rem;
}
/* TABLET 1 [GLOBAL] */
@media (min-width: 768px) {
}
/* TABLET 2 [GLOBAL] */
@media (min-width: 1000px) {
}
/* DESKTOP 1 [GLOBAL] */
@media (min-width: 1280px) {
  .membership-card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 60%;
    min-height: 600px;
    padding: 0;
    margin-bottom: 4rem;
  }
  .membership-card.reverse {
    grid-template-columns: repeat(2, 1fr);
  }
  .membership-card.reverse .img-container {
    order: 2;
    border-radius: 25px;
  }
  .membership-card.reverse .content {
    order: 1;
    border-radius: 25px 0 0 25px;
  }
  .img-container {
    height: 100%;
    border-radius: 25px;
  }
  .content {
    position: relative;
    justify-content: flex-start;
    padding: 1rem 2rem 2rem 2rem;
    max-width: 100%;
    height: 100%;
    background-color: transparent;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    border-radius: 0px 25px 25px 0px;
    margin: 0;
  }
  h3 {
    font-size: 4rem;
  }
  p {
    font-size: 1.25rem;
  }
  .c2a {
    position: absolute;
    bottom: 1rem;
    left: 0;
    padding-left: 2rem;
    padding-right: 2rem;
    width: 100%;
  }
}
</style>
