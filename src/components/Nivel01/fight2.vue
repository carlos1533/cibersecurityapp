<template>
  <div>
    <h1 class="title">Batalla Pokemon Final</h1>
    <div class="battle-scene">
      <div class="box-top-left">
        <h2 class="pokemon">{{ opponentPokemon}}</h2>
        <div class="hp-bar-top">
          <div v-bind:style="opponentHpBar" class="hp-bar-fill"></div>
        </div>
        <h4 class="level">Level {{opponentLevel}}</h4>
          <h4 class="hp">{{opponentHP}}/{{startUserHP}}</h4>
      </div>
      <div class="box-top-right">
        <img v-if="opponentAlive" v-bind:src="opponentPokemonSrc" class="pokemon-top">
      </div>
      <div class="box-bottom-left">
        <img v-if="userAlive" v-bind:src="pokemonSelected" class="pokemon-bottom">
      </div>
      <div class="box-bottom-right">
      <h2 v-if="this.pokemonSelected=='http://img3.wikia.nocookie.net/__cb20150330015216/pokemon/images/f/f5/004Charmander_Pokemon_Mystery_Dungeon_Explorers_of_Sky.png'" class="pokemon">{{pokemonNames}}</h2>
       <h2 v-if="this.pokemonSelected=='http://vignette3.wikia.nocookie.net/ssbb/images/7/79/Squirtle_Rojo_Fuego_y_Verde_Hoja.png/revision/latest?cb=20130907041944&path-prefix=es'" class="pokemon">{{pokemonNames}}</h2>
       <h2 v-if="this.pokemonSelected=='http://vignette4.wikia.nocookie.net/pokemon/images/8/81/001Bulbasaur_Pokemon_Mystery_Dungeon_Explorers_of_Sky.png/revision/latest?cb=20150105223818'" class="pokemon">{{pokemonNames}}</h2> 
        <div class="hp-bar-bottom">
          <div v-bind:style="userHpBar" class="hp-bar-fill"></div>
        </div>
        <h4 class="level">Level {{userLevel}}</h4>
        <h4 class="hp">{{userHP}}/{{startUserHP}}</h4>
      </div>
      <div class="bottom-menu">
        <div class="battle-text text-box-left">{{battleText}}</div>
        <div class="text-box-right">
          <div v-if="optionsOn" id="battleOptions">
            <h4 v-on:click="processOption(1)" class="battle-text-bottom-left">{{battleOptions[0]}}</h4>
            <!--
            <h4 v-on:click="processOption(2)" class="battle-text-top-right">{{battleOptions[1]}}</h4>
            <h4 v-on:click="processOption(3)" class="battle-text-bottom-left">{{battleOptions[2]}}</h4>-->
            <h4 v-on:click="processOption(4)" class="battle-text-bottom-right">{{battleOptions[3]}}</h4>
          </div>
          <div v-if="fightOn" id="fightOptions">
            <!--
            <div>
              <h4 v-on:click="processAttack(1)" class="battle-text-top-left">{{fightOptions[0]}}</h4>
              <h4 v-on:click="processAttack(2)" class="battle-text-top-right">{{fightOptions[1]}}</h4>
              <h4 v-on:click="processAttack(3)" class="battle-text-bottom-left">{{fightOptions[2]}}</h4>
              <h4 v-on:click="processAttack(4)" class="battle-text-bottom-right">{{fightOptions[3]}}</h4>
            </div>-->
          </div>
          <div v-if="endOn" id="endOptions">
            <h4 v-on:click="resetBattle" class="battle-text-top-left">{{endOptions[0]}}</h4>
            <h4 class="battle-text-top-right">{{endOptions[1]}}</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-8 offset-md-2 " >
    <question
      v-if="fightOn"
      :question="questions[currentQuestion]"
      v-on:answer="handleAnswer"
      :question-number="currentQuestion+1"
    ></question>
    </div>

    <!-- end battle scene -->
  </div>
</template>

