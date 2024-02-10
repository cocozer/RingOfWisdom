<template>
    <div class="creature-search">
        <input name="creature" type="text" :value="searchText" @input="handleSearch" placeholder="Search creature...">
        <div class="button-container">
          <button v-if="searchText" @click="clearSearch"><span class="close hairline"></span></button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CreatureSearch',
  props: {
    searchText: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleSearch(event) {
      this.$emit('search-creature', event.target.value);
    },
    clearSearch : function(event) {
        this.$emit('search-creature', "");
    }
  }
}
</script>

<style scoped>
.creature-search {
  margin:auto;
  width:70%;
  display:flex;
  align-items:center;
}

.creature-search input {
  font-family:EldenFont;
  background: 0;
  border: 0;
  border-bottom: 1px solid white;
  color:#C19D53;
  border-radius: 0;
  width: 80%;
  font-size:10pt;
  padding: 0.5rem 1rem;
  margin: 2rem 1rem 2rem 2rem;
  outline: none;
}
.creature-search input::placeholder {
  color:#C19D53;
  font-size:10pt;
  font-family:EldenFont;
}
.close {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 50px;
  overflow: hidden;
}

.close:hover::before,
.close:hover::after {
  background: #C19D53;
}

.close::before,
.close::after {
  content: '';
  position: absolute;
  height: 1px; /* Hairline thickness */
  width: 100%;
  top: 50%;
  left: 0;
  margin-top: -1px; /* Center vertically */
  background: white;
}

.close::before {
  transform: rotate(45deg);
}

.close::after {
  transform: rotate(-45deg);
}
button {
  background:none;
  border:none;
}
</style>