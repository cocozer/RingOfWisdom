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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

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
