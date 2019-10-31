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
    <div>
    <router-link :to="{ name: 'videoGamePlay' }">
        <button type="button" class="btn btn-primary">Responder!</button>
    </router-link>
    <h1>Video01</h1>
              <!-- <div class="play-figure" v-if="!played" @click="played = true">
                <img src="./../../assets/icons/elipses.svg" alt="elipse">
                <img class="playing" src="./../../assets/icons/rectangle-playing.svg" alt="playing">
              </div> -->
            <iframe width="560" height="315" :src="src1" frameborder="0" allow="autoplay;" allowfullscreen></iframe>
            <br>
    </div>
        <div>
           <h1>Video02</h1>
              <!-- <div class="play-figure" v-if="!played" @click="played = true">
                <img src="./../../assets/icons/elipses.svg" alt="elipse">
                <img class="playing" src="./../../assets/icons/rectangle-playing.svg" alt="playing">
              </div> -->
            <iframe width="560" height="315" :src="src2" frameborder="0" allow="autoplay;" allowfullscreen></iframe>
            <br>
    </div>
        <div>
           <h1>Video03</h1>
              <!-- <div class="play-figure" v-if="!played" @click="played = true">
                <img src="./../../assets/icons/elipses.svg" alt="elipse">
                <img class="playing" src="./../../assets/icons/rectangle-playing.svg" alt="playing">
              </div> -->
            <iframe width="560" height="315" :src="src3" frameborder="0" allow="autoplay;" allowfullscreen></iframe>
            <br>
    </div>
        <div>
           <h1>Video04</h1>
              <!-- <div class="play-figure" v-if="!played" @click="played = true">
                <img src="./../../assets/icons/elipses.svg" alt="elipse">
                <img class="playing" src="./../../assets/icons/rectangle-playing.svg" alt="playing">
              </div> -->
            <iframe  width="560" height="315" :src="src4" frameborder="0" allow="autoplay;" allowfullscreen></iframe>
            <br>
    </div>
        <div>
           <h1>Video05</h1>
              <!-- <div class="play-figure" v-if="!played" @click="played = true">
                <img src="./../../assets/icons/elipses.svg" alt="elipse">
                <img class="playing" src="./../../assets/icons/rectangle-playing.svg" alt="playing">
              </div> -->
            <iframe width="560" height="315" :src="src5" frameborder="0" allow="autoplay;" allowfullscreen></iframe>
            <br>
    </div>
        <div>
           <h1>Video06</h1>
              <!-- <div class="play-figure" v-if="!played" @click="played = true">
                <img src="./../../assets/icons/elipses.svg" alt="elipse">
                <img class="playing" src="./../../assets/icons/rectangle-playing.svg" alt="playing">
              </div> -->
            <iframe  width="560" height="315" :src="src6" frameborder="0" allow="autoplay;" allowfullscreen></iframe>
            <br>
    </div>
  </div>    
</template>

<script>
export default {    
 data() {
    return {
     played : false,
    src1:'https://drive.google.com/file/d/1n3F9dEFy-2QRn-fAW76z6bVgR4ROwWFB/preview',
    src2:'https://drive.google.com/file/d/1nfvXfWWHPqSOM3lXOiwueuJNFmV83cJK/preview',
    src3:'https://drive.google.com/file/d/1ETjv7G1vAtERbw7IaYeJ5_QRfU4Eckcz/preview',
    src4:'https://drive.google.com/file/d/1LTC67TtAi7PIuy1TUXmw9KsAi2m_bIg1/preview',
    src5:'https://drive.google.com/file/d/1R3Uszv0_A00kJuj1Z1Gc_AYkbnuNJeu7/preview',
    src6:'https://drive.google.com/file/d/1-Iul-2zEWFSmh4v5s_5pNSeSCSwVUIrr/preview'
    };
  },   
 computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  }
}
</script>

<style>

</style>