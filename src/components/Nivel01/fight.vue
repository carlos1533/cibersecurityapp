<template>
  <div>
    <h1 class="title">Batalla Pokemon Inicial</h1>
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
        <img v-if="opponentAlive" v-bind:src="opponentPokemonSrc" class="pokemon-top" />
      </div>

      <div class="box-bottom-left">
        <img v-if="userAlive" v-bind:src="this.pokemon" class="pokemon-bottom" />
      </div>

      <div class="box-bottom-right">
        <h2
          v-if="this.pokemon=='https://drive.google.com/uc?id=1He2-AuSj_C4n1WkzkQSw0WFS7FkViwSL'"
          class="pokemon"
        >{{pokemonNames}}</h2>
        <h2
          v-if="this.pokemon=='https://drive.google.com/uc?id=1_fvt0YLkCW5iGY94Vivcoyo86IurqiXb'"
          class="pokemon"
        >{{pokemonNames}}</h2>
        <h2
          v-if="this.pokemon=='https://drive.google.com/uc?id=1U_frs8J4TQ9nzSR-msnrqj5mMrffn2lv'"
          class="pokemon"
        >{{pokemonNames}}</h2>
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
    <div class="col-md-8 offset-md-2">
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
import { mapActions, mapState } from "vuex";
import Swal from "sweetalert2";
import swal from "sweetalert";
export default {
  components: {
    question
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
    ...mapState({
      pokemonSelected: state => state.pokemonSelected
    })
  },
  props: {},
  mounted() {
    if (
      this.pokemonSelected ==
      "https://drive.google.com/uc?id=1JT2xCSd5RRiScGUnlIuNUvN5gxX9zJSp"
    ) {
      this.pokemon =
        "https://drive.google.com/uc?id=1He2-AuSj_C4n1WkzkQSw0WFS7FkViwSL";
    } else if (
      this.pokemonSelected ==
      "https://drive.google.com/uc?id=1CU1t2sTE8wodJoqAUH2AZbryEv1KC1Fm"
    ) {
      this.pokemon =
        "https://drive.google.com/uc?id=1_fvt0YLkCW5iGY94Vivcoyo86IurqiXb";
    } else if (
      this.pokemonSelected ==
      "https://drive.google.com/uc?id=1-zseG8uhlsuaQh7orGIuT5Y1MhkV4EVR"
    ) {
      this.pokemon =
        "https://drive.google.com/uc?id=1U_frs8J4TQ9nzSR-msnrqj5mMrffn2lv";
    }
  },

  data() {
    return {
      pokemon: "",
      preguntas: {
        questions: [
          {
            text:
              "¿Cuál es la contraseña que tiene caracteristicas más seguras?",
            type: "mc",
            answers: ["peru", "perucampeon", "brasil"],
            answer: "perucampeon"
          },
          {
            text:
              "¿Cuál es la contraseña que tiene caracteristicas más seguras?",
            type: "mc",
            answers: ["PokemOn", "pokemon", "pikachu"],
            answer: "PokemOn"
          },
          {
            text:
              "¿Cuál es la contraseña que tiene caracteristicas más seguras?",
            type: "mc",
            answers: ["pOkemOn154", "pokemon154", "p0ke154"],
            answer: "pOkemOn154"
          },
          {
            text:
              "¿Cuál es la contraseña que tiene caracteristicas más seguras?",
            type: "mc",
            answers: ["m4st3r#$", "master#", "M4st3r#$"],
            answer: "M4st3r#$"
          },
          {
            text:
              "¿Cuál es la contraseña que tiene caracteristicas más seguras?",
            type: "mc",
            answers: [
              "1ng3N13r1a$istemaS",
              "1ng3n13r1a$istemas",
              "ingenieria$istemas"
            ],
            answer: "1ng3N13r1a$istemaS"
          },
          {
            text:
              "¿Cuál es la contraseña que tiene caracteristicas más seguras?",
            type: "mc",
            answers: ["15p0k3m0n36", "15pokemon36", "15P0k3M0n36"],
            answer: "15P0k3M0n36"
          },
          {
            text:
              "¿Cuál es la contraseña que tiene caracteristicas más seguras?",
            type: "mc",
            answers: ["charizard25$", "Chariz4rd25$", "Char25$"],
            answer: "Chariz4rd25$"
          }
        ]
      },
      userPokemonSrc:
        "http://guidesmedia.ign.com/guides/059687/images/blackwhite/pokemans_006.gif",
      opponentPokemonSrc:
        "https://drive.google.com/uc?id=16Poo9wg7D-Cz35e3t4N2CvQjFTpeef6f",
      userPokemon: "",
      opponentPokemon: "Lugia",
      userAlive: true,
      opponentAlive: true,
      opponentFill: 100,
      userFill: 100,
      userHP: 100,
      startUserHP: 100,
      opponentHP: 100,
      userLevel: 1,
      opponentLevel: 1,
      battleText: "Que hara el pokemon ahora?",
      battleOptions: ["Pelear", "", "", "Escapar"],
      userAttackDamage: [10, 20, 10, 10, 20, 10, 10, 20, 10],
      opponentAttacks: [
        "Paranormal",
        "Cola Dragon",
        "Paranormal",
        "Premonicion",
        "Hidrobomba"
      ],
      opponentAttackDamage: [15, 15, 15, 15, 15],
      fightOptions: [
        "Arañazo",
        "Lanzallamas",
        "Gruñido",
        "Látigo",
        "Hidrobomba",
        "Cabezazo",
        "Gruñido Growl",
        "Bomba Germen",
        "Polvo Veneno Poison Powder"
      ],
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
      pokemonNames: ""
    };
  },
  created() {
    if (this.$store.getters.hasPlayedPokemom) {
      this.$router.push({ name: "menu" });
    }
    this.questions = this.preguntas.questions;
    this.introStage = true;
    if (
      this.pokemonSelected ==
      "https://drive.google.com/uc?id=1JT2xCSd5RRiScGUnlIuNUvN5gxX9zJSp"
    ) {
      this.pokemonNames = "Charizard";
    } else if (
      this.pokemonSelected ==
      "https://drive.google.com/uc?id=1CU1t2sTE8wodJoqAUH2AZbryEv1KC1Fm"
    ) {
      this.pokemonNames = "Blastoise";
    } else if (
      this.pokemonSelected ==
      "https://drive.google.com/uc?id=1-zseG8uhlsuaQh7orGIuT5Y1MhkV4EVR"
    ) {
      this.pokemonNames = "Venasaur";
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
    ...mapActions(["setCustomerScorePokemon1"]),
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
            this.battleText = "Que hara " + this.pokemonNames + "?";
          }, 1000);
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

          //edit if HP !== 0

          if (this.checkOpponentHp()) {
            this.battleText = this.opponentPokemon + " fainted! Play again?";
            this.processFaint(1);
          } else if (this.checkOpponentHp() === false) {
            setTimeout(() => {
              this.processOpponentAttack();
            }, 1000);

            this.battleText =
              this.pokemonNames + " usa " + this.fightOptions[attack - 1] + "!";
            //call opponent attack function
            setTimeout(() => {
              if (this.userAlive) {
                setTimeout(() => {
                  this.battleText = "What will " + this.pokemonNames + "?";
                }, 1000);
              }
            }, 1000);
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
            }, 1000);

            this.battleText =
              this.pokemonNames + " usa " + this.fightOptions[attack - 1] + "!";
            //call opponent attack function
            setTimeout(() => {
              if (this.userAlive) {
                setTimeout(() => {
                  this.battleText = "Que hara " + this.pokemonNames + "?";
                }, 1000);
              }
            }, 1000);
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
            }, 1000);

            this.battleText =
              this.pokemonNames + " usa " + this.fightOptions[attack - 1] + "!";
            //call opponent attack function
            setTimeout(() => {
              if (this.userAlive) {
                setTimeout(() => {
                  this.battleText = "What will " + this.userPokemon + " do?";
                }, 1000);
              }
            }, 1000);
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
            }, 1000);

            this.battleText =
              this.pokemonNames + " usa " + this.fightOptions[attack - 1] + "!";
            //call opponent attack function
            setTimeout(() => {
              if (this.userAlive) {
                setTimeout(() => {
                  this.battleText = "What will " + this.userPokemon + " do?";
                }, 1000);
              }
            }, 1000);
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
          console.log(this.opponentHP);
          console.log(this.opponentFill);

          //edit if HP !== 0

          if (this.checkOpponentHp()) {
            this.battleText = this.opponentPokemon + " fainted! Play again?";
            this.processFaint(1);
          } else if (this.checkOpponentHp() === false) {
            setTimeout(() => {
              this.processOpponentAttack();
            }, 1000);

            this.battleText =
              this.userPokemon + " usa " + this.fightOptions[attack - 1] + "!";
            //call opponent attack function
            setTimeout(() => {
              if (this.userAlive) {
                setTimeout(() => {
                  this.battleText = "What will " + this.userPokemon + " do?";
                }, 1000);
              }
            }, 1000);
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

          //edit if HP !== 0

          if (this.checkOpponentHp()) {
            this.battleText = this.opponentPokemon + " fainted! Play again?";
            this.processFaint(1);
          } else if (this.checkOpponentHp() === false) {
            setTimeout(() => {
              this.processOpponentAttack();
            }, 1000);

            this.battleText =
              this.userPokemon + " usa " + this.fightOptions[attack - 1] + "!";
            //call opponent attack function
            setTimeout(() => {
              if (this.userAlive) {
                setTimeout(() => {
                  this.battleText = "What will " + this.userPokemon + " do?";
                }, 1000);
              }
            }, 1000);
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
          console.log(this.opponentHP);
          console.log(this.opponentFill);

          //edit if HP !== 0

          if (this.checkOpponentHp()) {
            this.battleText = this.opponentPokemon + " fainted! Play again?";
            this.processFaint(1);
          } else if (this.checkOpponentHp() === false) {
            setTimeout(() => {
              this.processOpponentAttack();
            }, 1000);

            this.battleText =
              this.userPokemon + " usa " + this.fightOptions[attack - 1] + "!";
            //call opponent attack function
            setTimeout(() => {
              if (this.userAlive) {
                setTimeout(() => {
                  this.battleText = "What will " + this.userPokemon + " do?";
                }, 1000);
              }
            }, 1000);
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
          console.log(this.opponentHP);
          console.log(this.opponentFill);

          //edit if HP !== 0

          if (this.checkOpponentHp()) {
            this.battleText = this.opponentPokemon + " fainted! Play again?";
            this.processFaint(1);
          } else if (this.checkOpponentHp() === false) {
            setTimeout(() => {
              this.processOpponentAttack();
            }, 1000);

            this.battleText =
              this.userPokemon + " usa " + this.fightOptions[attack - 1] + "!";
            //call opponent attack function
            setTimeout(() => {
              if (this.userAlive) {
                setTimeout(() => {
                  this.battleText = "What will " + this.userPokemon + " do?";
                }, 1000);
              }
            }, 1000);
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
          console.log(this.opponentHP);
          console.log(this.opponentFill);

          //edit if HP !== 0

          if (this.checkOpponentHp()) {
            this.battleText = this.opponentPokemon + " fainted! Play again?";
            this.processFaint(1);
          } else if (this.checkOpponentHp() === false) {
            setTimeout(() => {
              this.processOpponentAttack();
            }, 1000);

            this.battleText =
              this.userPokemon + " usa " + this.fightOptions[attack - 1] + "!";
            //call opponent attack function
            setTimeout(() => {
              if (this.userAlive) {
                setTimeout(() => {
                  this.battleText = "What will " + this.userPokemon + " do?";
                }, 1000);
              }
            }, 1000);
          }
          break;
      }
    },
    checkOpponentHp: function() {
      if (this.opponentHP <= 0) {
        //fainted
        this.currentQuestion = 0;

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
        this.currentQuestion = 0;
        const score = this.handleResults();
        this.setCustomerScorePokemon1(score);
        swal("Felicitaciones ahora pasas a la batalla final");
        this.$router.push({ name: "fight2" });
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
        this.currentQuestion = 0;
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
      this.currentQuestion = 0;
    },
    handleAnswer(e) {
      this.answers[this.currentQuestion] = e.answer;
      this.responsedAnswer = e.answer;

      if (
        this.responsedAnswer == "perucampeon" ||
        this.responsedAnswer == "PokemOn" ||
        this.responsedAnswer == "pOkemOn154" ||
        this.responsedAnswer == "M4st3r#$" ||
        this.responsedAnswer == "1ng3N13r1a$istemaS" ||
        this.responsedAnswer == "15P0k3M0n36" ||
        this.responsedAnswer == "Chariz4rd25$"
      ) {
        if (this.pokemonNames == "Charizard") {
          this.processAttack(2);
           swal('Correcto')
        } else if (this.pokemonNames == "Blastoise") {
          this.processAttack(5);
           swal('Correcto')
        } else if (this.pokemonNames == "Venasaur") {
          this.processAttack(8);
           swal('Correcto')
        }
      } else if (
        this.responsedAnswer == "peru" ||
        this.responsedAnswer == "pokemon" ||
        this.responsedAnswer == "pokemon154" ||
        this.responsedAnswer == "m4st3r#$" ||
        this.responsedAnswer == "1ng3n13r1a$istemas" ||
        this.responsedAnswer == "15p0k3m0n36" ||
        this.responsedAnswer == "charizard25$"
      ) {
        if (this.pokemonNames == "Charizard") {
          this.processAttack(1);
           swal('Incorrecto')
        } else if (this.pokemonNames == "Blastoise") {
          this.processAttack(4);
           swal('Incorrecto')
        } else if (this.pokemonNames == "Venasaur") {
          this.processAttack(6);
           swal('Incorrecto')
        }
      } else if (
        this.responsedAnswer == "brasil" ||
        this.responsedAnswer == "pikachu" ||
        this.responsedAnswer == "p0ke154" ||
        this.responsedAnswer == "master#" ||
        this.responsedAnswer == "ingenieria$istemas" ||
        this.responsedAnswer == "15pokemon36" ||
        this.responsedAnswer == "Char25$"
      ) {
        if (this.pokemonNames == "Charizard") {
          this.processAttack(3);
           swal('Incorrecto')
        } else if (this.pokemonNames == "Blastoise") {
          this.processAttack(6);
           swal('Incorrecto')
        } else if (this.pokemonNames == "Venasaur") {
          this.processAttack(9);
           swal('Incorrecto')
        }
      }
      this.currentQuestion++;
    },
    handleResults() {
      //console.log("handle results");
      // this.questions.forEach((a, index) => {
      //   if (this.answers[index] === a.answer){
      //     this.correct++;
      //   }else{
      //       this.perc = ((this.correct / this.questions.length)*100).toFixed(2);
      // console.log(this.correct+' '+this.perc);
      //   }

      // });
      // this.perc = ((this.correct / this.questions.length) * 100).toFixed(2);
      // console.log(this.correct + " " + this.perc);
      let score = 0;
      this.questions.forEach((a, index) => {
        if (this.answers[index] === a.answer) {
          this.correct++;
          score = score + 10;
          console.log(score)
        } else {
          // this.perc = ((this.correct / this.questions.length)*100).toFixed(2);
          // console.log(this.correct+' '+this.perc);
        }
      });
      return score;
    }
  }
};
</script>

<style scoped with lang="scss">
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
  font-size: 24px;
  text-transform: uppercase;
  font-family: "Roboto Condensed";
}

