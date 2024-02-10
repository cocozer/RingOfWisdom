<template>
  <div class="mob-card">
    <img class="picture" v-bind:src="creature.image || defaultImage"/>
    <div>
      <h2 class="name">{{creature.name}}</h2>
      <!-- <p class="type">{{type}}</p> -->
    </div>  
  </div>
</template>

<script>
export default {
  name: 'MobCard',
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
  }
}
</script>

<style scoped>
    .mob-card {
      border: solid 2px #C19D53;
      margin: 3rem;
      width:14rem;
      height:13rem;
    }

    h2 {
          margin:0rem;
          font-size: 1rem;
          text-align:center;
          font-weight:bolder;
    }
    img {
      object-fit: cover;
      width:100%;
      height:80%;
    }
</style>