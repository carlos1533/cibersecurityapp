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
            text: "¿Que le decimos a Paco?",
            type: "mc",
            answers: [
              "ok, así ademas no me molesta",
              "Vale, pero le pido que tenga cuidado con lo que hace en mi cuenta.",
              "amigo, las contraseñas no se comparten. En cuento llegue a casa te lo envio"
            ],
            answer:
              "amigo, las contraseñas no se comparten. En cuento llegue a casa te lo envio"
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
    if (this.$store.getters.hasPlayedVideo4) {
      this.$router.push({ name: "menu" });
    }
    this.questions = this.preguntas.questions;
    this.introStage = true;
  },
  methods: {
    ...mapActions(["setCustomerScoreVideo04", "setCustomerHasPlayesVideo04"]),
    handleAnswer(e) {
      this.answers[this.currentQuestion] = e.answer;
      if (this.currentQuestion + 1 === this.questions.length) {
        this.handleResults();
        this.questionStage = false;
        this.resultsStage = true;
        const score = 10;
        this.setCustomerScoreVideo04(10);
        this.setCustomerHasPlayesVideo04(true);
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
              "UNA CONTRASEÑA ROBUSTA Y DIFERENTE PARA CADA SERVICIO ES CUANTO DEBES RECORDAR PARA UN USO CORRECTO Y POR SUPUESTO NO LA COMPARTAS CON NADIE",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirmar"
          }).then(result => {
            Swal.fire("Correcto!", "Has respondido bien", "success");
          });
        } else {
          Swal.fire({
            title: "Recomendacion",
            text:
              "UNA CONTRASEÑA ROBUSTA Y DIFERENTE PARA CADA SERVICIO ES CUANTO DEBES RECORDAR PARA UN USO CORRECTO Y POR SUPUESTO NO LA COMPARTAS CON NADIE",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirmar"
          }).then(result => {
            Swal.fire("Incorrecto!", "Has respondido mal", "warning");
          });
          this.perc = ((this.correct / this.questions.length) * 100).toFixed(2);
        }
      });
      this.perc = ((this.correct / this.questions.length) * 100).toFixed(2);
    }
  },
  components: {
    question
  }
};
</script>

<style>
</style>