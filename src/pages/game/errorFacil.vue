<template>
<transition :duration="{ enter: 500, leave: 300 }" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut" mode="out-in">
  <div class="container-fluid px-lg-5">
      <div class="row">
        <header>
                  <h1 class="title">{{title}}</h1>
                <div class="progressContainer">
                  <progress class="progress is-info is-small" :value="(questionIndex/quiz.questions.length)*100" max="100">{{(questionIndex/quiz.questions.length)*100}}%</progress>
                  <p>{{(questionIndex/quiz.questions.length)*100}}% completado</p>
                </div>
				</header>
      </div>

        <div class="d-flex flex-row justify-content-center" v-if="questionIndex<quiz.questions.length" v-bind:key="questionIndex">
          <div class="col" v-for="(response, index) in quiz.questions[questionIndex].responses" :class="{ 'is-selected': userResponses[questionIndex] == index}" :key="index">
            <img :src=response.text  @click="handleAnswer(index)"/>
					</div>
      </div>
      <div v-if="questionIndex >= quiz.questions.length" v-bind:key="questionIndex" class="quizCompleted has-text-centered">
        
				<!-- quizCompletedIcon: Achievement Icon -->
				<span class="icon">
                <i class="fa" :class="score()>3?'fa-check-circle-o is-active':'fa-times-circle'"></i>
              </span>

				<!--resultTitleBlock-->
				<h2 class="title">
				  Hiciste  {{ (score()>7?'un excelente':(score()<4?'un mal':'un buen')) }} trabajo!
				</h2>
				<p class="subtitle">
					Puntaje total: {{ score() }} / {{ quiz.questions.length*10 }}
				</p>
					<br>
					<a class="button" @click="finish()">Regresar <i class="fa fa-refresh"></i></a>
				<!--/resultTitleBlock-->

			</div>
  </div>  
</transition>     
</template>
<script>
import swal from 'sweetalert';
import { mapActions, mapGetters, mapState } from 'vuex'
import Vue from 'vue'
var quiz = {
    user: "Carlos",
    questions: [
              {
                text: "Seleciona la imagen correcta!",
                responses: [
                  { text: "https://drive.google.com/uc?id=1GQ50u3dd2oqsa96tgck9zyKlL3ZV42vI" },
                  { text: "https://drive.google.com/uc?id=14w0YUtLYlYTioslDaVHPBgebqXeuIUKU", correct: true }
                ]
              },
              {
                text: "Seleciona la imagen correcta!",
                responses: [
                  { text: "https://drive.google.com/uc?id=1b7AY49blY_Yruj4MR1z9q08ONWjRmWlE" , correct: true},
                  { text: "https://drive.google.com/uc?id=1mfrmNU8MGMiPBV1aaI_uRdASHQTtc344" }
                ]
              },
              {
                text: "Seleciona la imagen correcta!",
                responses: [
                  { text: "https://drive.google.com/uc?id=1OZb79t991swnFO163Gx8DU-dsqdvVy0r"},
                  { text: "https://drive.google.com/uc?id=1qh2a_l_-Vaboqlxm-8PJwb7OHoZ8cr1G" , correct: true}
                ]
              },
               {
                text: "Seleciona la imagen correcta!",
                responses: [
                  { text: "https://drive.google.com/uc?id=1s8PKN-1O_KHMgM29klpDkSU8kxl8_gzA", correct: true},
                  { text: "https://drive.google.com/uc?id=1fQiCDWKGNmjyMtHCeuuo5CCvbq1XkXJk"}
                ]
              },
              {
                text: "Seleciona la imagen correcta!",
                responses: [
                  { text: "https://drive.google.com/uc?id=1OU2-uL2gBFQGlqY703CD9FWzhKeis3ir", correct: true},
                  { text: "https://drive.google.com/uc?id=1s7Rhmo9V4u0U2Bmg-PlDdXrzNP5DiVUx"}
                ]
              },
              {
                text: "Seleciona la imagen correcta!",
                responses: [
                  { text: "https://drive.google.com/uc?id=1vrNokk7oh1Ut3bi2ZGr7MwSEF_04ufpM", correct: true},
                  { text: "https://drive.google.com/uc?id=1FDX9r-Zqb3Mc3qev5LBr1yM7ehHnnPZ7"}
                ]
              }
            ]
},
   userResponseSkelaton = Array(quiz.questions.length).fill(null);
export default {
    data () {
        return{
            title: 'Elegi la imagen correcta!',
            quiz: quiz,
            scoreError:0,
            questionIndex: 0,
            userResponses: userResponseSkelaton,
            isActive: false,
            continue: false
        }
    },
    components: {
    },
    created(){
       if(this.$store.getters.hasPlayedError){
      this.$router.push({name:'menu'})
    }
    },
    filters: {
      charIndex: function(i) {
         return String.fromCharCode(97 + i);
      }
   },
    methods: {
       ...mapActions([
       'setCustomerScoreE',
       'setHasPlayedError'
     ]),
        finish: function(){
        this.$router.push({name: 'menu'});        
			 	// this.questionIndex=0;
		 		// this.userResponses=Array(this.quiz.questions.length).fill(null);
		 },
      handleAnswer: function(index) {
        Vue.set(this.userResponses, this.questionIndex, index);
        this.questionIndex++;
      },
      next: function() {
         if (this.questionIndex < this.quiz.questions.length)
            this.questionIndex++;
      },

      prev: function() {
         if (this.quiz.questions.length > 0) this.questionIndex--;
      },
      // Return "true" count in userResponses
      score () {
         let score = 0;
         for (let i = 0; i < this.userResponses.length; i++) {
            if (
               typeof this.quiz.questions[i].responses[
                  this.userResponses[i]
               ] !== "undefined" &&
               this.quiz.questions[i].responses[this.userResponses[i]].correct
            ) {
               score = score + 10;
            }
         } 

        this.setCustomerScoreE(score) 
        this.setHasPlayedError(true)
         return score;
      }
    }
}
</script>

<style scoped>
   @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900|Dosis:300,400,600,700,800|Droid+Sans:400,700|Lato:300,400,700,900|PT+Sans:400,700|Ubuntu:300,400,500,700|Open+Sans:400,300,600,700|Roboto:400,300,500,700,900|Roboto+Condensed:400,300,700|Open+Sans+Condensed:300,700|Work+Sans:400,300,700|Play:400,700|Maven+Pro:400,500,700,900&subset=latin,latin-ext);

@import url('https://fonts.googleapis.com/css?family=Press+Start+2P');
img{
   margin:10px;
   cursor: pointer;
}
.title{
  font-family: 'Press Start 2P', 'Helvetica', 'Arial', sans-serif;
}

img:hover {
    border: solid 1px #CCC;
    -moz-box-shadow: 1px 1px 5px  #333;
    -webkit-box-shadow: 1px 1px 5px  #333;
        box-shadow: 1px 1px 5px  #333;
}
.animated {
   transition-duration: 0.3s/2;
}
   .quizCompleted {
      width: 100%;
      padding: 1rem;
		 text-align:center;
   }
   	.icon{
			 color: #FF5252;
			 font-size: 5rem;
		 }
     			 .is-active{
				 color: #00E676;
			 }
  .title,
.subtitle {
   font-family: Montserrat, sans-serif;
   font-weight: normal;
}     
</style>