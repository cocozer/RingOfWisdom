<template>
  <div class="Creature-card" @click="showCreature">
    <img class="picture" :src="creature.image || defaultImage"/>
    <div>
      <h2 class="name">{{creature.name}}</h2>
      <p v-if="creature.healthPoints">{{creature.healthPoints}} HP</p>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'CreatureCard',
  props: {
    creature: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  data() {
    return {
      defaultImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202107/1612/Y5RHNmzAtc6sRYwZlYiKHAxN.png'
    };
  },
  methods: {
    showCreature() {
      this.$emit("show-creature", this.creature);
    },
  },
}
</script>

<style scoped>
.Creature-card {
  border: solid 2px #C19D53;
  margin: 3rem;
  width: 17rem;
  height: 15rem;
  transition: border-color 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.Creature-card:hover {
  border-color: #FFD700;
  transform: scale(1.15);
}

h2 {
  margin: 0rem;
  font-size: 1rem;
  text-align: center;
  font-weight: bolder;
}

img {
  object-fit: cover;
  width: 100%;
  height: 70%;
}

p {
  text-align: center;
  margin: 0.2rem;
}
  </style>
