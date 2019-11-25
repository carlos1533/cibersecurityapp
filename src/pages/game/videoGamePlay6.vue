<template>
  <div>
    <question
      :question="questions[currentQuestion]"
      v-on:answer="handleAnswer"
      :question-number="currentQuestion+1"
    ></question>
  </div>
</template>

<script>
import question from "../../components/Nivel01/question";
import { mapActions, mapGetters, mapState } from "vuex";
import swal from "sweetalert";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      preguntas: {
        questions: [
          {
            text: "¿Chicho deberia dar esa información?",
            type: "mc",
            answers: [
              "Es lo mínimo que tiene que hacer para conocer el fantastico premio",
              "El que algo quiere algo le cuesta y los datos personales no son importantes",
              "La información personal es muy valiosa y no se la debemos dar a cualquiera"
            ],
            answer:
              "La información personal es muy valiosa y no se la debemos dar a cualquiera"
          }
        ]
      },
      title: "",
      questions: [],
      currentQuestion: 0,
      answers: [],
      correct: 0,
      perc: null,
      introStage: false,
      questionStage: false,
      resultsStage: false
    };
  },
  created() {
    if (this.$store.getters.hasPlayedVideo6) {
      this.$router.push({ name: "menu" });
    }
    this.questions = this.preguntas.questions;
    this.introStage = true;
  },
  methods: {
    ...mapActions(["setCustomerScoreVideo06", "setCustomerHasPlayesVideo06"]),
    handleAnswer(e) {
      this.answers[this.currentQuestion] = e.answer;
      if (this.currentQuestion + 1 === this.questions.length) {
        this.handleResults();
        this.questionStage = false;
        this.resultsStage = true;
        this.$router.push({ name: "videoGame" });
      } else {
        this.currentQuestion++;
      }
    },
    handleResults() {
      this.questions.forEach((a, index) => {
        if (this.answers[index] === a.answer) {
          this.correct++;
          Swal.fire({
            title: "Recomendacion",
            text:
              "LOS DATOS PERSONALES SON MUY IMPORTANTES, NO SE LOS DES A CUALQUIER Y NO INGRESES TU CONTRASEÑA EN SITIOS WEB QUE NO CONOCES.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirmar"
          }).then(result => {
            Swal.fire("Correcto!", "Has respondido bien", "success");
          });
          const score = 10;
          this.setCustomerScoreVideo06(10);
          this.setCustomerHasPlayesVideo06(true);
          this.perc = ((this.correct / this.questions.length) * 100).toFixed(2);
        } else {
          Swal.fire({
            title: "Recomendacion",
            text:
              "LOS DATOS PERSONALES SON MUY IMPORTANTES, NO SE LOS DES A CUALQUIER Y NO INGRESES TU CONTRASEÑA EN SITIOS WEB QUE NO CONOCES.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirmar"
          }).then(result => {
            Swal.fire("Incorrecto!", "Has respondido mal", "error");
          });
          // this.perc = ((this.correct / this.questions.length) * 100).toFixed(2);
        }
      });
      //this.perc = ((this.correct / this.questions.length) * 100).toFixed(2);
    }
  },
  components: {
    question
  }
};
</script>

<style>
</style>