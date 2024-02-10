<template>
  <div class="background">
    <div class="greytransparent">
      <h2>Creatures</h2>
      <CreatureSearch :searchText="searchText" v-on:search-creature="search" ></CreatureSearch>
      <div class="creatures-gallery">
        <MobCard v-for="mob in filteredCreatures" :key="mob.id" :creature="mob" :filteredCreatures="filteredCreatures"/>
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
      sortOrder: 'asc'
    }
  },
  created: function() {
    this.retrieveMobsData()
  },

  methods: {
    search(value) {
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
  },
  computed: {
    filteredCreatures() {
      let filtered = this.mobsData.filter(creature => {
        return creature.name.toLowerCase().includes(this.searchText.toLowerCase());
      });

      if (this.sortOrder === 'asc') {
        filtered.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      } else if (this.sortOrder === 'desc') {
        filtered.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }

      return filtered;
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
