<template>
    <div>
  <strong>Pregunta {{ questionNumber }}:</strong><br/>
  <strong>{{ question.text }} </strong>

  <div v-if="question.type === 'tf'">
    <input type="radio" name="currentQuestion" id="trueAnswer" v-model="answer" value="t"><label for="trueAnswer">True</label><br/>
    <input type="radio" name="currentQuestion" id="falseAnswer" v-model="answer" value="f"><label for="falseAnswer">False</label><br/>
  </div>

  <div v-if="question.type === 'mc'">
    <div v-for="(mcanswer,index) in question.answers" :key="index">
    <input type="radio" :id="'answer'+index" name="currentQuestion" 
    v-model="answer" :value="mcanswer">
    <label :for="'answer'+index">{{mcanswer}}</label><br/>
    </div>
  </div>
 <button v-show="this.answer !==''" @click="submitAnswer">Responder</button>
</div>
</template>

<script>
export default {
    data() {
     return {
       answer:''
     }
  },
  props:['question','question-number','recommendation'],
  created(){
  },
	methods:{
		submitAnswer:function() {
        this.$emit('answer', {answer:this.answer , recommendation: this.recommendation});
        this.answer = null;
        this.recomendation = null;
		
		}
	}

}
</script>
