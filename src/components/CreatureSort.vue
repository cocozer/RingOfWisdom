<template>
  <div class="creature-sort">
      <select id="sort-button" :value="sortOrder" name="creatures" @input="selectSortOrder">
          <option class="option-sort" value="name_asc">Sort the creatures...</option>
          <option class="option-sort" value="name_asc">Name asc</option>
          <option class="option-sort" value="name_desc">Name desc</option>
          <option class="option-sort" value="boss_asc">Boss asc</option>
          <option class="option-sort" value="boss_desc">Boss desc</option>
          <option class="option-sort" value="mob_asc">Mob asc</option>
          <option class="option-sort" value="mob_desc">Mob desc</option>
      </select>
  </div>
</template>
  
<script>
export default {
  name: 'CreatureSort',
  props: ['sortOrder'],
  emits: ["update:sortOrder"],
  methods: {
      selectSortOrder(event) {
          const selectedSortOrder = event.target.value;
          this.$emit('update:sortOrder', selectedSortOrder);
      }
  }
}
</script>
  
<style scoped>
#sort-button {
  align-self: flex-end;
}

#sort-button{
  border: transparent;
  padding: 0.6em 2.3em;
  background: rgba(0, 0, 0, 0);
  cursor: pointer;
  font-size: 1em;
  color: #C19D53;
  background-image: linear-gradient(45deg, transparent 50%, #000000 50%);
  background-position: 25%;
  background-size: 400%;
  -webkit-transition: 500ms ease-in-out, color 500ms ease-in-out;
  transition: 500ms ease-in-out, color 500ms ease-in-out;
}

.option-sort {
  background: black;
}
#sort-button:hover{
  color: #C19D53;
  background-position: 100%;
}
</style>