<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-md-6 mr-auto">
           <p class="h1 title">Securitygame</p>
              <div class="play-figure" v-if="!played" @click="played = true">
                <img src="./../../assets/icons/elipses.svg" alt="elipse">
                <img class="playing" src="./../../assets/icons/rectangle-playing.svg" alt="playing">
              </div>
              <div  v-else class="embed-responsive embed-responsive-4by3">
            <iframe    class="embed-responsive-item" :src="src" frameborder="0" allow="autoplay;" allowfullscreen></iframe>
            </div>
            <br>
      </div>
      <div  v-if="played" class="col-sm-6 col-md-4 m-auto">
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
  width: 210px;
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
@media (min-width: 344px) {  
  .title {font-size:1.5rem;} /*1rem = 16px*/
}
@media (min-width: 768px) {  
  .title {font-size:2rem;} /*1rem = 16px*/
}
 
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
  .title {font-size:2.5rem;} /*1rem = 16px*/
}
 
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {  
  .title {font-size:3rem;} /*1rem = 16px*/    
}
</style>