<script>
import question from "./question";
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  name: "fight2",
  components: {
    question
  },
  computed:{
     ...mapState({
      pokemonSelected:state=>state.pokemonSelected
    })
  },
  props: {}
  ,
  data() {
    return {
      preguntas: {
        questions: [
          {
            text: "¿Cuál es la contraseña más segura?",
            type: "mc",
            answers: ["roSas101", "g1r4s0l$", "G1r4s0l61$"]
            ,answer: "G1r4s0l61$"
          },
          {
            text: "Si me mejor amigo me pide mis credenciales (Usuario y contraseña) para descargar un documento importante ¿Qué hago?",
            type: "mc",
            answers: ["Es mi amigo, se las doy", "Se que es un riesgo, pero igual se la doy", "No se la doy y le digo que es una conducta inapropiada"],
            answer: "No se la doy y le digo que es una conducta inapropiada"
          },
          {
            text: "¿Cuál es la contraseña más segura",
            type: "mc",
            answers: ["PeruCampeOn2019%", "P3ruC4mP30n2019%", "p3ruc4mp30n2019%"],
            answer: "P3ruC4mP30n2019%"
          },
           {
            text: "¿Deberia usar la misma contraseña para todas mis cuentas (correo, facebook, twitter)?",
            type: "mc",
            answers: ["Si, porque solo debo acordarme de una ", "si, porque me parece lo más facil","no porque es un comportamiento inapropiado"]
            ,answer: "no porque es un comportamiento inapropiado"
          },
          {
            text: "¿Cuál es la contraseña más segura?",
            type: "mc",
            answers: ["C0nTr4$3ñ4$3gUr4", "C0nTr4$3", "Contr4señaSegura"],
            answer: "C0nTr4$3ñ4$3gUr4"
          }
        ]
      },
      userPokemonSrc:
        "http://guidesmedia.ign.com/guides/059687/images/blackwhite/pokemans_006.gif",
      opponentPokemonSrc:
        "https://graphics.tppcrpg.net/xy/normal/066F.gif",
      userPokemon: "",
      opponentPokemon: "Machop",
      userAlive: true,
      opponentAlive: true,
      opponentFill: 100,
      userFill: 100,
      userHP: 100,
      startUserHP: 100,
      opponentHP: 100,
      userLevel: 100,
      opponentLevel: 100,
      battleText: "Que hara el pokemon ahora?",
      battleOptions: ["Pelear", "", "", "Escapar"],
      userAttackDamage: [20, 30, 20, 20,30,20,20,30,20],
      opponentAttacks: ["Tackle", "Iron Tail", "Rock Slide","Rock Slide","Tackle"],
      opponentAttackDamage: [20, 20, 20,20,20,20],
      fightOptions: ["Arañazo", "Lanzallamas", "Gruñido","Látigo","Hidrobomba",
      "Cabezazo","Gruñido Growl","Bomba Germen","Polvo Veneno Poison Powder"],
      endOptions: ["Yes", "No"],
      fightOn: false,
      optionsOn: true,
      endOn: false,
      introStage: false,
      questionStage: false,
      resultsStage: false,
      title: "",
      questions: [],
      currentQuestion: 0,
      responsedAnswer: "",
      answers: [],
      correct: 0,
      perc: null,
      userHpBar: {
        width: "100%"
      },
      opponentHpBar: {
        width: "100%"
      },
      pokemonNames:""
    };
  },
  created() {
    this.questions = this.preguntas.questions;
    this.introStage = true;
     if(this.pokemonSelected=='http://img3.wikia.nocookie.net/__cb20150330015216/pokemon/images/f/f5/004Charmander_Pokemon_Mystery_Dungeon_Explorers_of_Sky.png'){
          this.pokemonNames="Charmander"
      }else if(this.pokemonSelected=='http://vignette3.wikia.nocookie.net/ssbb/images/7/79/Squirtle_Rojo_Fuego_y_Verde_Hoja.png/revision/latest?cb=20130907041944&path-prefix=es'){
           this.pokemonNames="Squirtle"
      } else if (this.pokemonSelected=='http://vignette4.wikia.nocookie.net/pokemon/images/8/81/001Bulbasaur_Pokemon_Mystery_Dungeon_Explorers_of_Sky.png/revision/latest?cb=20150105223818'){
        this.pokemonNames="Bulbasur"
      }

    /* fetch('https://api.myjson.com/bins/ahn1p')
    .then(res => res.json())
    .then(res => {
      this.title = res.title;
      this.questions = res.questions;
      this.introStage = true;
    })*/
  },
  
  methods: {
    
    processOption: function(option) {
      switch (option) {
        case 1:
          //handle fight
          this.optionsOn = false;
          this.fightOn = true;
          break;
        case 4:
          //handle run
          setTimeout(() => {
            this.battleText = "Que haras " + this.userPokemon + " do?";
          }, 2000);
          this.battleText = "No puedes.";
          break;
      }
    },
    processAttack: function(attack) {
      switch (attack) {
        case 1:
          //handle scratch
              this.opponentHP -= this.userAttackDamage[attack - 1];
              this.opponentFill -= this.userAttackDamage[attack - 1];
              if (this.opponentFill <= 0) {
            this.opponentHpBar.width = "0%";
          } else {
            this.opponentHpBar.width = this.opponentFill + "%";
          }
              console.log(this.opponentHP)
               console.log(this.opponentFill)
          
           
        
          //edit if HP !== 0
         
          
          if (this.checkOpponentHp()) {
            this.battleText = this.opponentPokemon + " fainted! Play again?";
            this.processFaint(1);
          } else if (this.checkOpponentHp() === false) {
            setTimeout(() => {
              this.processOpponentAttack();
            }, 2000);

            this.battleText =
              this.userPokemon + " usa " + this.fightOptions[attack - 1] + "!";
            //call opponent attack function
            setTimeout(() => {
              if (this.userAlive) {
                setTimeout(() => {
                  this.battleText = "What will " + this.userPokemon + " do?";
                }, 2000);
              }
            }, 2000);
          }
          break;
        case 2:
          //handle fly
              this.opponentHP -= this.userAttackDamage[attack - 1];
              this.opponentFill -= this.userAttackDamage[attack - 1];
        
          //edit if HP !== 0
      
          if (this.opponentFill <= 0) {
            this.opponentHpBar.width = "0%";
          } else {
            this.opponentHpBar.width = this.opponentFill + "%";
          }
          if (this.checkOpponentHp()) {
            this.battleText = this.opponentPokemon + " fainted! Play again?";
            this.processFaint(1);
          } else if (this.checkOpponentHp() === false) {
            setTimeout(() => {
              this.processOpponentAttack();
            }, 2000);

            this.battleText =
              this.userPokemon + " usa " + this.fightOptions[attack - 1] + "!";
            //call opponent attack function
            setTimeout(() => {
              if (this.userAlive) {
                setTimeout(() => {
                  this.battleText = "What will " + this.userPokemon + " do?";
                }, 2000);
              }
            }, 2000);
          }
          break;
        case 3:
          //handle flamethrower
          this.opponentHP -= this.userAttackDamage[attack - 1];
          this.opponentFill -= this.userAttackDamage[attack - 1];
          if (this.opponentFill <= 0) {
            this.opponentHpBar.width = "0%";
          } else {
            this.opponentHpBar.width = this.opponentFill + "%";
          }
          if (this.checkOpponentHp()) {
            this.battleText = this.opponentPokemon + " fainted! Play again?";
            this.processFaint(1);
          } else if (this.checkOpponentHp() === false) {
            setTimeout(() => {
              this.processOpponentAttack();
            }, 2000);

            this.battleText =
              this.userPokemon + " usa " + this.fightOptions[attack - 1] + "!";
            //call opponent attack function
            setTimeout(() => {
              if (this.userAlive) {
                setTimeout(() => {
                  this.battleText = "What will " + this.userPokemon + " do?";
                }, 2000);
              }
            }, 2000);
          }
          break;
        case 4:
          //handle ember
          this.opponentHP -= this.userAttackDamage[attack - 1];
          //edit if HP !== 0
          this.opponentFill -= this.userAttackDamage[attack - 1];
          if (this.opponentFill <= 0) {
            this.opponentHpBar.width = "0%";
          } else {
            this.opponentHpBar.width = this.opponentFill + "%";
          }
          if (this.checkOpponentHp()) {
            this.battleText = this.opponentPokemon + " fainted! Play again?";
            this.processFaint(1);
          } else if (this.checkOpponentHp() === false) {
            setTimeout(() => {
              this.processOpponentAttack();
            }, 2000);

            this.battleText =
              this.userPokemon + " usa " + this.fightOptions[attack - 1] + "!";
            //call opponent attack function
            setTimeout(() => {
              if (this.userAlive) {
                setTimeout(() => {
                  this.battleText = "What will " + this.userPokemon + " do?";
                }, 2000);
              }
            }, 2000);
          }
          break;
          case 5:
          //handle scratch
              this.opponentHP -= this.userAttackDamage[attack - 1];
              this.opponentFill -= this.userAttackDamage[attack - 1];
              if (this.opponentFill <= 0) {
            this.opponentHpBar.width = "0%";
          } else {
            this.opponentHpBar.width = this.opponentFill + "%";
          }
              console.log(this.opponentHP)
               console.log(this.opponentFill)
          
           
        
          //edit if HP !== 0
         
          
          if (this.checkOpponentHp()) {
            this.battleText = this.opponentPokemon + " fainted! Play again?";
            this.processFaint(1);
          } else if (this.checkOpponentHp() === false) {
            setTimeout(() => {
              this.processOpponentAttack();
            }, 2000);

            this.battleText =
              this.userPokemon + " usa " + this.fightOptions[attack - 1] + "!";
            //call opponent attack function
            setTimeout(() => {
              if (this.userAlive) {
                setTimeout(() => {
                  this.battleText = "What will " + this.userPokemon + " do?";
                }, 2000);
              }
            }, 2000);
          }
          break;
             case 6:
          //handle scratch
              this.opponentHP -= this.userAttackDamage[attack - 1];
              this.opponentFill -= this.userAttackDamage[attack - 1];
              if (this.opponentFill <= 0) {
            this.opponentHpBar.width = "0%";
          } else {
            this.opponentHpBar.width = this.opponentFill + "%";
          }
              console.log(this.opponentHP)
               console.log(this.opponentFill)
          
           
        
          //edit if HP !== 0
         
          
          if (this.checkOpponentHp()) {
            this.battleText = this.opponentPokemon + " fainted! Play again?";
            this.processFaint(1);
          } else if (this.checkOpponentHp() === false) {
            setTimeout(() => {
              this.processOpponentAttack();
            }, 2000);

            this.battleText =
              this.userPokemon + " usa " + this.fightOptions[attack - 1] + "!";
            //call opponent attack function
            setTimeout(() => {
              if (this.userAlive) {
                setTimeout(() => {
                  this.battleText = "What will " + this.userPokemon + " do?";
                }, 2000);
              }
            }, 2000);
          }
          break;
             case 7:
          //handle scratch
              this.opponentHP -= this.userAttackDamage[attack - 1];
              this.opponentFill -= this.userAttackDamage[attack - 1];
              if (this.opponentFill <= 0) {
            this.opponentHpBar.width = "0%";
          } else {
            this.opponentHpBar.width = this.opponentFill + "%";
          }
              console.log(this.opponentHP)
               console.log(this.opponentFill)
          
           
        
          //edit if HP !== 0
         
          
          if (this.checkOpponentHp()) {
            this.battleText = this.opponentPokemon + " fainted! Play again?";
            this.processFaint(1);
          } else if (this.checkOpponentHp() === false) {
            setTimeout(() => {
              this.processOpponentAttack();
            }, 2000);

            this.battleText =
              this.userPokemon + " usa " + this.fightOptions[attack - 1] + "!";
            //call opponent attack function
            setTimeout(() => {
              if (this.userAlive) {
                setTimeout(() => {
                  this.battleText = "What will " + this.userPokemon + " do?";
                }, 2000);
              }
            }, 2000);
          }
          break;
             case 8:
          //handle scratch
              this.opponentHP -= this.userAttackDamage[attack - 1];
              this.opponentFill -= this.userAttackDamage[attack - 1];
              if (this.opponentFill <= 0) {
            this.opponentHpBar.width = "0%";
          } else {
            this.opponentHpBar.width = this.opponentFill + "%";
          }
              console.log(this.opponentHP)
               console.log(this.opponentFill)
          
           
        
          //edit if HP !== 0
         
          
          if (this.checkOpponentHp()) {
            this.battleText = this.opponentPokemon + " fainted! Play again?";
            this.processFaint(1);
          } else if (this.checkOpponentHp() === false) {
            setTimeout(() => {
              this.processOpponentAttack();
            }, 2000);

            this.battleText =
              this.userPokemon + " usa " + this.fightOptions[attack - 1] + "!";
            //call opponent attack function
            setTimeout(() => {
              if (this.userAlive) {
                setTimeout(() => {
                  this.battleText = "What will " + this.userPokemon + " do?";
                }, 2000);
              }
            }, 2000);
          }
          break;  
           case 9:
          //handle scratch
              this.opponentHP -= this.userAttackDamage[attack - 1];
              this.opponentFill -= this.userAttackDamage[attack - 1];
              if (this.opponentFill <= 0) {
            this.opponentHpBar.width = "0%";
          } else {
            this.opponentHpBar.width = this.opponentFill + "%";
          }
              console.log(this.opponentHP)
               console.log(this.opponentFill)
          
           
        
          //edit if HP !== 0
         
          
          if (this.checkOpponentHp()) {
            this.battleText = this.opponentPokemon + " fainted! Play again?";
            this.processFaint(1);
          } else if (this.checkOpponentHp() === false) {
            setTimeout(() => {
              this.processOpponentAttack();
            }, 2000);

            this.battleText =
              this.userPokemon + " usa " + this.fightOptions[attack - 1] + "!";
            //call opponent attack function
            setTimeout(() => {
              if (this.userAlive) {
                setTimeout(() => {
                  this.battleText = "What will " + this.userPokemon + " do?";
                }, 2000);
              }
            }, 2000);
          }
          break;   
      }
    },
    checkOpponentHp: function() {
      if (this.opponentHP <= 0) {
        //fainted
        this.currentQuestion=0
        return true;
      } else {
        //battle continues
        return false;
      }
    },
    processFaint: function(pokemon) {
      this.fightOn = false;
      this.endOn = true;
      if (pokemon === 1) {
        this.opponentAlive = false;
        this.currentQuestion=0
        alert("ha ganado!")
      } else {
        this.userHP = 0;
        this.userAlive = false;
      }
         
    },
    processOpponentAttack: function() {
      //generate random number
      var random = Math.floor(Math.random() * 4 + 1);
      //do damage to user
      this.userHP -= this.opponentAttackDamage[random - 1];
      this.userFill -= this.opponentAttackDamage[random - 1];
      if (this.userFill <= 0) {
        this.userHpBar.width = "0%";
      } else {
        this.userHpBar.width = this.userFill + "%";
      }
      if (this.checkUserHp()) {
        //add battle text
        this.battleText = this.userPokemon + " fainted! Play again?";
        this.processFaint(2);
      } else if (this.checkOpponentHp() === false) {
        //continue battle
        this.battleText =
          this.opponentPokemon +
          " usa " +
          this.opponentAttacks[random - 1] +
          "!";
        this.fightOn = false;
        this.optionsOn = true;
      }
    },
    checkUserHp: function() {
      if (this.userHP <= 0) {
        //fainted
        this.currentQuestion=0
        return true;
      } else {
        //battle continues
        return false;
      }
    },
    resetBattle: function() {
      //reset data to start new game
      this.endOn = false;
      this.fightOn = false;
      this.optionsOn = true;
      this.battleText = "Que hara el pokemon?";
      this.userAlive = true;
      this.opponentAlive = true;
      this.userHP = 100;
      this.opponentHP = 100;
      this.userFill = 100;
      this.opponentFill = 100;
      this.userHpBar.width = "100%";
      this.opponentHpBar.width = "100%";
      this.currentQuestion=0
       this.$router.push({name: 'tuto'});    
    },
    startQuiz() {
      this.introStage = false;
      this.questionStage = true;
    },
    handleAnswer(e) {
       this.answers[this.currentQuestion]=e.answer;
       this.responsedAnswer =e.answer
      
        if(this.responsedAnswer =="G1r4s0l61$" ||this.responsedAnswer =="No se la doy y le digo que es una conducta inapropiada"
        ||this.responsedAnswer =="P3ruC4mP30n2019%"||this.responsedAnswer =="no porque es un comportamiento inapropiado"
        ||this.responsedAnswer =="C0nTr4$3ñ4$3gUr4"){
         if( this.pokemonNames=="Charmander"){
           this.processAttack(2)
         }else if (this.pokemonNames=="Squirtle"){
            this.processAttack(5)
         }else if (this.pokemonNames=="Bulbasur"){
            this.processAttack(8)
         }
           
        }else if(this.responsedAnswer =="g1r4s0l$" 
       ||this.responsedAnswer =="Se que es un riesgo, pero igual se la doy"
       ||this.responsedAnswer =="PeruCampeOn2019%"
       ||this.responsedAnswer =="Si, porque solo debo acordarme de una"
       ||this.responsedAnswer =="C0nTr4$3"){
            if( this.pokemonNames=="Charmander"){
           this.processAttack(1)
         }else if (this.pokemonNames=="Squirtle"){
            this.processAttack(4)
         }else if (this.pokemonNames=="Bulbasur"){
            this.processAttack(6)
         }
        }else if(this.responsedAnswer =="roSas101" ||this.responsedAnswer =="Es mi amigo, se las doy"
        ||this.responsedAnswer =="p3ruc4mp30n2019%"
         ||this.responsedAnswer =="si, porque me parece lo más facil"
          ||this.responsedAnswer =="Contr4señaSegura"){
             if( this.pokemonNames=="Charmander"){
           this.processAttack(3)
         }else if (this.pokemonNames=="Squirtle"){
            this.processAttack(6)
         }else if (this.pokemonNames=="Bulbasur"){
            this.processAttack(9)
         }
        }
        console.log(this.currentQuestion)
        this.currentQuestion++;
      
      },
    handleResults() {
      //console.log("handle results");
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
  }
};
</script>

