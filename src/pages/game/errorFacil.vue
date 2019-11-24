<template>
  <transition
    :duration="{ enter: 500, leave: 300 }"
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
    mode="out-in"
  >
   <template v-if="!this.continue">
      <div class="header">
        <h1>Minijuego: Encuentra el error</h1>
        <div>
          <span
            class="label"
          >Lee atentamente los escenarios que se le presentan a Chicho y elige el comportamiento correcto. Por cada respuesta correcta gana 10 puntos ¡Buena Suerte! </span>
          <router-link :to="{ name: 'menu' }">
            <button type="button" class="btn btn-secondary light">Volver</button>
          </router-link>
          <button type="button" class="btn btn-primary" @click="start()">Continuar</button>
        </div>
      </div>
    </template>
    <template v-if="this.continue === true">
    <div class="container-fluid px-lg-5">
      <div class="row">
        <header>
          <h1 class="title">{{title}}</h1>
          <div class="progressContainer">
            <progress
              class="progress is-info is-small"
              :value="(questionIndex/quiz.questions.length)*100"
              max="100"
            >{{(questionIndex/quiz.questions.length)*100}}%</progress>
            <p>{{(questionIndex/quiz.questions.length)*100}}% completado</p>
          </div>
        </header>
      </div>

      <div
        class="d-flex flex-row justify-content-center"
        v-if="questionIndex<quiz.questions.length"
        v-bind:key="questionIndex"
      >
        <div
          class="col"
          v-for="(response, index) in quiz.questions[questionIndex].responses"
          :class="{ 'is-selected': userResponses[questionIndex] == index}"
          :key="index"
        >
          <img :src="response.text" @click="handleAnswer(index,response)" />
        </div>
      </div>
      <div
        v-if="questionIndex >= quiz.questions.length"
        v-bind:key="questionIndex"
        class="quizCompleted has-text-centered"
      >
        <!-- quizCompletedIcon: Achievement Icon -->
        <span class="icon">
          <i class="fa" :class="score()>3?'fa-check-circle-o is-active':'fa-times-circle'"></i>
        </span>

        <!--resultTitleBlock-->
        <h2
          class="title"
        >Hiciste {{ (score()>7?'un excelente':(score()<4?'un mal':'un buen')) }} trabajo!</h2>
        <p class="subtitle">Puntaje total: {{ score() }} / {{ quiz.questions.length*10 }}</p>
        <br />
        <a class="button" @click="finish()">
          Regresar
          <i class="fa fa-refresh"></i>
        </a>
        <!--/resultTitleBlock-->
      </div>
    </div>
    </template>
  </transition>
</template>
<script>
import swal from "sweetalert";
import Swal from "sweetalert2";
import { mapActions, mapGetters, mapState } from "vuex";
import Vue from "vue";
var quiz = {
    user: "Carlos",
    questions: [
      {
        text: "Seleciona la imagen correcta!",
        responses: [
          {
            text:
              "https://drive.google.com/uc?id=1GQ50u3dd2oqsa96tgck9zyKlL3ZV42vI",
              isAnswer:false,
              recommendation:'Nunca compartas tus contraseñas con nadie, recuerda que las contraseñas son privadas y personales.'
          },
          {
            text:
              "https://drive.google.com/uc?id=14w0YUtLYlYTioslDaVHPBgebqXeuIUKU",
            correct: true,
            isAnswer:true,
            recommendation:'Nunca compartas tus contraseñas con nadie, recuerda que las contraseñas son privadas y personales.'
          }
        ]
      },
      {
        text: "Seleciona la imagen correcta!",
        responses: [
          {
            text:
              "https://drive.google.com/uc?id=1b7AY49blY_Yruj4MR1z9q08ONWjRmWlE",
            correct: true,
            isAnswer:true,
            recommendation:'Usa contraseñas robustas y diferentes para cada cuenta y porsupuesto no la compartas con nadie'
          },
          {
            text:
              "https://drive.google.com/uc?id=1mfrmNU8MGMiPBV1aaI_uRdASHQTtc344",
              isAnswer:false,
              recommendation:'Usa contraseñas robustas y diferentes para cada cuenta y porsupuesto no la compartas con nadie'
          }
        ]
      },
      {
        text: "Seleciona la imagen correcta!",
        responses: [
          {
            text:
              "https://drive.google.com/uc?id=1OZb79t991swnFO163Gx8DU-dsqdvVy0r",
              isAnswer:false,
              recommendation:'Evita escribir tus contraseñas y dejarlas cerca de la computadora, alguien prodría verla y acceder a tu información.'
          },
          {
            text:
              "https://drive.google.com/uc?id=1qh2a_l_-Vaboqlxm-8PJwb7OHoZ8cr1G",
            correct: true,
            isAnswer:true,
            recommendation:'Evita escribir tus contraseñas y dejarlas cerca de la computadora, alguien prodría verla y acceder a tu información.'
          }
        ]
      },
      {
        text: "Seleciona la imagen correcta!",
        responses: [
          {
            text:
              "https://drive.google.com/uc?id=1s8PKN-1O_KHMgM29klpDkSU8kxl8_gzA",
            correct: true,
            isAnswer:true,
            recommendation:'Evita utilizar información personal, como nombres, fecha de cumpleaños, nombre de mascota en tus contraseñas, ya que es algo que la mayoria conoce y  podrían adivinar tu contraseña.'
          },
          {
            text:
              "https://drive.google.com/uc?id=1fQiCDWKGNmjyMtHCeuuo5CCvbq1XkXJk",
              isAnswer:false,
              recommendation:'Evita utilizar información personal, como nombres, fecha de cumpleaños, nombre de mascota en tus contraseñas, ya que es algo que la mayoria conoce y podrían adivinar tu contraseña.'
          }
        ]
      },
      {
        text: "Seleciona la imagen correcta!",
        responses: [
          {
            text:
              "https://drive.google.com/uc?id=1OU2-uL2gBFQGlqY703CD9FWzhKeis3ir",
            correct: true,
            isAnswer:true,
            recommendation:'Las contraseña deben ser dificil de averiguar, secretas y se deben cambiar de vez en cuando.'
          },
          {
            text:
              "https://drive.google.com/uc?id=1s7Rhmo9V4u0U2Bmg-PlDdXrzNP5DiVUx",
              isAnswer:false,
              recommendation:'Las contraseña deben ser dificil de averiguar, secretas y se deben cambiar de vez en cuando.'
          }
        ]
      },
      {
        text: "Seleciona la imagen correcta!",
        responses: [
          {
            text:
              "https://drive.google.com/uc?id=1vrNokk7oh1Ut3bi2ZGr7MwSEF_04ufpM",
            correct: true,
            isAnswer:true,
            recommendation:'Proteger tu dispositivo te evitará muchos problemas !BlOQUEA TU SMARTPHONE!'
          },
          {
            text:
              "https://drive.google.com/uc?id=1FDX9r-Zqb3Mc3qev5LBr1yM7ehHnnPZ7",
              isAnswer:false,
              recommendation:'Proteger tu dispositivo te evitará muchos problemas !BlOQUEA TU SMARTPHONE!'
          }
        ]
      }
    ]
  },
  userResponseSkelaton = Array(quiz.questions.length).fill(null);
