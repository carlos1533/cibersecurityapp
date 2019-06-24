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
        <div class="col-sm-8 offset-sm-2">
          <img src="../../assets/registro/Registro.png" alt="Smiley face" class="img-fluid">
        </div>
        <br>
        <div class="row align-items-center">
          <form action="#" @submit.prevent="validateBeforeSubmit">
            <!-- 
            <ul>
              <li v-bind:class="{ is_valid: validez.contains_eight_characters }">8 Characters</li>
              <li v-bind:class="{ is_valid: validez.contains_number }">Contains Number</li>
              <li v-bind:class="{ is_valid: validez.contains_uppercase }">Contains Uppercase</li>
              <li
                v-bind:class="{ is_valid: validez.contains_special_character }"
              >Contains Special Character</li>
            </ul>

            <div
              class="checkmark_container"
              v-bind:class="{ show_checkmark: validez.valid_password }"
            >
              <svg width="50%" height="50%" viewBox="0 0 140 100">
                <path
                  class="checkmark"
                  v-bind:class="{ checked: validez.valid_password }"
                  d="M10,50 l25,40 l95,-70"
                ></path>
              </svg>
            </div>
            -->
            <div class="input-group">
              <img src="../../assets/registro/Ingrese usuario.png" class="img-fluid">
              <input
                v-validate="'required'"
                type="text"
                name="name"
                id="name"
                class="form-control form-control-lg rounded border border-primary input"
                v-model="name"
              >
            </div>
            <div class="input-group">
              <img src="../../assets/registro/Ingrese contraseña.png" class="img-fluid">

              <input
                v-validate="'required'"
                name="password"
                type="password"
                class="form-control form-control-lg rounded border border-primary input"
                ref="password"
                v-model="pass"
                @input="checkPassword"
              >
            </div>
            <div class="input-group">
              <img src="../../assets/registro/Reingrese contraseña.png" class="img-fluid">
              <input
                v-validate="'required|confirmed:password'"
                name="password_confirmation"
                type="password"
                class="form-control form-control-lg rounded border border-primary input"
                data-vv-as="password"
                @input="checkPassword"
              >
            </div>
            <div class="alert alert-danger" v-show="errors.any()">
              <div v-if="errors.has('name')">{{ errors.first('name') }}</div>
              <div v-if="errors.has('password')">{{ errors.first('password') }}</div>
              <div
                v-if="errors.has('password_confirmation')"
              >{{ errors.first('password_confirmation') }}</div>
            </div>
            <div v-if="serverError" class="server-error">{{ serverError }}</div>
            <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
            <br>
            <div class="col-sm-6 offset-sm-3">
              <button class="boton-login rounded" type="submit">
                <img src="../../assets/registro/Registrar.png" class="img-fluid">
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      pass: null,
      serverError: "",
      password_confirmation: "",
      successMessage: "",
      validez: {
        contains_eight_characters: false,
        contains_number: false,
        contains_uppercase: false,
        contains_special_character: false,
        valid_password: false,
        created:new Date()
      }
    };
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  },
  methods: {
    checkPassword() {
      this.pass_length = this.pass.length;
      const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

      if (this.pass_length > 8) {
        this.validez.contains_eight_characters = true;
      } else {
        this.validez.contains_eight_characters = false;
      }

      this.validez.contains_number = /\d/.test(this.pass);
      this.validez.contains_uppercase = /[A-Z]/.test(this.pass);
      this.validez.contains_special_character = format.test(this.pass);

      if (
        this.validez.contains_eight_characters === true &&
        this.validez.contains_special_character === true &&
        this.validez.contains_uppercase === true &&
        this.validez.contains_number === true
      ) {
        this.validez.valid_password = true;
      } else {
        this.validez.valid_password = false;
      }
      console.log(this.validez);
    },
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          this.register();
        }
      });
    },
    register() {
      this.$store
        .dispatch("register", {
          name: this.name,
          password: this.pass,
          validez: this.validez
        })
        .then(response => {
          this.successMessage = "Registered Successfully!";
          this.$router.push({
            name: "login"
            //params: { dataSuccessMessage: this.successMessage }
          });
          this.$toast.success({
            title: this.successMessage,
            message: "You can login here"
          });
        })
        .catch(error => {
          //console.log(error);
          this.serverError = error.response.data.message;
        });
    }
  }
};
</script>
<style>
.input-error {
  border: 1px solid red;
}
.server-error {
  margin-bottom: 12px;
  font-size: 16px;
  padding: 10px 16px;
  color: #a94442;
  background: #f3dede;
  border-radius: 4px;
}
.success-message {
  background-color: #dff0d8;
  color: #3c763d;
  margin-bottom: 12px;
  font-size: 16px;
  padding: 10px 16px;
  border-radius: 4px;
}
</style>