<template>
  <div class="background">
    <div class="greytransparent">
      <h2>Creatures</h2>
      <CreatureSearch :searchText="searchText" v-on:search-creature="toto" ></CreatureSearch>
      <div class="creatures-gallery">
        <MobCard v-for="creature in mobsData" :key="creature.id" :name="creature.name" :image="creature.image" :boss="creature.boss"/>
      </div>
    </div>
  </div>
</template>
  
<script>
import MobCard from './MobCard.vue'
import CreatureSearch from "@/components/CreatureSearch.vue";
import getMobsData from '@/services/api/mobsRepository.js'

export default {
  name: 'CreaturesGallery',
  components: {
    MobCard,
    CreatureSearch,
  },
  data() {
    return {
      mobsData: [],
      searchText: '',
    }
  },
  created: function() {
    this.retrieveMobsData()
  },
  methods: {
    toto(value) {
       this.searchText = value
    },
    async retrieveMobsData() {
      this.mobsData = await getMobsData()
    },
    handleSearch(searchText) {
      this.searchText = searchText;
    },
    clearSearch : function(event) {
      this.searchText="";
    }
  }
}
</script>

<style scoped>
.creatures-gallery {
  display: flex;
  flex-wrap:wrap;
  margin:auto;
  justify-content:center;
}

.background {
  background: url(/public/background_creatures.jpeg);
  min-height: 90vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width:100%;
  margin-top:0;
}
</style>
