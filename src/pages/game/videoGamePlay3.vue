<template>

  <div>
      <question
      :question="questions[currentQuestion]"
      v-on:answer="handleAnswer"
      :question-number="currentQuestion+1"
    ></question>
    <div v-if="resultsStage">
    You got {{correct}} right out of {{questions.length}} questions. Your percentage is {{perc}}%.
  </div>
    </div>
</template>

<script>
import question from "../../components/Nivel01/question";
import { mapActions, mapGetters, mapState } from 'vuex';
import swal from 'sweetalert';
export default {
    data(){
        return{
        preguntas: {
        questions: [
          {
            text: "¿Que le dirías a Chicho?",
            type: "mc",
            answers: ["Que utilice contraseñas que sean faciles de recordar y asi no será necesario que anotarla.", "Que esta bien que apunte su contraseña y que la deje cerca a la computadora para tenerla a la mano cuando la necesita.", "Que intente memorizar la contraseña antes de escribirla, en todo caso si la escribe que guarde el papel en un lugar seguro donde solo el tenga acceso."],
            answer: "Que intente memorizar la contraseña antes de escribirla, en todo caso si la escribe que guarde el papel en un lugar seguro donde solo el tenga acceso."
          }
        ],
        },
         title:'',
      questions:[],
      currentQuestion:0,
      answers:[],
      correct:0,
      perc:null,
      introStage:false,
      questionStage:false,
      resultsStage:false
      }
        },
    created() {
        // this.title = title;
      if(this.$store.getters.hasPlayedVideo3){
      this.$router.push({name:'menu'})
    }
      this.questions = this.preguntas.questions;
      this.introStage = true;
    },
    methods:{
          ...mapActions([
       'setCustomerScoreVideo03',
       'setCustomerHasPlayesVideo03'
    ]),
          handleAnswer(e) {
           this.answers[this.currentQuestion]=e.answer;
           if((this.currentQuestion+1) === this.questions.length) {
        this.handleResults();
        this.questionStage = false;
        this.resultsStage = true;
         const score= 10
        this.setCustomerScoreVideo03(10)
        swal('Evita escribir tus contraseñas y dejarlas cerca de la computadora, alguien prodría verla y acceder a tu información.')
        this.setCustomerHasPlayesVideo03(true)
        this.$router.push({name: 'videoGame'});
      } else {
        this.currentQuestion++;
      }
          },
            handleResults() {
            this.questions.forEach((a, index) => {
        if (this.answers[index] === a.answer){
          this.correct++;
        }else{
            this.perc = ((this.correct / this.questions.length)*100).toFixed(2);
      console.log(this.correct+' '+this.perc);
        }  
      });
      this.perc = ((this.correct / this.questions.length) * 100).toFixed(2);
      console.log(this.correct + " " + this.perc);
    }
    },
     components: {
    question
  }
}
</script>

<style>

</style>