<template>
  <div class="background">
    <div class="greytransparent">
      <h2>Creatures</h2>
      <div class="sortandsearch">
        <CreatureSearch :searchText="searchText" v-on:search-creature="search"></CreatureSearch>
        <CreatureSort v-model:sortOrder="sortOrder"></CreatureSort>
      </div>
      <div class="sortSlider">
        <label for="showBosses" class="boss-checkbox-label">Sort By HP (only for Bosses)</label>
        <input type="checkbox" v-model="toggleSortByHP" class="boss-checkbox" :checked="toggleSortByHP" />
        <CreatureSortSlider v-model:sortMinHP="sortMinHP" v-model:sortMaxHP="sortMaxHP"></CreatureSortSlider>
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
import CreatureSortSlider from '@/components/CreatureSortSlider.vue';
import getCreaturesData from '@/services/api/CreaturesRepository.js'

export default {
  name: 'CreaturesGallery',
  components: {
    CreatureCard,
    CreatureSearch,
    CreatureSort,
    CreatureSortSlider
  },
  data() {
    return {
      creaturesData: [],
      searchText: '',
      sortOrder: localStorage.getItem("creaturesSortType") || "AZName",
      toggleSortByHP: JSON.parse(localStorage.getItem("creatureToggleSortByHP")) || false,
      sortMinHP: localStorage.getItem("creaturesSortMinHP") || 0,
      sortMaxHP: localStorage.getItem("creaturesSortMaxHP") || 30000,
      filteredCreatures: [] // Filtered creatures (saved because of the toggle sort by HP)
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
      this.creaturesData = await getCreaturesData();
      this.updateFilteredCreatures(); // Update filtered creatures after retrieving data
    },
    handleSearch(searchText) {
      this.searchText = searchText;
    },
    clearSearch() {
      this.searchText = "";
    },
    selectSortOrder(selectedValue) {
      this.sortOrder = selectedValue;
      this.updateFilteredCreatures(); // Update filtered creatures after changing sort order
    },
    updateHPRange(range) {
      this.sortMinHP = range.min;
      this.sortMaxHP = range.max;
      console.log("Min HP:", this.sortMinHP);
      console.log("Max HP:", this.sortMaxHP);
      this.updateFilteredCreatures(); // Update filtered creatures after changing HP range
    },
    updateFilteredCreatures() {
      this.filteredCreatures = this.filterCreatures();
    },
    filterCreatures() {
      let filtered = this.creaturesData.filter(creature => {
        return creature.name.toLowerCase().includes(this.searchText.toLowerCase());
      });

      if (this.sortOrder.includes('boss')) {
        filtered = filtered.filter(creature => creature.boss === 1);
      } else if (this.sortOrder.includes('mob')) {
        filtered = filtered.filter(creature => creature.boss === 0);
      }

      if (this.toggleSortByHP) {
        console.log("toggleSortByHP:", this.toggleSortByHP);
        filtered = filtered.filter(creature => {
          if(creature.healthPoints === undefined) { // Pour enlever les créatures qui n'ont pas de champ HP
            return false;
          }
          if(creature.healthPoints.length > 15) { // Pour enlever les créatures qui ont des phrases au lieu d'HP
            return false;
          }
          const healthPoints = parseInt(creature.healthPoints.replace(/\D/g, ''));
          const isInRange = healthPoints > this.sortMinHP && healthPoints < this.sortMaxHP;
          return isInRange;
        });
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
    },
  },
  watch: {
    sortOrder(newCreaturesSortType) {
      localStorage.setItem("creaturesSortType", newCreaturesSortType);
      this.updateFilteredCreatures(); // Update filtered creatures after changing sort order
    },
    toggleSortByHP(ToggleSortByHP) {
      localStorage.setItem("creatureToggleSortByHP", ToggleSortByHP);
        this.updateFilteredCreatures(); // Update filtered creatures after changing HP sort
    },
    sortMinHP(newSortMinHP) {
      localStorage.setItem("creaturesSortMinHP", newSortMinHP);
      this.updateFilteredCreatures(); // Update filtered creatures after changing min HP
    },
    sortMaxHP(newSortMaxHP) {
      localStorage.setItem("creaturesSortMaxHP", newSortMaxHP);
      this.updateFilteredCreatures(); // Update filtered creatures after changing max HP
    },
  }
}
</script>

<style scoped>
.sortSlider {
  display:flex;
  flex-direction:column;
  margin:auto;
  width:70%;
  align-items:center;
}
.sortSlider > * {
  margin-bottom: 10px;
}

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
