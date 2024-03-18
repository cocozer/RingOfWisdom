<template>
  <div :style="backgroundStyle" class="parallax"></div>
  <section class="welcome">
    <img class="tarnished" src="/3ZearNPtNrAajP1rLScmQRbJ.avif">
    <p>Welcome to "Ring of Wisdom", a dedicated website for Elden Ring, the highly anticipated game from FromSoftware and George R.R. Martin. Utilizing the <a href="https://eldenring.fanapis.com/">"Elden Ring fan apis"</a> API, this platform provides a first glimpse into the world of Elden Ring as part of a front-end web project using Vue.js. Although the site is under development and does not offer detailed statistics, in-depth analyses, or a comprehensive wiki, it provides basic information about this epic game. Explore the site to discover the essential elements of Elden Ring and follow along as new features are developed.</p>
  </section>  
  <section class="creatures">
    <div class="present-page">
      <div>
        <h2>Creatures page</h2>
        <p>On this page, you can find various creatures from the game as well as bosses. Search and sort functions are implemented. You can test them out. By clicking on the different creatures, you can also get more information about them, such as sometimes the loot they can drop or their location.</p>
        <router-link :to="{ name: 'CreaturesPage' }">Go to creatures Page</router-link>
      </div>
      <img src="/godfrey.jpeg">
    </div>
  </section>  
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      backgroundStyle: {
        background: `url("/background.jpeg") no-repeat center`,
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
        pointerEvents: 'none',
        position: 'fixed',
        zIndex: '-1',
        top: '0',
      }
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const parallax = document.querySelector('.parallax');
      const welcomeSection = document.querySelector('.welcome');
      const creaturesSection = document.querySelector('.creatures');
      const welcomeSectionTop = welcomeSection.offsetTop;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= welcomeSectionTop) {
        this.backgroundStyle.background = `url("/background_2.jpeg") no-repeat center`;
      } else {
        this.backgroundStyle.background = `url("/background.jpeg") no-repeat center`;
      }
    }
  }
}
</script>

<style scoped>

.tarnished {
  margin: auto;
  display:block;
  margin-top:-35rem;
  width:50%;
}
.welcome, .creatures {
  min-height: 100vh;
  width: 100%;
  margin-top: 90vh;
}


.welcome {
  background-color: rgb(30, 30, 30);
  padding: 15%;
}

.creatures {
  background: url(/texture_clouds.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 3rem;
}

.present-page {
  height:30vh;
  display:flex;
  margin:6rem;
  align-items:center;
}

.present-page div {
  display:flex;
  flex-direction:column;
  align-items:center;
}
.present-page h2, .present-page p, .welcome p {
  text-align:center;
  color:white;
}

.present-page img {
  display:block;
  width:50%;
  margin:3rem;
}

h2 {
  font-size:2.2rem;
}

@media only screen and (max-width: 1280px){
  .tarnished{
    margin-top:-30rem;
    width:65%;
  }
  .present-page {
    height:50vh;
    width:100%;
  }
}

@media only screen and (max-width: 960px){
  .tarnished{
    margin-top:-27rem;
    width:70%;
  }
  .present-page {
    height:80vh;
    width:auto;
    margin:auto;
  }
  .present-page img {
    display:none;
  }
}

@media only screen and (max-width: 700px){
  .tarnished{
    margin-top:-23rem;
    width:85%;
  }
}


@media only screen and (max-width: 600px){
  .tarnished{
    margin-top:-20rem;
    width:85%;
  }
}

@media only screen and (max-width: 450px){
  .tarnished{
    margin-top:-15rem;
    width:100%;
  }
}

</style>