<template>
  <div class="container-fluid">
    <ul class="nav">
      <li v-if="!loggedIn">
        <router-link :to="{ name: 'login' }">Login</router-link>
      </li>
      <li v-if="!loggedIn">
        <router-link :to="{ name: 'register' }">Registro</router-link>
      </li>
      <li v-if="loggedIn">
        <router-link :to="{ name: 'logout' }">Salir</router-link>
      </li>
    </ul>
    <div class="row">
      <div class="col-md-8 offset-md-2 ">
           <h1>¿Cómo funciona Securitygame?</h1>
              <div class="play-figure" v-if="!played" @click="played = true">
                <img src="./../../assets/icons/elipses.svg" alt="elipse">
                <img class="playing" src="./../../assets/icons/rectangle-playing.svg" alt="playing">
              </div>
            <iframe v-else width="560" height="315" :src="src" frameborder="0" allow="autoplay;" allowfullscreen></iframe>
            <br>
        <!-- <div class="col-md-12">
          <img src="../../assets/tuto.jpeg" class="img-fluid">
        </div> -->
      </div>
      <div class="col-md-4 m-auto">
          <router-link :to="{ name: 'menu' }">
            <button class="boton-login rounded">
              <img src="../../assets/Continuar.png" class="img-fluid">
            </button>
          </router-link>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      played : false,
      src:'https://www.youtube.com/embed/BNdPQU32p2Y'
    }
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  }
};
</script>
<style scoped>
.play-figure {
  position: relative;
  cursor: pointer;
  width: 310px;
  margin: auto;
}
.play-figure .playing {
  position: absolute;
  top: 117px;
  left: 117px;
}
</style>
