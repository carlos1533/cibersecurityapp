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
        <router-link :to="{ name: 'logout' }">Logout</router-link>
      </li>
    </ul>
    <div class="row align-items-center">
      <div class="col-md-6 offset-md-3">
        <img src="../../assets/nivel01/reto01/titulo.png" alt="Smiley face" class="img-fluid">
      </div>

      <div class="col-md-10 offset-1">
        <div class="row">
          <form action="#" @submit.prevent="validar">
            <div class="input-group">
              <img src="../../assets/nivel01/reto01/Ingrese contraseña.png" class="img-fluid">
              <input
                type="text"
                name="password"
                id="password"
                class="form-control form-control-lg rounded border border-primary input"
                v-model="password"
              >
            </div>
            <div v-if="messageServer" class="server-error">{{ messageServer }}</div>
            <div class="col-md-5 ml-auto">
              <img src="../../assets/nivel01/reto01/pikachu.png" class="img-fluid">
            </div>
            <div class="col-sm-12">
              <button class="boton-login rounded" type="submit" :disabled="loading">
                <img src="../../assets/nivel01/reto01/Siguiente.png" class="img-fluid">
              </button>
             
            </div>
          </form>
           <router-link :to="{ name: 'fight' }">
            <button
              
              class="boton-login rounded"
              :disabled="loading"
              
            >
             continuar
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Reto01",
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  },
  props: {
    dataSuccessMessage: {
      type: String
    }
  },
  data() {
    return {
      password: "",
      serverError: "",
      messageServer: "",
      successMessage: this.dataSuccessMessage,
      loading: false
    };
  },
  methods: {
    validar() {
      this.loading = true;
      this.$store
        .dispatch("validatePassword", {
          password: this.password
        })
        .then(response => {
          //console.log(this.$store);
          this.loading = false;
          this.messageServer = response.data;
          // this.$router.push({ name: "reto1" });
        })

        .catch(error => {
          console.log(error);
          this.loading = false;
          //this.serverError = error.response.data.message;
          this.password = "";
          this.successMessage = "";
        });
    }
  }
};
</script>
<style>
.login-form {
  width: 500px;
  height: 12000px;
}
.input {
  margin: 0.8em;
}

.login-input {
  width: 100%;
  font-size: 16px;
  padding: 12px 16px;
  outline: 0;
  border-radius: 3px;
  border: 1px solid lightgrey;
}
.btn-submit {
  width: 100%;
  padding: 14px 12px;
  font-size: 18px;
  font-weight: bold;
  background: #60bd4f;
  color: white;
  border-radius: 3px;
  cursor: pointer;
}

.btn-submit:hover {
  background: darken(#60bd4f, 10%);
}
.boton-login {
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
.server-error {
  margin-bottom: 12px;
  font-size: 16px;
  padding: 10px 16px;
  color: #a94442;
  background: #f3dede;
  border-radius: 4px;
}

.dropdown-toggle,
.dropdown-menu {
  width: 300px;
}
.btn-group img {
  margin-right: 10px;
}
.dropdown-toggle {
  padding-right: 50px;
}
.dropdown-toggle .glyphicon {
  margin-left: 20px;
  margin-right: -40px;
}
.dropdown-menu > li > a:hover {
  background: #f1f9fd;
} /* $search-blue */
.dropdown-header {
  background: #ccc;
  font-size: 14px;
  font-weight: 700;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
}
</style>
