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
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <img src="../../assets/login/TITULO.png" alt="Smiley face" class="img-fluid">
        <br>
        <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
        <div v-if="serverError" class="server-error">{{ serverError }}</div>
        <form action="#" @submit.prevent="login">
          <div class="row align-items-center">
            <div class="col-sm-9">
              <div class="input-group">
                <img src="../../assets/login/Usuario.png" class="img-fluid">
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="form-control form-control-lg rounded border border-primary input"
                  v-model="name"
                >
              </div>
              <br>
              <div class="input-group">
                <img src="../../assets/login/Contraseña.png" class="img-fluid">
                <input
                  type="password"
                  name="password"
                  id="password"
                  class="form-control form-control-lg rounded border border-primary input"
                  v-model="password"
                >
              </div>
            </div>
            <div class="col-sm-3">
              <button class="boton-login rounded" type="submit" :disabled="loading">
                <div class="lds-ring-container" v-if="loading">
                  <div class="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <img src="../../assets/login/boton ENTRAR.png" class="img-fluid">
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-3">
        <img src="../../assets/login/Pikachu pantalla login.png" class="img-fluid">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
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
      name: "",
      password: "",
      serverError: "",
      successMessage: this.dataSuccessMessage,
      loading: false
    };
  },
  methods: {
    login() {
      this.loading = true;
      this.$store
        .dispatch("retrieveToken", {
          name: this.name,
          password: this.password
        })
        .then(response => {
          //console.log(response.data.user._id);
          const user_id = response.data.user._id;
          localStorage.setItem("auth", response.data.user._id);
          this.loading = false;
          this.$router.push({ name: "home" });
        })

        .catch(error => {
          this.loading = false;
          this.serverError = error.response.data.message;
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
</style>
