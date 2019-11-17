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
            text: "¿Que le decimos a Luis?",
            type: "mc",
            answers: ["No seas vago, es solo un momento y asi evito que alguien lo coja y vea mi información.", "es es verdad, lo voy a quitar porque solo sirve para molestar", "Cierto ademas quien querria coger mi movil para gastarme una broma"],
            answer: "No seas vago, es solo un momento y asi evito que alguien lo coja y vea mi información."
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
       'setCustomerScoreVideo05'
    ]),
          handleAnswer(e) {
           this.answers[this.currentQuestion]=e.answer;
           if((this.currentQuestion+1) === this.questions.length) {
        this.handleResults();
        this.questionStage = false;
        this.resultsStage = true;
           const score= 10
        this.setCustomerScoreVideo05(10)
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