<style scoped with <style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

@import url("https://fonts.googleapis.com/css?family=PT+Sans+Narrow");
/*
html,
body {
  //height: 100%;
  background: 
  linear-gradient(
    rgba(24%, 48%, 80%, 0.9),
    rgba(24%, 48%, 80%, 0.9)
  )
  , url("http://wallpapercave.com/wp/ZqCwNUM.jpg");
}
*/
body {
  //display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  position: relative;
  margin-top: 10px;
  color: black;
  text-align: center;
  font-size: 28px;
  text-transform: uppercase;
  font-family: "Roboto Condensed";
}

.battle-scene {
  position: relative;
  margin: auto;
  display: block;
  margin-top: 3%;
  width: 600px;
  height: 420px;
  background: #f8f8f8;
  z-index: 1;
}

.box-top-left {
  position: absolute;
  width: 40%;
  height: 15%;
  border-radius: 10px;
  top: 8%;
  left: 8%;
  background: #f8f8d8;
  border: 6px solid #506860;
}

.hp-bar-top {
  position: absolute;
  bottom: 16%;
  height: 20%;
  width: 70%;
  left: 10%;
  border-radius: 20px;
  background: grey;
  opacity: 0.5;
}

.hp-bar-bottom {
  position: absolute;
  bottom: 32%;
  height: 20%;
  width: 70%;
  left: 10%;
  border-radius: 20px;
  background: grey;
  opacity: 0.5;
}

