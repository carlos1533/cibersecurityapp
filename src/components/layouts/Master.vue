<template>
  <div id="app">
     <ul class="nav">
      <li v-if="!loggedIn">
        <router-link :to="{ name: 'login' }">Login</router-link>
      </li>
      <li v-if="!loggedIn">
        <router-link :to="{ name: 'register' }">Registro</router-link>
      </li>
      <li v-if="loggedIn">
        <router-link :to="{ name: 'logout' }">Salir</router-link>
      </li>
    </ul>
    <transition
      name="router-animation"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
      <router-view></router-view>
    </transition>
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


<style lang="css">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 18px;
  height: 100vh;
}
.flex-center {
  display: flex;
  justify-content: center;
}
.nav {
  display: flex;
  list-style: none;
  padding: 3px 0;
  margin: 0;
  justify-content: flex-end;
  background: #f5f8fa;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 20px;
}
.nav a {
  color: #636b6f;
  padding: 0 25px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-decoration: none;
  text-transform: uppercase;
}

.label {
  display: block;
  margin-bottom: 4px;
}
.login-heading {
  margin-bottom: 16px;
}
.form-control {
  margin-bottom: 24px;
}
.mb-more {
  margin-bottom: 42px;
}

.success-message {
  background-color: #dff0d8;
  color: #3c763d;
  margin-bottom: 12px;
  font-size: 16px;
  padding: 10px 16px;
  border-radius: 4px;
}

.lds-ring-container {
  position: absolute;
  right: 50%;
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 25px;
  height: 25px;
  margin: 6px;
  border: 3px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>