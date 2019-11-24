<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3 ">
           <h1 class="title">Securitygame</h1>
              <div class="play-figure" v-if="!played" @click="played = true">
                <img src="./../../assets/icons/elipses.svg" alt="elipse">
                <img class="playing" src="./../../assets/icons/rectangle-playing.svg" alt="playing">
              </div>
            <iframe v-else width="560" height="315" :src="src" frameborder="0" allow="autoplay;" allowfullscreen></iframe>
            <br>
      </div>
      <div  v-if="played" class="col-md-4 m-auto">
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
      src:'https://drive.google.com/file/d/1pS1zkpGjAdhN0AURgzqzp122WvMH-eJj/preview'
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
@import url("https://fonts.googleapis.com/css?family=Press+Start+2P");
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
.title {
  font-family: "Press Start 2P", "Helvetica", "Arial", sans-serif;
}
</style>
