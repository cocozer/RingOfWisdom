<template>
  <div class="background">
    <div class="greytransparent">
      <h2>Creatures</h2>
      <div class="sortandsearch">
        <CreatureSearch :searchText="searchText" v-on:search-creature="search" ></CreatureSearch>
        <CreatureSort v-model:sort-order="sortOrder"/>
      </div>
      <div class="creatures-gallery">
        <CreatureCard v-for="mob in filteredCreatures" :key="mob.id" :creature="mob" :filteredCreatures="filteredCreatures"/>
      </div>
    </div>
  </div>
</template>

<script>
import CreatureCard from './CreatureCard.vue'
import CreatureSearch from "@/components/CreatureSearch.vue";
import CreatureSort from '@/components/CreatureSort.vue';
import getCreaturesData from '@/services/api/CreaturesRepository.js'

export default {
  name: 'CreaturesGallery',
  components: {
    CreatureCard,
    CreatureSearch,
    CreatureSort
},
  data() {
    return {
      creaturesData: [],
      searchText: '',
      sortOrder: localStorage.getItem("creaturesSortType") || "AZName"
    }
  },
  created: function() {
    this.retrieveCreaturesData()
  },

  methods: {
    search(value) {
       this.searchText = value
    },
    async retrieveCreaturesData() {
      this.creaturesData = await getCreaturesData()
    },
    handleSearch(searchText) {
      this.searchText = searchText;
    },
    clearSearch : function(event) {
      this.searchText="";
    },
    selectSortOrder(selectedValue) {
      this.sortOrder = selectedValue;
    },
  },
  computed: {
    filteredCreatures() {
      let filtered = this.creaturesData.filter(creature => {
        return creature.name.toLowerCase().includes(this.searchText.toLowerCase());
      });

      if (this.sortOrder.includes('boss')) {
        filtered = filtered.filter(creature => creature.boss === 1);
      } else if (this.sortOrder.includes('mob')) {
        filtered = filtered.filter(creature => creature.boss === 0);
      }

      if (this.sortOrder.includes('asc')) {
        filtered.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      } else if (this.sortOrder.includes('desc')) {
        filtered.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
      return filtered;
    }
  },
  watch: {
    sortOrder: function(newCreaturesSortType) {
      localStorage.setItem("creaturesSortType", newCreaturesSortType)
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
  background: url(/background_creatures.jpeg);
  min-height: 90vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width:100%;
  margin-top:0;
}

.sortandsearch {
  display:flex;
  margin:auto;
  width:70%;
  align-items:center;
}

@media only screen and (max-width: 650px) {
  .sortandsearch {
    flex-direction: column;
  }
}
</style>
