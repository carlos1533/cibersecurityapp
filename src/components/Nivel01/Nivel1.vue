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
        <img
          src="../../assets/nivel01/Nivel1 Contraseñas seguras.png"
          alt="Smiley face"
          class="img-fluid"
        >
      </div>
      <div class="col-md-10 offset-1">
        <img src="../../assets/nivel01/nivel01-texto.png" alt="Smiley face" class="img-fluid">
      </div>
      <div class="col-md-10 offset-1">
        <div class="row">
          <div class="col-md-3">
            <img
              src="../../assets/nivel01/Seleccione Pokemon.png"
              alt="Smiley face"
              class="img-fluid"
            >
          </div>
          <div class="col-md-3">
            <!-- <v-select :options="options" label="title">
              <template slot="option" slot-scope="option">
                <img :src="option.cardImage">
                {{ option.title }}
              </template>
            </v-select>
            -->
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-default dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src="../../assets/nivel01/bulbasur.png">

                <span class="glyphicon glyphicon-chevron-down"></span>
              </button>

              <ul class="dropdown-menu">
                <li>
                  <a href="#" title="Select this card">
                    <img src="../../assets/nivel01/squirtle.png">
                  </a>
                </li>
                <li>
                  <a href="#" title="Select this card">
                    <img src="../../assets/nivel01/charmander.png">
                  </a>
                </li>
              </ul>
            </div>
            <!-- <form action="#" @submit.prevent="login">
              <div class="input-group">
                <input
                  type="text"
                  name="username"
                  id="username"
                  class="form-control form-control-lg rounded border border-primary input"
                  v-model="name"
                >
              </div>
              
            </form>-->
          </div>
          <div class="col-sm-12">
            <router-link :to="{ name: 'reto1' }">
              <button class="boton-login rounded" :disabled="loading">
                <img src="../../assets/nivel01/Empezar.png" class="img-fluid">
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Nivel1",
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
      loading: false,
      options: [
        {
          title: "Visa",
          cardImage: "@assets/nivel01/bulbasur.png"
        },
        {
          title: "Mastercard",
          cardImage: "./../assets/nivel01/bulbasur.png"
        }
      ]
    };
  },
  methods: {}
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
