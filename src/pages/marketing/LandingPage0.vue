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
    </ul> -->
    <div class="row">
      <div class="col-sm-8 offset-md-2">
        <div class="col-md-12">
          <img src="../../assets/batalla.jpeg" class="img-fluid">
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
