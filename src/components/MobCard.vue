<template>
    <div class="mob-card">
      <img class="picture" src="https://static.wikia.nocookie.net/eldenring/images/a/ab/ER_Godrick_Soldier_w_Sword.png"/>
      <div>
        <h2 class="name">Soldier</h2>
      </div>  
    </div>
  </template>
  
  <script>
      export default {
        name: 'MobCard'
      }
  </script>
  
  <style scoped>
      .mob-card {
        display: flex;
      }
  
      h2 {
           font-size: 20px;
      }
  </style>