.hp-bar-fill {
  position: absolute;
  height: 100%;
  border-radius: 20px;
  background: #ff8800;
}

.box-top-right {
  position: absolute;
  width: 40%;
  height: 25%;
  border-radius: 50%;
  top: 25%;
  right: 8%;
  background: #e0e0e0;
}

.pokemon-top {
  height: 150%;
  width: 50%;
  position: absolute;
  top: -80%;
  left: 25%;
}

.pokemon-bottom {
  height: 150%;
  width: 100%;
  position: absolute;
  top: -75%;
  left: 2%;
}

.box-bottom-left {
  position: absolute;
  width: 40%;
  height: 25%;
  border-radius: 50%;
  bottom: 15%;
  left: 8%;
  background: #e0e0e0;
}

.box-bottom-right {
  position: absolute;
  width: 38%;
  height: 20%;
  border-radius: 10px;
  bottom: 20%;
  right: 8%;
  background: #f8f8d8;
  border: 6px solid #506860;
  z-index: 2;
}

.pokemon {
  text-align: left;
  margin-left: 10%;
  margin-top: 5%;
  opacity: 0.7;
  font-size: 18px;
  font-family: "Roboto Condensed";
}

.level {
  position: absolute;
  right: 8%;
  top: -11%;
  opacity: 0.7;
  font-size: 16px;
  font-family: "Roboto Condensed";
}

