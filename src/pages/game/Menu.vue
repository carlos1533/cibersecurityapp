<template>
  <div class="container">
    <div class="row">
      <div class="col-2">
        <router-link :to="{ name: 'memoria' }">
          <button type="button" class="btn btn-secondary dark menu-button">Memoria</button>
        </router-link>
      </div>
      <div class="col-8">
        <p style="text-align:center;">Encuentra las parejas y acumula puntaje ¡Suerte!</p>
      </div>
      <div class="col-2">
        <p>
          Puntaje:{{customerTotalScore}}
        </p>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-2">
        <router-link :to="{ name: 'errorFacil' }">
          <button type="button" class="btn btn-secondary dark menu-button">Encuentra el error</button>
        </router-link>
      </div>
      <div class="col-8">
        <p style="text-align:center;">Elige el comportamiento correcto que debe tener Chicho</p>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-2">
        <router-link :to="{ name: 'videoGame' }">
          <button type="button" class="btn btn-secondary dark menu-button">Mira y responde</button>
        </router-link>
      </div>
      <div class="col-8">
         <p style="text-align:center;">
        Mira los videos y responde las preguntas
        </p>
        </div>
    </div>
    <br />
    <div class="row">
      <div class="col-2">
        <router-link :to="{ name: 'tuto' }">
          <button type="button" class="btn btn-secondary dark menu-button">Batallas Pokemón</button>
        </router-link>
      </div>
      <div class="col-8">
         <p style="text-align:center;">
        Responde correctamente y gana las batallas
        </p>
        </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters(["customerTotalScore"]),
    ...mapState({
      scoreTotal: state => state.customer.totalScore
    }),
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  }
};
</script>
<style scoped>
@import url(
  https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,
  400,
  600,
  700,
  900|Dosis:300,
  400,
  600,
  700,
  800|Droid+Sans:400,
  700|Lato:300,
  400,
  700,
  900|PT+Sans:400,
  700|Ubuntu:300,
  400,
  500,
  700|Open+Sans:400,
  300,
  600,
  700|Roboto:400,
  300,
  500,
  700,
  900|Roboto+Condensed:400,
  300,
  700|Open+Sans+Condensed:300,
  700|Work+Sans:400,
  300,
  700|Play:400,
  700|Maven+Pro:400,
  500,
  700,
  900&subset=latin,
  latin-ext
);

@import url("https://fonts.googleapis.com/css?family=Press+Start+2P");
p {
  font-family: "Press Start 2P", "Helvetica", "Arial", sans-serif;
  margin-top: 1em;
  font-size: 14px;
}
.menu-button {
  width: 100%;
  border-radius: 10px;
  font:500;
}
.container{
  border-bottom: 1px solid #555;
}
</style>