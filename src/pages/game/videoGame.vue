<template>
  <div
  >
    <template v-if="!this.$store.getters.hasPlayedVideo1 && !this.continue
    && !this.$store.getters.hasPlayedVideo2
    && !this.$store.getters.hasPlayedVideo3
    && !this.$store.getters.hasPlayedVideo4
    && !this.$store.getters.hasPlayedVideo5
    && !this.$store.getters.hasPlayedVideo6
    ">
      <div class="header">
        <h1>Mira y responde</h1>
        <div>
          <span
            class="label"
          >Mira los videos atentamente y responde correctamente. Solo podrás responder la pregunta 1 vez. Por cada respuesta correcta gana 10 puntos ¡Buena Suerte!</span>
          <router-link :to="{ name: 'menu' }">
            <button type="button" class="btn btn-secondary light">Volver</button>
          </router-link>
          <button type="button" class="btn btn-primary" @click="start()">Continuar</button>
        </div>
      </div>
    </template>
    <template v-if="this.$store.getters.hasPlayedVideo1 === true || this.continue
    || this.$store.getters.hasPlayedVideo2 ||
     this.$store.getters.hasPlayedVideo3 ||
      this.$store.getters.hasPlayedVideo4 ||
       this.$store.getters.hasPlayedVideo5 ||
        this.$store.getters.hasPlayedVideo6
    ">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-4">
            <router-link :to="{ name: 'iframe', query: { video:video1 } }">
              <button type="button" class="btn btn-secondary dark">Video01</button>
            </router-link>
          </div>
          <div class="col-md-4">
            <router-link :to="{ name: 'iframe', query: { video:video2 } }">
              <button type="button" class="btn btn-secondary dark">Video02</button>
            </router-link>
          </div>
          <div class="col-md-4">
            <router-link :to="{ name: 'iframe', query: { video:video3 } }">
              <button type="button" class="btn btn-secondary dark">Video03</button>
            </router-link>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <router-link :to="{ name: 'iframe', query: { video:video4 } }">
              <button type="button" class="btn btn-secondary dark">Video04</button>
            </router-link>
          </div>
          <div class="col-md-4">
            <router-link :to="{ name: 'iframe', query: { video:video5 } }">
              <button type="button" class="btn btn-secondary dark">Video05</button>
            </router-link>
          </div>
          <div class="col-md-4">
            <router-link :to="{ name: 'iframe', query: { video:video6 } }">
              <button type="button" class="btn btn-secondary dark">Video06</button>
            </router-link>
          </div>
        </div>
        <br />
        <br />
        <div class="row">
          <div class="col-md-8">
            <router-link :to="{ name: 'menu'}">
              <button type="button" class="btn btn-secondary dark">Volver</button>
            </router-link>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import iframe from "./iframe";
export default {
  data() {
    return {
      played: false,
      video1: "video01",
      video2: "video02",
      video3: "video03",
      video4: "video04",
      video5: "video05",
      video6: "video06",
      continue: false
    };
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
    hasPlayedVideo1(){
      return this.$store.getters.hasPlayedVideo1
    }
  },
  methods: {
    start() {
      this.continue = true;
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Press+Start+2P");
.header {
  font-family: "Press Start 2P", "Helvetica", "Arial", sans-serif;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #555;
}

.header div {
  display: inline-block;
  width: 35%;
}

.header .value {
  font-weight: bold;
}
.title,
.subtitle {
  font-family: "Press Start 2P", "Helvetica", "Arial", sans-serif;
  font-weight: normal;
}
</style>