.hp {
  position: absolute;
  right: 8%;
  bottom: -20%;
  opacity: 0.7;
  font-size: 16px;
  font-family: "Roboto Condensed";
}

.bottom-menu {
  position: absolute;
  width: 98%;
  bottom: 0%;
  height: 19%;
  background: #285068;
  z-index: 1;
  border: solid 6px #ceb46d;
}

.text-box-left {
  position: absolute;
  width: 50%;
  left: 0%;
  height: 95%;
}

.text-box-right {
  position: absolute;
  width: 40%;
  top: -6%;
  right: -1%;
  height: 98%;
  background: #f8f8f8;
  border: solid 6px #6f677f;
}

.battle-text {
  margin-top: 3%;
  margin-left: 5%;
  opacity: 0.95;
  font-size: 18px;
  color: white;
  text-align: left;
  font-family: "PT Sans Narrow";
}

.battle-text-top-left {
  opacity: 0.95;
  position: absolute;
  font-size: 22px;
  color: #333333;
  top: -30%;
  left: 10%;
  text-align: left;
  font-family: "PT Sans Narrow";
  cursor: pointer;
}

.battle-text-bottom-left {
  opacity: 0.95;
  position: absolute;
  font-size: 22px;
  color: #333333;
  bottom: -30%;
  left: 10%;
  text-align: left;
  font-family: "PT Sans Narrow";
  cursor: pointer;
}

