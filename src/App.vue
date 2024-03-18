<template>
  <HeaderComponent/>
  <div id="app-ringofwisdom" class="app">
    <router-view></router-view>
  </div>
  <FooterComponent/>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import FooterComponent from './components/Footer.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>

h1, h2 {
  color:#C19D53;
  text-align:center;
}

h2 {
  font-size:2rem;
  font-weight:bold;
}

</style>
