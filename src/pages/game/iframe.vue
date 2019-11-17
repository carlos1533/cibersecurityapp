<template>
<div>
    <template v-if="video=='video01'">
         <div class="play-figure" v-if="!played" @click="played = true">
                <img src="./../../assets/icons/elipses.svg" alt="elipse">
                <img class="playing" src="./../../assets/icons/rectangle-playing.svg" alt="playing">
              </div>

    <iframe v-else width="560" height="315" :src="src1" frameborder="0" allow="autoplay;" allowfullscreen></iframe>
     <div  v-if="played" class="col-md-4 m-auto">
          <router-link :to="{ name: 'videoGamePlay1' }">
            <button class="boton-login rounded">
              <img src="../../assets/Continuar.png" class="img-fluid">
            </button>
          </router-link>
    </div>
    </template>
        <template v-if="video=='video02'">
     <div class="play-figure" v-if="!played" @click="played = true">
                <img src="./../../assets/icons/elipses.svg" alt="elipse">
                <img class="playing" src="./../../assets/icons/rectangle-playing.svg" alt="playing">
              </div>      
    <iframe v-else width="560" height="315" :src="src2" frameborder="0" allow="autoplay;" allowfullscreen></iframe>
     <div  v-if="played" class="col-md-4 m-auto">
          <router-link :to="{ name: 'videoGamePlay2' }">
            <button class="boton-login rounded">
              <img src="../../assets/Continuar.png" class="img-fluid">
            </button>
          </router-link>
    </div>
    </template>
        <template v-if="video=='video03'">
     <div class="play-figure" v-if="!played" @click="played = true">
                <img src="./../../assets/icons/elipses.svg" alt="elipse">
                <img class="playing" src="./../../assets/icons/rectangle-playing.svg" alt="playing">
              </div>      
    <iframe v-else width="560" height="315" :src="src3" frameborder="0" allow="autoplay;" allowfullscreen></iframe>
     <div  v-if="played" class="col-md-4 m-auto">
          <router-link :to="{ name: 'videoGamePlay3' }">
            <button class="boton-login rounded">
              <img src="../../assets/Continuar.png" class="img-fluid">
            </button>
          </router-link>
    </div>
    </template>
        <template v-if="video=='video04'">
    <div class="play-figure" v-if="!played" @click="played = true">
                <img src="./../../assets/icons/elipses.svg" alt="elipse">
                <img class="playing" src="./../../assets/icons/rectangle-playing.svg" alt="playing">
              </div>      
    <iframe v-else width="560" height="315" :src="src4" frameborder="0" allow="autoplay;" allowfullscreen></iframe>
    <div  v-if="played" class="col-md-4 m-auto">
          <router-link :to="{ name: 'videoGamePlay4' }">
            <button class="boton-login rounded">
              <img src="../../assets/Continuar.png" class="img-fluid">
            </button>
          </router-link>
    </div>
    </template>
        <template v-if="video=='video05'">
    <div class="play-figure" v-if="!played" @click="played = true">
                <img src="./../../assets/icons/elipses.svg" alt="elipse">
                <img class="playing" src="./../../assets/icons/rectangle-playing.svg" alt="playing">
              </div>      
    <iframe v-else width="560" height="315" :src="src5" frameborder="0" allow="autoplay;" allowfullscreen></iframe>
     <div  v-if="played" class="col-md-4 m-auto">
          <router-link :to="{ name: 'videoGamePlay5' }">
            <button class="boton-login rounded">
              <img src="../../assets/Continuar.png" class="img-fluid">
            </button>
          </router-link>
    </div>
    </template>
        <template v-if="video=='video06'">
    <div class="play-figure" v-if="!played" @click="played = true">
                <img src="./../../assets/icons/elipses.svg" alt="elipse">
                <img class="playing" src="./../../assets/icons/rectangle-playing.svg" alt="playing">
              </div>      
    <iframe  v-else width="560" height="315" :src="src6" frameborder="0" allow="autoplay;" allowfullscreen></iframe>
     <div  v-if="played" class="col-md-4 m-auto">
          <router-link :to="{ name: 'videoGamePlay6' }">
            <button class="boton-login rounded">
              <img src="../../assets/Continuar.png" class="img-fluid">
            </button>
          </router-link>
    </div>
    </template>
</div>

</template>

<script>
export default {
    data(){
        return{
            played : false,
            video:'',
            src1:`https://drive.google.com/file/d/1n3F9dEFy-2QRn-fAW76z6bVgR4ROwWFB/preview`,
            src2:`https://drive.google.com/file/d/1nfvXfWWHPqSOM3lXOiwueuJNFmV83cJK/preview`,
            src3:`https://drive.google.com/file/d/1ETjv7G1vAtERbw7IaYeJ5_QRfU4Eckcz/preview`,
            src4:`https://drive.google.com/file/d/1LTC67TtAi7PIuy1TUXmw9KsAi2m_bIg1/preview`,
            src5:`https://drive.google.com/file/d/1R3Uszv0_A00kJuj1Z1Gc_AYkbnuNJeu7/preview`,
            src6:`https://drive.google.com/file/d/1-Iul-2zEWFSmh4v5s_5pNSeSCSwVUIrr/preview`
        }
    },
    props:{
    },
     mounted() {
            this.video = this.$route.query.video;
    }
}
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