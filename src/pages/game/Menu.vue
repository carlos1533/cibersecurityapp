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
                      Debes encontrar las parejas que te enseñarán a distinguir entre contraseñas buenas (color verde), contraseñas intermedias (color amarillo) y contraseñas malas (color rojo). Haz clic en cada carta para ver que esconden. ¿serás capaz de encontrar todas las parejas?
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
                    <button type="button" class="btn btn-primary">Mira y Responde</button>
                  </router-link>  
                </div>
                 <div class="col-md-6">Debes mirar los videos y responder una pregunta en base al video.</div>
            </div>
             <br>
                 <div class="row">
                <div class="col-md-6 ">
                  <router-link :to="{ name: 'tuto' }">
                    <button type="button" class="btn btn-primary">Batalla Pokemon</button>
                 </router-link>
                </div>
                 <div class="col-md-6">Debes elegir tu pokemon y combatir para lograr derrotar al jefe final</div>
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