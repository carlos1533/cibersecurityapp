<template></template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'
export default {
  methods:{
    ...mapActions([
       'resetState'
    ]),
  },
  created() {
    //this.$store.dispatch("clearTodos");
    localStorage.clear();
    this.resetState()
    this.$store.dispatch("destroyToken").then(response => {
      this.$router.push({ name: "login" });
    });
  }
};
</script>

