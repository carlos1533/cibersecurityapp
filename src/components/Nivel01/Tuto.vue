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
    <div class="row ">
      <div class="col-md-6 offset-md-3">
        
        <h1>Tutorial</h1>
        <!--<img src="../../assets/nivel01/reto01/titulo.png" alt="Smiley face" class="img-fluid">-->
      </div>

      <div class="col-md-10 offset-md-2 ">
        <div class="row">
          <form  class="formulario" action="#" @submit.prevent="validar">
            <div class="input-group ">
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
            <div class="col-sm-12 siguiente">
              <button class="boton-login rounded" type="submit" :disabled="loading">
                <img src="../../assets/nivel01/reto01/Siguiente.png" class="img-fluid">
              </button>
            </div>
          </form>
        <div class="container ">
             	<div class="ear ear-left"></div>
			        <div class="ear ear-right"></div>
              <div class="pika-body">
    <div class="pika-head">
      <div class="eye-left"></div>
      <div class="eye-right"></div>
      <div class="cheek-right"></div>
      <div class="nose"></div>
      <div class="mouth"></div>
    </div>
    
    <div class="mid">
      <div class="left-paw"></div>
      <div class="right-paw"></div>
      <div class="stripe1"></div>
      <div class="stripe2"></div>
    </div>
    
    <div class="left-foot"></div>
    <div class="right-foot"></div>
  </div>
  <div class="tail">
    <div class="part1"></div>
    <div class="part2"></div>
    <div class="part3"></div>
    <div class="part4"></div>
    <div class="part5"></div>
  </div>
        </div>
         <template v-if="valid">
           <router-link :to="{ name: 'home0' }">
            <button            
              class="boton-login rounded"
              :disabled="loading"          
            >
             continuar
            </button>
          </router-link>
          </template>
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
      valid:false,
      password: "",
      serverError: "",
      messageServer: "",
      successMessage: this.dataSuccessMessage,
      loading: false
    };
  },
  methods: {
    validar() {
      this.$store
        .dispatch("validatePassword", {
          password: this.password
        })
        .then(response => {
          //console.log(this.$store);
          this.loading = false;
          this.messageServer = response.data;
          if(this.messageServer=='Muy bien, tu contraseña es segura.'){
            this.valid=true
          }
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

.formulario{
  height: 100%;
}


.siguiente {
  align-self: flex-end;
}
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





.container {
  width: 320px;
  height: 460px;
  position: relative;
  margin: 10vh auto;
  background-image: linear-gradient(to bottom, #f40711 20%, #333333 60%, #fcfff4 30%);
  border-radius: 50%;
}
.container .ear {
  position: absolute;
  background: none repeat scroll 0 0 #fed823;
  border: 3px solid #333;
  overflow: hidden;
}
.container .ear-left {
  left: 20px;
  top: -20px;
  width: 50px;
  height: 140px;
  border-radius: 5px 125% 0px 125%;
  -webkit-transform: rotate(-26deg) skewX(25deg) skewY(0deg);
  -moz-transform: rotate(-26deg) skewX(25deg) skewY(0deg);
  -o-transform: rotate(-26deg) skewX(25deg) skewY(0deg);
  transform: rotate(-40deg) skewX(20deg) skewY(0deg);
  -webkit-transform-origin: 100% 100%;
  -moz-transform-origin: 100% 100%;
  -o-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}
.container .ear-left:before {
  background-color: #000000;
  content: "";
  height: 40px;
  left: -10px;
  position: absolute;
  top: -10px;
  width: 60px;
  border-right-radius: 30px;
  -webkit-transform: rotate(18deg);
  -moz-transform: rotate(18deg);
  -o-transform: rotate(18deg);
  -ms-transform: rotate(18deg);
  transform: rotate(22deg);
}
.container .ear-right {
  width: 130px;
  height: 70px;
  right: 27px;
  top: 180px;
  border-radius: 10px 125% 10px 125%;
  -webkit-box-shadow: 11px -9px 0 2px rgba(0, 0, 0, 0.2) inset;
  box-shadow: 11px -9px 0 2px rgba(0, 0, 0, 0.2) inset;
  -webkit-transform: rotate(-90deg) skewX(27deg) skewY(0deg);
  -moz-transform: rotate(-90deg) skewX(27deg) skewY(0deg);
  -o-transform: rotate(-90deg) skewX(27deg) skewY(0deg);
  -ms-transform: rotate(-90deg) skewX(27deg) skewY(0deg);
  transform: rotate(-90deg) skewX(27deg) skewY(0deg);
  -webkit-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -o-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
}
.container .ear-right:before {
  background-color: #000000;
  content: "";
  height: 60px;
  position: absolute;
  right: -5px;
  top: 62px;
  width: 65px;
  -webkit-transform: rotate(-15deg);
  -moz-transform: rotate(-15deg);
  -o-transform: rotate(-15deg);
  -ms-transform: rotate(-15deg);
  transform: rotate(-15deg);
}
.container .left-ear {
  position: absolute;
  top: 40px;
  width: 30px;
  height: 145px;
  left: -20px;
  background: #fed823;
  border-bottom-left-radius: 80px 70%;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  -webkit-transform: rotateZ(-70deg);
  transform: rotateZ(-70deg);
  border-left: 3px solid #0a0a0a;
  border-right: 3px solid #0a0a0a;
  border-top: 1px solid #0a0a0a;
  overflow: hidden;
  z-index: 100;
}
.container .left-ear .punta {
  position: absolute;
  content: "";
  display: block;
  left: 4px;
  width: 45px;
  height: 35px;
  background: #231815;
  -webkit-transform: rotateZ(10deg);
  transform: rotateZ(10deg);
  border-top-right-radius: 150%;
  border-bottom-left-radius: -10px;
  border-bottom: 3px solid #0a0a0a;
}
.container .right-ear {
  position: absolute;
  top: 25px;
  right: 100px;
  width: 34px;
  height: 145px;
  background: #231815;
  border-bottom-left-radius: 80px 150%;
  border-top-left-radius: 190%;
  border-top-right-radius: 150%;
  -webkit-transform: rotateZ(40deg);
  transform: rotateZ(40deg);
  border: 3px solid #0a0a0a;
  border-bottom: none;
  z-index: 500;
  overflow: hidden;
}
.container .right-ear .fillear {
  position: absolute;
  bottom: 0px;
  background: #fed823;
  width: 40px;
  height: 110px;
  border-radius: 0 80% 0 0;
  border-top: 3px solid #0a0a0a;
}
.container .pika-body {
  border-top-left-radius: 130px 120px;
  border-top-right-radius: 150px 100px;
  border-bottom-left-radius: 100px 130px;
  border-bottom-right-radius: 150px 100px;
  width: 185px;
  height: 340px;
  position: absolute;
  border: 3px solid rgba(0, 0, 0, 0);
  bottom: 0;
  transform: rotateZ(-1deg);
  z-index: 300;
}
.container .pika-body .pika-head {
  position: absolute;
  width: 160px;
  height: 160px;
  background: #fed823;
  right: 5px;
  top: 2px;
  border-top-left-radius: 130px 120px;
  border-top-right-radius: 150px 100px;
  border-bottom-left-radius: 80px 80px;
  border-bottom-right-radius: 25px 120px;
  border: 3px solid #0a0a0a;
  border-bottom: none;
}
.container .pika-body .pika-head:before {
  content: "";
  position: absolute;
  display: block;
  width: 30px;
  height: 70px;
  background: #fed823;
  border-left: 4px solid #0a0a0a;
  left: -10px;
  top: 84px;
  transform: rotateZ(-28deg);
  border-top-left-radius: 150% 90px;
  border-bottom-left-radius: 150% 90px;
}
.container .pika-body .pika-head:after {
  content: "";
  display: block;
  position: absolute;
  width: 24px;
  height: 38px;
  background: #e94e24;
  border-radius: 80%;
  left: -15px;
  top: 82px;
  border-right: 3px solid #0a0a0a;
  border-top: 3px solid #0a0a0a;
  border-bottom: 3px solid #0a0a0a;
  transform: rotateZ(355deg);
}
.container .pika-body .pika-head .cheek-right {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e94e24;
  border: 3px solid #0a0a0a;
  top: 90px;
  right: 18px;
}
.container .pika-body .pika-head .eye-right {
  position: absolute;
  width: 30px;
  height: 33px;
  background: #0a0a0a;
  border-radius: 50%;
  top: 57px;
  right: 36px;
}
.container .pika-body .pika-head .eye-right:before {
  content: "";
  position: absolute;
  display: block;
  width: 10px;
  height: 12px;
  background: white;
  border-radius: 50%;
  left: 8px;
  top: 5px;
}
.container .pika-body .pika-head .eye-left {
  position: absolute;
  width: 20px;
  height: 32px;
  background: #0a0a0a;
  border-radius: 50%;
  -webkit-transform: rotateZ(10deg);
  transform: rotateZ(10deg);
  top: 50px;
  left: 10px;
}
.container .pika-body .pika-head .eye-left:before {
  content: "";
  position: absolute;
  display: block;
  width: 8px;
  height: 13px;
  background: white;
  border-radius: 50%;
  -webkit-transform: rotateZ(8deg);
  transform: rotateZ(8deg);
  left: 10px;
  top: 5px;
}
.container .pika-body .nose {
  position: absolute;
  width: 10px;
  height: 11px;
  background: #0a0a0a;
  top: 75px;
  left: 40px;
  border-radius: 0% 50% 30% 50%;
  -webkit-transform: rotateZ(-36deg);
  transform: rotateZ(-36deg);
}
.container .pika-body .mouth {
  position: absolute;
  width: 25px;
  height: 20px;
  border-radius: 0% 0% 100% 0%;
  border-bottom: 4px solid #0a0a0a;
  border-right: 3px solid #0a0a0a;
  top: 90px;
  left: 48px;
  -webkit-transform: rotateZ(55deg);
  transform: rotateZ(55deg);
}
.container .pika-body .mouth:before {
  content: "";
  display: block;
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 0% 0% 90% 0%;
  border-bottom: 4px solid #0a0a0a;
  border-right: 3px solid #0a0a0a;
  top: 22px;
  right: 20px;
  -webkit-transform: rotateZ(-10deg);
  transform: rotateZ(-10deg);
}
.container .mid {
  position: absolute;
  width: 160px;
  height: 150px;
  top: 165px;
  background: #fed823;
  left: 30px;
  border-top-right-radius: 70px 140px;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 30px;
  border-bottom: 3px solid #0a0a0a;
  border-right: 3px solid #0a0a0a;
  z-index: 1;
}
.container .mid:before {
  position: absolute;
  content: "";
  display: block;
  width: 150px;
  height: 40px;
  border-right: 3px solid #0a0a0a;
  background: #fed823;
  right: 15px;
  -webkit-transform: rotateZ(-8deg);
  transform: rotateZ(-8deg);
}
.container .mid:after {
  position: absolute;
  content: "";
  display: block;
  bottom: -2px;
  left: -20px;
  width: 70px;
  height: 100px;
  border-radius: 90% 30% 0 80%;
  background: #fed823;
  border-bottom: 3px solid #0a0a0a;
  border-left: 3px solid #0a0a0a;
}
.container .mid .stripe1 {
  position: absolute;
  width: 18px;
  height: 12px;
  border-top-left-radius: 50px 100%;
  border-bottom-left-radius: 50px 100%;
  background: #983c0d;
  border: 2px solid #0a0a0a;
  border-right: none;
  -webkit-transform: rotateZ(-15deg);
  transform: rotateZ(-15deg);
  right: 13px;
  top: 27px;
  z-index: 20;
}
.container .mid .stripe2 {
  position: absolute;
  width: 28px;
  height: 16px;
  border-top-left-radius: 100px 190%;
  border-bottom-left-radius: 50px 130%;
  background: #983c0d;
  border: 2px solid #0a0a0a;
  border-right: none;
  -webkit-transform: rotateZ(-10deg);
  transform: rotateZ(-10deg);
  right: 0px;
  top: 82px;
  z-index: 20;
}
.container .mid .left-paw {
  position: absolute;
  width: 45px;
  height: 100px;
  left: -15px;
  top: -10px;
  border-radius: 70% 20% 70% 60%;
  border-left: 3px solid #0a0a0a;
  border-bottom: 3px solid #0a0a0a;
  background: #fed823;
  z-index: 5;
}
.container .mid .right-paw {
  position: absolute;
  width: 45px;
  height: 100px;
  right: 40px;
  top: -5px;
  border-radius: 70% 30% 70% 60%;
  transform: rotate(30deg);
  border-right: 3px solid #0a0a0a;
  border-bottom: 2px solid #0a0a0a;
  z-index: 25;
  background: #fed823;
}
.container .left-foot {
  position: absolute;
  bottom: 0;
  width: 70px;
  height: 30px;
  background: #fed823;
  border-radius: 75%;
  -webkit-transform: rotateZ(-18deg);
  transform: rotateZ(-18deg);
  border: 3px solid #0a0a0a;
}
.container .left-foot:before {
  content: "";
  display: block;
  position: absolute;
  width: 25px;
  height: 6px;
  border-top: 3px solid #0a0a0a;
  border-radius: 40%;
  -webkit-transform: rotateZ(-15deg);
  transform: rotateZ(-15deg);
  bottom: 8px;
}
.container .left-foot:after {
  content: "";
  display: block;
  position: absolute;
  width: 25px;
  height: 8px;
  border-top: 3px solid #0a0a0a;
  border-radius: 50%;
  -webkit-transform: rotateZ(-15deg);
  transform: rotateZ(-15deg);
  bottom: 12px;
  left: -1px;
}
.container .right-foot {
  position: absolute;
  bottom: 0;
  width: 70px;
  height: 27px;
  right: -12px;
  background: #fed823;
  border-radius: 85%;
  -webkit-transform: rotateZ(17deg);
  transform: rotateZ(17deg);
  border-bottom: 3px solid #0a0a0a;
}
.container .right-foot:before {
  content: "";
  display: block;
  position: absolute;
  width: 25px;
  height: 6px;
  border-top: 3px solid #0a0a0a;
  border-radius: 40%;
  -webkit-transform: rotateZ(15deg);
  transform: rotateZ(15deg);
  bottom: 3px;
  right: 0;
}
.container .right-foot:after {
  content: "";
  display: block;
  position: absolute;
  width: 25px;
  height: 8px;
  border-top: 3px solid #0a0a0a;
  border-radius: 50%;
  -webkit-transform: rotateZ(15deg);
  transform: rotateZ(15deg);
  bottom: 8px;
  right: -1px;
}

.tail {
  position: absolute;
  width: 150px;
  height: 250px;
  right: 0;
  top: 140px;
  transform-origin: 0 bottom;
  animation: tailmove 3s ease infinite;
}
.tail .part1 {
  position: absolute;
  bottom: 18px;
  width: 60px;
  height: 15px;
  border-bottom: 2px solid #0a0a0a;
  border-top: 2px solid #0a0a0a;
  background: #983c0d;
  -webkit-transform: rotateZ(-50deg);
  transform: rotateZ(-50deg);
}
.tail .part2 {
  position: absolute;
  bottom: 49px;
  width: 50px;
  height: 18px;
  left: 9px;
  border-top: 2px solid #0a0a0a;
  background: #983c0d;
  -webkit-transform: rotateZ(40deg);
  transform: rotateZ(40deg);
  border-right: 2px solid #0a0a0a;
}
.tail .part2:before {
  position: absolute;
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-left: 9px solid #fed823;
  border-right: 9px solid rgba(0, 0, 0, 0);
  border-bottom: 5px solid rgba(0, 0, 0, 0);
  border-top: 5px solid rgba(0, 0, 0, 0);
  left: 15px;
  top: -1px;
}
.tail .part2:after {
  position: absolute;
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-left: 9px solid #fed823;
  border-right: 9px solid rgba(0, 0, 0, 0);
  border-bottom: 5px solid rgba(0, 0, 0, 0);
  border-top: 5px solid rgba(0, 0, 0, 0);
  left: 14px;
  top: 8px;
}
.tail .part3 {
  position: absolute;
  bottom: 78px;
  width: 70px;
  height: 25px;
  border-top: 2px solid #0a0a0a;
  background: #fed823;
  -webkit-transform: rotateZ(-45deg);
  transform: rotateZ(-45deg);
}
.tail .part4 {
  position: absolute;
  bottom: 105px;
  width: 80px;
  height: 35px;
  border-top: 2px solid #0a0a0a;
  background: #fed823;
  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
  left: -10px;
}
.tail .part5 {
  position: absolute;
  bottom: 145px;
  width: 150px;
  height: 85px;
  border-top: 3px solid #0a0a0a;
  border-left: 2px solid #0a0a0a;
  background: #fed823;
  -webkit-transform: rotateZ(-7deg);
  transform: rotateZ(-7deg);
  left: -16px;
  border-top-left-radius: 100% 30px;
  border-bottom-right-radius: 20% 10px;
  border-right: 2px solid #0a0a0a;
}

@keyframes tailmove {
  0% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(15deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
}

</style>