.battle-scene {
  position: relative;
  margin: auto;
  display: block;
  // margin-top: 3%;
  width: 450px;
  height: 320px;
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
  font-size: 16px;
  font-family: "Roboto Condensed";
}

.level {
  position: absolute;
  right: 8%;
  top: -11%;
  opacity: 0.7;
  font-size: 14px;
  font-family: "Roboto Condensed";
}

.hp {
  position: absolute;
  right: 8%;
  bottom: -20%;
  opacity: 0.7;
  font-size: 14px;
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
  font-size: 16px;
  color: white;
  text-align: left;
  font-family: "PT Sans Narrow";
}

.battle-text-top-left {
  opacity: 0.95;
  position: absolute;
  font-size: 20px;
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
  font-size: 18px;
  color: #333333;
  bottom: -10%;
  left: 10%;
  text-align: left;
  font-family: "PT Sans Narrow";
  cursor: pointer;
}

.battle-text-top-right {
  opacity: 0.95;
  position: absolute;
  font-size: 18px;
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
  font-size: 18px;
  color: #333333;
  bottom: -10%;
  right: 10%;
  text-align: left;
  font-family: "PT Sans Narrow";
  cursor: pointer;
}

@media all and (max-width: 600px) {
  .battle-scene {
    position: relative;
    margin: auto;
    display: block;
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