export default {
  data() {
    return {
      title: "Elegi la imagen correcta!",
      quiz: quiz,
      scoreError: 0,
      questionIndex: 0,
      userResponses: userResponseSkelaton,
      isActive: false,
      continue: false
    };
  },
  components: {},
  created() {
    if (this.$store.getters.hasPlayedError) {
      this.$router.push({ name: "menu" });
    }
  },
  filters: {
    charIndex: function(i) {
      return String.fromCharCode(97 + i);
    }
  },
  methods: {
     start() {
      this.continue = true;
    },
    ...mapActions(["setCustomerScoreE", "setHasPlayedError"]),
    finish: function() {
      this.$router.push({ name: "menu" });
      // this.questionIndex=0;
      // this.userResponses=Array(this.quiz.questions.length).fill(null);
    },
    handleAnswer: function(index, response) {
      Vue.set(this.userResponses, this.questionIndex, index);
     console.log(response)
     Swal.fire({title:response.recommendation})
      this.questionIndex++;
    },
    next: function() {
      if (this.questionIndex < this.quiz.questions.length) this.questionIndex++;
    },

    prev: function() {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    score() {
      let score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
          typeof this.quiz.questions[i].responses[this.userResponses[i]] !==
            "undefined" &&
          this.quiz.questions[i].responses[this.userResponses[i]].correct
        ) {
          score = score + 10;
        }
      }

      this.setCustomerScoreE(score);
      this.setHasPlayedError(true);
      return score;
    }
  }
};
</script>

<style scoped>
@import url(
  https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,
  400,
  600,
  700,
  900|Dosis:300,
  400,
  600,
  700,
  800|Droid+Sans:400,
  700|Lato:300,
  400,
  700,
  900|PT+Sans:400,
  700|Ubuntu:300,
  400,
  500,
  700|Open+Sans:400,
  300,
  600,
  700|Roboto:400,
  300,
  500,
  700,
  900|Roboto+Condensed:400,
  300,
  700|Open+Sans+Condensed:300,
  700|Work+Sans:400,
  300,
  700|Play:400,
  700|Maven+Pro:400,
  500,
  700,
  900&subset=latin,
  latin-ext
);

@import url("https://fonts.googleapis.com/css?family=Press+Start+2P");
img {
  margin: 10px;
  cursor: pointer;
}
.title,
.subtitle {
  font-family: "Press Start 2P", "Helvetica", "Arial", sans-serif;
  font-weight: normal;
}

img:hover {
  border: solid 1px #ccc;
  -moz-box-shadow: 1px 1px 5px #333;
  -webkit-box-shadow: 1px 1px 5px #333;
  box-shadow: 1px 1px 5px #333;
}
.animated {
  transition-duration: 0.3s/2;
}
.quizCompleted {
  width: 100%;
  padding: 1rem;
  text-align: center;
}
.icon {
  color: #ff5252;
  font-size: 5rem;
}
.is-active {
  color: #00e676;
}
.header {
  font-family: "Press Start 2P", "Helvetica", "Arial", sans-serif;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #555;
}

.header div {
  display: inline-block;
  width: 35%;
}

.header .value {
  font-weight: bold;
}
/* .subtitle {
  font-family: Montserrat, sans-serif;
  font-weight: normal;
} */
</style>