<template>
  <div class="login-form">
    <h2 class="login-heading">Loguearse</h2>
    <form action="#" @submit.prevent="login">
      <div class="form-control">
        <label for="email">Nombre/Email</label>
        <input type="email" name="username" id="username" class="login-input" v-model="email">
      </div>

      <div class="form-control mb-more">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" class="login-input" v-model="password">
      </div>

      <div class="form-control">
        <button type="submit" class="btn-submit">Ingresar</button>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("retrieveToken", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          this.$router.push({ name: "todo" });
        });
    }
  }
};
</script>