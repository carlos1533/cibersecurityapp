<template>
  <div class="container-fluid">
    <div class="row align-items-center">
      <div class="col-md-4">
        <router-link :to="{ name: 'iframe', query: { video:video1 } }">
          <button type="button" class="btn btn-secondary dark">Video01</button>
        </router-link>
      </div>
      <div class="col-md-4">
        <router-link :to="{ name: 'iframe', query: { video:video2 } }">
          <button type="button" class="btn btn-secondary dark">Video02</button>
        </router-link>
      </div>
      <div class="col-md-4">
        <router-link :to="{ name: 'iframe', query: { video:video3 } }">
          <button type="button" class="btn btn-secondary dark">Video03</button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <router-link :to="{ name: 'iframe', query: { video:video4 } }">
          <button type="button" class="btn btn-secondary dark">Video04</button>
        </router-link>
      </div>
      <div class="col-md-4">
        <router-link :to="{ name: 'iframe', query: { video:video5 } }">
          <button type="button" class="btn btn-secondary dark">Video05</button>
        </router-link>
      </div>
      <div class="col-md-4">
        <router-link :to="{ name: 'iframe', query: { video:video6 } }">
          <button type="button" class="btn btn-secondary dark">Video06</button>
        </router-link>
      </div>
    </div>
    <br>
    <br>
    <div class="row">
       <div class="col-md-8">
        <router-link :to="{ name: 'menu'}">
          <button type="button" class="btn btn-secondary dark">Volver</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import iframe from "./iframe";
export default {
  data() {
    return {
      played: false,
      video1: "video01",
      video2: "video02",
      video3: "video03",
      video4: "video04",
      video5: "video05",
      video6: "video06"
    };
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  }
};
</script>
<style>
</style>