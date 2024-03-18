<template>
  <footer>
    <div class="contact">
      <h3>Contact :</h3>
      <p>email : corentin.pak@gmail.com</p>
      <p>discord : cocookie</p>
    </div>
    <div class="middle">
      <span>Website made by Corentin Pak.</span>
      <span>All right reserved.</span>
    </div>
    <div class="social-medias">
      <a href="https://www.linkedin.com/in/corentin-pak-327703203/"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
      <a href="https://www.behance.net/corentinpak"><font-awesome-icon :icon="['fab', 'behance-square']" /></a>
    </div>
  </footer>
</template>
  
<script>
export default {
  name: "FooterComponent"
}
</script>
  
<style scoped>
footer, .flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align:center;
}
footer {
  background-color: rgb(30, 30, 30);
  padding: 4rem;
}
.contact,
.middle,
.social-medias {
  flex-grow: 1;
  width:33%;
}

.social-medias {
  color: #C19D53;
  font-size: 3rem;
}

.social-medias a {
  display: block;
  font-size: 1.2rem;
}

.middle span {
  display: block;
}

.contact {
  text-align:left;
}

@media only screen and (max-width: 750px) {
  footer {
    flex-direction:column;
    height:70vh;
    text-align:center;
    align-items:center;
  }
  .contact,
  .middle,
  .social-medias {
    width:100%;
    text-align:center;
  }
  .social-medias a{
    font-size: 2rem;
  }
}


@media only screen and (max-width: 400px) {
  footer {
    height:100vh;
  }
  .social-medias a{
    font-size: 3rem;
  }
}
</style>