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
export default {
    data(){
        return{
        preguntas: {
        questions: [
          {
            text: "¿Que opción le recomendarias a Chicho?",
            type: "mc",
            answers: ["Al menos 8 carácteres y dígitos (alfanumerico).", "Contraseñas largas que tienen letras mayusculas y minusculas, signos de puntuación, simbolos y números", "Palabras cortas en otro idioma, escritas al revez y con faltas ortográficas"]
            ,answer: "Contraseñas largas que tienen letras mayusculas y minusculas, signos de puntuación, simbolos y números"
          },
          {
            text: "¿Que le dirías a Chicho?",
            type: "mc",
            answers: ["Que use información personal como su DNI, nombre, apellido, fecha de nacimiento, etc.", "Que utilice contraseñas faciles de recordar como 123456, abc123, qwerty, etc.","Que no es seguro usar información personal como su DNI, nombre, apellido, fecha de nacimiento, etc."],
            answer: "Que no es seguro usar información personal como su DNI, nombre, apellido, fecha de nacimiento, etc."
          },
          {
            text: "¿Que le dirías a Chicho?",
            type: "mc",
            answers: ["Que utilice contraseñas que sean faciles de recordar y asi no será necesario que anotarla.", "Que esta bien que apunte su contraseña y que la deje cerca a la computadora para tenerla a la mano cuando la necesita.", "Que intente memorizar la contraseña antes de escribirla, en todo caso si la escribe que guarde el papel en un lugar seguro donde solo el tenga acceso."],
            answer: "Que intente memorizar la contraseña antes de escribirla, en todo caso si la escribe que guarde el papel en un lugar seguro donde solo el tenga acceso."
          },
           {
            text: "¿Que le decimos a Paco?",
            type: "mc",
            answers: ["ok, así ademas no me molesta","Vale, pero le pido que tenga cuidado con lo que hace en mi cuenta.","amigo, las contraseñas no se comparten. En cuento llegue a casa te lo envio"]
            ,answer: "amigo, las contraseñas no se comparten. En cuento llegue a casa te lo envio"
          },
          {
            text: "¿Que le decimos a Luis?",
            type: "mc",
            answers: ["No seas vago, es solo un momento y asi evito que alguien lo coja y vea mi información.", "es es verdad, lo voy a quitar porque solo sirve para molestar", "Cierto ademas quien querria coger mi movil para gastarme una broma"],
            answer: "No seas vago, es solo un momento y asi evito que alguien lo coja y vea mi información."
          },
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
        // this.title = title;
      this.questions = this.preguntas.questions;
      this.introStage = true;
    },
    methods:{
          handleAnswer(e) {
           this.answers[this.currentQuestion]=e.answer;
           if((this.currentQuestion+1) === this.questions.length) {
        this.handleResults();
        this.questionStage = false;
        this.resultsStage = true;
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