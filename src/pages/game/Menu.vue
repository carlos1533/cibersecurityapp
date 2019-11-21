<template>
    <div class="container-fluid">
     <!-- <ul class="nav">
      <li v-if="!loggedIn">
        <router-link :to="{ name: 'login' }">Login</router-link>
      </li>
      <li v-if="!loggedIn">
        <router-link :to="{ name: 'register' }">Registro</router-link>
      </li>
      <li v-if="loggedIn">
        <router-link :to="{ name: 'logout' }">Salir</router-link>
      </li>
    </ul>     -->
        <div class="row">
            <div class="col-md-6">
                <div class="row">
                <router-link :to="{ name: 'memoria' }">
                <div class="col-md-6 ">
                    <button type="button" class="btn btn-primary">Memoria</button>
                </div>
                </router-link>
                 <div class="col-md-6">
                   <p>
                      Encuentra las parejas y acumula puntaje ¡Suerte!
                   </p>
                  </div>
                <br>
            </div>
             <br>
            <div class="row">
               <router-link :to="{ name: 'errorFacil' }">
                <div class="col-md-6 ">
                    <button type="button" class="btn btn-primary">Encuentra el error</button>
                </div>
               </router-link>
                 <div class="col-md-6">Debes seleccionar la imagen correcta</div>
                <br>
            </div>
             <br>
            <div class="row">
                <div class="col-md-6 ">
                  <router-link :to="{ name: 'videoGame' }">
                    <button type="button" class="btn btn-primary">Mira los videos y responde las preguntas</button>
                  </router-link>  
                </div>
                 <div class="col-md-6">Lee atentamente los escenarios que se le presentan a Chicho y elige el comportamiento correcto. Por cada respuesta correcta gana 10 puntos ¡Buena Suerte! </div>
            </div>
             <br>
                 <div class="row">
                <div class="col-md-6 ">
                  <router-link :to="{ name: 'tuto' }">
                    <button type="button" class="btn btn-primary">Responde correctamente y gana las batallas</button>
                 </router-link>
                </div>
                 <div class="col-md-6">Selecciona el pokémon de tu preferencia y gana las batallas, da clic en pelear para responder las preguntas. Recuerda que 	mientras más correcta se tu respuesta el ataque de pokémon será más fuerte. Por cada respuesta correcta gana 10 puntos ¡Buena Suerte! </div>
              </div>
               <br>
              <!-- <div class="row">
                <div class="col-md-6 ">
                    <button type="button" class="btn btn-primary">Ranking</button>
                </div>
                 <div class="col-md-6">Mostrar Ranking</div>
            </div> -->
           </div>
            <div class="col-md-3">Puntaje total obtenido:{{customerTotalScore}}</div>
    </div>
    </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
export default {
    computed: {
    ...mapGetters([
     'customerTotalScore'
    ]),
    ...mapState({
        scoreTotal: state => state.customer.totalScore
    }),
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  }
}
</script>
<style scoped>
   @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900|Dosis:300,400,600,700,800|Droid+Sans:400,700|Lato:300,400,700,900|PT+Sans:400,700|Ubuntu:300,400,500,700|Open+Sans:400,300,600,700|Roboto:400,300,500,700,900|Roboto+Condensed:400,300,700|Open+Sans+Condensed:300,700|Work+Sans:400,300,700|Play:400,700|Maven+Pro:400,500,700,900&subset=latin,latin-ext);

@import url('https://fonts.googleapis.com/css?family=Press+Start+2P');

body{
  font-family: 'Press Start 2P', 'Helvetica', 'Arial', sans-serif; margin-top: 1.0em;
}
</style>