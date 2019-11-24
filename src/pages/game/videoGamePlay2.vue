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
            text: "¿Que le dirías a Chicho?",
            type: "mc",
            answers: [
              "Que use información personal como su DNI, nombre, apellido, fecha de nacimiento, etc.",
              "Que utilice contraseñas faciles de recordar como 123456, abc123, qwerty, etc.",
              "Que no es seguro usar información personal como su DNI, nombre, apellido, fecha de nacimiento, etc."
            ],
            answer:
              "Que no es seguro usar información personal como su DNI, nombre, apellido, fecha de nacimiento, etc."
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
    if (this.$store.getters.hasPlayedVideo2) {
      this.$router.push({ name: "menu" });
    }
    this.questions = this.preguntas.questions;
    this.introStage = true;
  },
  methods: {
    ...mapActions(["setCustomerScoreVideo02", "setCustomerHasPlayesVideo02"]),
    handleAnswer(e) {
      this.answers[this.currentQuestion] = e.answer;
      if (this.currentQuestion + 1 === this.questions.length) {
        this.handleResults();
        this.questionStage = false;
        this.resultsStage = true;
        const score = 10;
        this.setCustomerScoreVideo02(10);
        this.setCustomerHasPlayesVideo02(true);
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
              "EVITA UTILIZAR INFORMACIÓN PERSONAL, YA QUE ES ALGO QUE LA MAYORIA CONOCE Y PODRÍAN ADIVINAR TU CONTRASEÑA.",
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
              "EVITA UTILIZAR INFORMACIÓN PERSONAL, YA QUE ES ALGO QUE LA MAYORIA CONOCE Y PODRÍAN ADIVINAR TU CONTRASEÑA.",
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