<template>
    <header>
      <div class="left">
        <h1>
          Ring of Wisdom
        </h1>
      </div>
      <div class="menu">
        <router-link :to="{ name: 'HomePage' }">Home</router-link>
        <router-link :to="{ name: 'CreaturesPage' }">Creatures</router-link>
      </div>
      <div class="right">
        <button>Sign up</button>
        <button>Login</button>
      </div>
    </header>
</template>
  
  <script>
  export default {
    name: "HeaderComponent"
  }
  </script>
  
  <style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(30, 30, 30);
    height: 10vh;
    padding: 0 20px;
  }
  
  .left h1 {
    font-family: EldenTitleFont;
    font-size: 5vh;
    font-weight: bold;
    text-align: left;
    margin: 0;
    padding: 0;
  }
  
  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    width:50%;
  }

.menu a {
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  padding: 0.3rem 0.7rem 0.3rem 0.7rem;
}

.right button {
  font-family:EldenTitleFont;
  background-color: #C19D53;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
}
</style>