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
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
    data(){
        return{
        preguntas: {
        questions: [
           {
            text: "¿Que le decimos a Paco?",
            type: "mc",
            answers: ["ok, así ademas no me molesta","Vale, pero le pido que tenga cuidado con lo que hace en mi cuenta.","amigo, las contraseñas no se comparten. En cuento llegue a casa te lo envio"]
            ,answer: "amigo, las contraseñas no se comparten. En cuento llegue a casa te lo envio"
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
      this.questions = this.preguntas.questions;
      this.introStage = true;
    },
    methods:{
              ...mapActions([
       'setCustomerScoreVideo04'
    ]),
          handleAnswer(e) {
           this.answers[this.currentQuestion]=e.answer;
           if((this.currentQuestion+1) === this.questions.length) {
        this.handleResults();
        this.questionStage = false;
        this.resultsStage = true;
          const score= 10
        this.setCustomerScoreVideo04(10)
         this.$router.push({name: 'menu'});
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