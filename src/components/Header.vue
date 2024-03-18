<template>
  <header>
    <div class="left">
      <h1>
        Ring of Wisdom
      </h1>
    </div>
    <div class="right" v-if="isMobile">
      <div class="burger-icon" @click="toggleMenu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="menu"
     :class="{ 'open': isMenuOpen && isMobile, 'notdisplayed': isMobile && !isMenuOpen }">
      <router-link :to="{ name: 'HomePage' }">Home</router-link>
      <router-link :to="{ name: 'CreaturesPage' }">Creatures</router-link>
    </div>
    <div class="right" v-if="!isMobile">
      <span>Welcome ;)</span>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      isMenuOpen: false,
      isMobile: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    checkMobile() {
      this.isMobile = window.innerWidth <= 749;
    }
  },
  mounted() {
    window.addEventListener('resize', this.checkMobile);
    this.checkMobile();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkMobile);
  }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(30, 30, 30);
  height: 10vh;
  padding: 0 20px;
  position: relative;
}

.left h1 {
  font-family: EldenTitleFont;
  font-size: 3rem;
  font-weight: bold;
  text-align: left;
  margin: 0;
  padding: 0;
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu a {
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  padding: 0.3rem 0.7rem 0.3rem 0.7rem;
}

.right button {
  font-family: EldenTitleFont;
  background-color: #c19d53;
  color: white;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
}

.burger-icon {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  z-index: 1100;
}

.burger-icon div {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 3px;
}

.menu.open {
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: rgb(30, 30, 30);
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  z-index: 1000;
}

@media only screen and (min-width: 750px) {
  .menu.open {
    position: relative;
    flex-direction: row;
    background-color: transparent;
    width: auto;
    padding: 0;
  }
}
@media only screen and (max-width: 500px) {
  .left h1 {
    font-size: 2rem;
  }
}
@media only screen and (max-width: 300px) {
  .left h1 {
    font-size: 1.5rem;
  }
}

.menu.notdisplayed {
    display:none;
  }
</style>
