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
import swal from 'sweetalert';
export default {
    data(){
        return{
        preguntas: {
        questions: [
          {
            text: "¿Chicho deberia dar esa información?",
            type: "mc",
            answers: ["Es lo mínimo que tiene que hacer para conocer el fantastico premio","el que algo quiere algo le cuesta y los datos personales no son importantes","la información personal es muy valiosa y no se la debemos dar a cualquiera"],
            answer: "la información personal es muy valiosa y no se la debemos dar a cualquiera."
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
              if(this.$store.getters.hasPlayedVideo6){
      this.$router.push({name:'menu'})
    }
        // this.title = title;
      this.questions = this.preguntas.questions;
      this.introStage = true;
    },
    methods:{
    ...mapActions([
       'setCustomerScoreVideo06',
       'setCustomerHasPlayesVideo05'
    ]),
          handleAnswer(e) {
           this.answers[this.currentQuestion]=e.answer;
           if((this.currentQuestion+1) === this.questions.length) {
        this.handleResults();
        this.questionStage = false;
        this.resultsStage = true;
            const score= 10
        this.setCustomerScoreVideo06(10)
        swal('Proteger tu dispositivo te evitará muchos problemas !BlOQUEA TU SMARTPHONE!')
          this.setCustomerHasPlayesVideo06(true)
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