.battle-text-top-right {
  opacity: 0.95;
  position: absolute;
  font-size: 22px;
  color: #333333;
  top: -30%;
  right: 21%;
  text-align: left;
  font-family: "PT Sans Narrow";
  cursor: pointer;
}

.battle-text-bottom-right {
  opacity: 0.95;
  position: absolute;
  font-size: 22px;
  color: #333333;
  bottom: -30%;
  right: 20%;
  text-align: left;
  font-family: "PT Sans Narrow";
  cursor: pointer;
}

@media all and (max-width: 600px) {
  .battle-scene {
    position: relative;
    margin: auto;
    display: block;
    margin-top: 3%;
    width: 400px;
    height: 280px;
    background: #f8f8f8;
    z-index: 1;
  }

  .title {
    position: absolute;
    top: -33%;
    left: 7.5%;
    color: white;
    text-align: center;
    font-size: 22px;
    text-transform: uppercase;
    font-family: "Roboto Condensed";
  }

  .pokemon {
    text-align: left;
    margin-left: 11%;
    margin-top: 5%;
    opacity: 0.7;
    font-size: 14px;
    font-family: "Roboto Condensed";
  }

  .level {
    position: absolute;
    right: 5%;
    top: -13%;
    opacity: 0.7;
    font-size: 10px;
    font-family: "Roboto Condensed";
  }

  .hp {
    position: absolute;
    right: 8%;
    bottom: -20%;
    opacity: 0.7;
    font-size: 11px;
    font-family: "Roboto Condensed";
  }

  .battle-text-top-left {
    opacity: 0.95;
    position: absolute;
    font-size: 14px;
    color: #333333;
    //top: -30%;
    left: 10%;
    text-align: left;
    font-family: "PT Sans Narrow";
    cursor: pointer;
  }

  .battle-text-bottom-left {
    opacity: 0.95;
    position: absolute;
    font-size: 14px;
    color: #333333;
    //bottom: -30%;
    left: 10%;
    text-align: left;
    font-family: "PT Sans Narrow";
    cursor: pointer;
  }

  .battle-text-top-right {
    opacity: 0.95;
    position: absolute;
    font-size: 14px;
    color: #333333;
    //top: -30%;
    right: 21%;
    text-align: left;
    font-family: "PT Sans Narrow";
    cursor: pointer;
  }

  .battle-text-bottom-right {
    opacity: 0.95;
    position: absolute;
    font-size: 14px;
    color: #333333;
    bottom: -20%;
    right: 20%;
    text-align: left;
    font-family: "PT Sans Narrow";
    cursor: pointer;
  }

  .battle-text {
    margin-top: 1%;
    margin-left: 5%;
    opacity: 0.95;
    font-size: 10px;
    color: white;
    text-align: left;
    font-family: "PT Sans Narrow";
  }
}
</style>



