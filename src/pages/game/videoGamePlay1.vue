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
export default {
  data() {
    return {
      preguntas: {
        questions: [
          {
            text: "¿Que opción le recomendarias a Chicho?",
            type: "mc",
            answers: [
              "Al menos 8 carácteres y dígitos (alfanumerico).",
              "Contraseñas largas que tienen letras mayusculas y minusculas, signos de puntuación, simbolos y números",
              "Palabras cortas en otro idioma, escritas al revez y con faltas ortográficas"
            ],
            answer:
              "Contraseñas largas que tienen letras mayusculas y minusculas, signos de puntuación, simbolos y números"
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
    this.questions = this.preguntas.questions;
    this.introStage = true;
  },
  methods: {
    ...mapActions(["setCustomerScoreVideo01", "setCustomerHasPlayesVideo01"]),
    handleAnswer(e) {
      this.answers[this.currentQuestion] = e.answer;
      if (this.currentQuestion + 1 === this.questions.length) {
        this.handleResults();
        this.questionStage = false;
        this.resultsStage = true;
        const score = 10;
        this.setCustomerScoreVideo01(10);
        swal(
          "UTILIZA CONTRASEÑAS ROBUSTAS QUE NO SEAN FACILES DE ADIVINAR, CONVINA MAYUSCULAS, MINUSCULAS, NÚMEROS Y CARACTERES RAROS."
        );
        this.setCustomerHasPlayesVideo01(true);
        this.$router.push({ name: "videoGame" });
      } else {
        this.currentQuestion++;
      }
    },
    handleResults() {
      this.questions.forEach((a, index) => {
        if (this.answers[index] === a.answer) {
          this.correct++;
        } else {
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