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
        
          <select
           @change="onHandleSelectedPokemon()"
           v-model="imageSelected"  ref="imageSelected" prop="imageSelected" name="imageSelected">
            <option
              v-for="( element, index ) in elements"
              :value="element.src"
              :key="index"
            >{{element.alt}}
            </option>
          </select>
          <hr>Pokemón elegido:
         
          <template v-if="imageSelected!=='' ">
            <img :src="imageSelected">
          </template>
        </div>
        <div class="col-sm-12">
      <router-link :to="{ name: 'fight'}">
            <button
              class="boton-login rounded"
              :disabled="loading">
              <img src="../../assets/nivel01/Empezar.png" class="img-fluid">
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  name: "Nivel1",
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
    ...mapState({
      pokemonSelected:state=>state.pokemonSelected,
      namePokemonSelected:state=>state.namePokemonSelected
    })
  }
  ,
  props: {
    dataSuccessMessage: {
      type: String
    } 
    },
  data() {
    return {
      imageSelected: "",
      name: "",
      password: "",
      serverError: "",
      successMessage: this.dataSuccessMessage,
      loading: false,
      elements: [
        {
          id: "1",
          src: require("@/assets/nivel01/charmander.png"),
          alt: "Charmander"
        },
        {
          id: "2",
          src: require("@/assets/nivel01/squirtle.png"),
          alt: "Squirtle"
        },
        {
          id: "1",
          src: require("@/assets/nivel01/bulbasur.png"),
          alt: "Bulbasur"
        }
      ]
    };
  },
  created() {
    const id = localStorage.getItem("auth")
  },
  
  methods: {

    ...mapActions([
          'setPokemonSelected'
    ]),

    onHandleSelectedPokemon (){
      this.setPokemonSelected(this.imageSelected)
      const id = localStorage.getItem("auth");
    },
    onSelectImage: function(data) {
      console.log("fire event onSelectImage: ", data);
      this.imageSelected = data;
    },
    onUnselectSingleImage: function() {
      this.$refs["single-select-image"].removeFromSingleSelected();
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
