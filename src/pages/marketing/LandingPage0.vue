<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-8 offset-md-2">
        <div class="col-md-12">
          <h4 class="title"> Batallas Pokemon: Selecciona el pokémon de tu preferencia y gana las batallas, da clic en pelear para responder las preguntas. Recuerda que mientras más correcta se tu respuesta el ataque de pokémon será más fuerte. Por cada respuesta correcta gana 10 puntos ¡Buena Suerte! </h4>
          <!-- <img src="../../assets/batalla.jpeg" class="img-fluid"> -->
        </div>

        <div class="col-md-4 ml-auto">
          <router-link :to="{ name: 'nivel1' }">
            <button class="boton-login rounded">
              <img src="../../assets/Continuar.png" class="img-fluid">
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  }
};
</script>
<style  scoped>
   @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900|Dosis:300,400,600,700,800|Droid+Sans:400,700|Lato:300,400,700,900|PT+Sans:400,700|Ubuntu:300,400,500,700|Open+Sans:400,300,600,700|Roboto:400,300,500,700,900|Roboto+Condensed:400,300,700|Open+Sans+Condensed:300,700|Work+Sans:400,300,700|Play:400,700|Maven+Pro:400,500,700,900&subset=latin,latin-ext);

@import url('https://fonts.googleapis.com/css?family=Press+Start+2P');
.title{
  font-family: 'Press Start 2P', 'Helvetica', 'Arial', sans-serif;
  text-align: left;
}
</style>
