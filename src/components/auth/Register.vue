<template>
  <div class="page-wrapper login-form">
    <h2 class="login-heading">Registro</h2>
    <form action="#" @submit.prevent="register">
      <!-- <div v-if="successMessage" class="success-message">{{ successMessage }}</div> -->

      <div v-if="serverErrors" class="server-error">
        <div v-for="(value, key) in serverErrors" :key="key">{{ value[0] }}</div>
      </div>

      <div class="form-control">
        <label for="name">Name</label>
        <input type="text" name="Nombre" id="name" class="login-input" v-model="name">
      </div>

      <div class="form-control">
        <label for="email">Email</label>
        <input type="text" name="Email" id="email" class="login-input" v-model="email">
      </div>

      <div class="form-control mb-more">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" class="login-input" v-model="password">
      </div>

      <div class="form-control">
        <button type="submit" class="btn-submit">Crear Cuenta</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      serverErrors: "",
      successMessage: ""
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch("register", {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(response => {
          this.successMessage = "Registered Successfully!";
          this.$router.push({
            name: "login",
            params: { dataSuccessMessage: this.successMessage }
          });
        })
        .catch(error => {
          console.log(error);
          //this.serverErrors = Object.values(error.response.data.errors);
        });
    }
  }
};
</script>
