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
        :recommendation="questions[currentQuestion].recommendation"
      ></question>
    </div>

    <!-- end battle scene -->
  </div>
</template>

<script>
import question from "./question";
import Swal from "sweetalert2";
import swal from "sweetalert";
import { mapActions, mapState } from "vuex";
export default {
  name: "fight2",
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
  props: {},
  data() {
    return {
      pokemon: "",
      preguntas: {
        questions: [
          {
            text:
              "Disponer de una contraseña dificil de averiguar es muy importante para proteger nuestra información. selecciona la mas segura de las 3",
            type: "mc",
            answers: ["123abc123", "davi1979", "Luc4s2@poOY$"],
            answer: "Luc4s2@poOY$",
            recommendation:
              "LAS CONTRASEÑAS DEBEN SER DIFICIL DE AVERIGUAR, SECRETAS Y SE HAN DE CAMBIAR DE VEZ EN CUANDO."
          },
          {
            text:
              "Tengo diferentes contraseñas para acceder al correo, a la red social, al foro del cole, etc. me cuesta mucho recodarlas asi que...",
            type: "mc",
            answers: [
              "Las apunto en un papel cerca del ordenador, es donde las necesito",
              "Intento memorizarla o uso un programa para la gestion de contraseñas, Son muy sencillos",
              "Las comparto con mis amigos asi si un dia la necesito solo tengo que preguntar"
            ],
            answer:
              "Intento memorizarla o uso un programa para la gestion de contraseñas, Son muy sencillos",
            recommendation:
              "EN INTERNET EXISTEN UNA MULTITUD DE HERRAMIENTAS QUE NOS PERMITEN GESTIONAR LAS CONTRASEÑAS ADECUADAMENTE. USALAS Y PROTEGE TUS SERVICIOS."
          },
          {
            text:
              "Al entrar en una pagina web te pide datos como nombre,direccion,edad,eetc, para ver un video¿ rellenarias el formulario?",
            type: "mc",
            answers: [
              "claro tengo que ver el video",
              "no doy mi informacion personal, a de saber para que la usaran",
              "solo doy mi nombre y direccion, si doy mi edad igual no puedo ver el video"
            ],
            answer:
              "solo doy mi nombre y direccion, si doy mi edad igual no puedo ver el video",
            recommendation:
              "EN INTERNET EXISTEN UNA MULTITUD DE HERRAMIENTAS QUE NOS PERMITEN GESTIONAR LAS CONTRASEÑAS ADECUADAMENTE. USALAS Y PROTEGE TUS SERVICIOS."
          },
          {
            text:
              "¿Cuál es la contraseña que tiene caracteristicas más seguras?",
            type: "mc",
            answers: ["m4st3r#$", "M4st3r#$", "Master#"],
            answer: "M4st3r#$",
            recommendation:
              "LAS CONTRASEÑAS DEBEN SER DIFICIL DE AVERIGUAR, SECRETAS Y SE HAN DE CAMBIAR DE VEZ EN CUANDO."
          },
          {
            text:
              "tengo varias cuentas (facebook, pokemon go, instagram, gmail, cuenta bancaria, etc) cual es la mejor opción?",
            type: "mc",
            answers: [
              "Usar la misma contraseña para todas las cuentas",
              "Utilizar contraseñas diferentes",
              "Solo doy mi nombre y direccion, si doy mi edad igual no puedo ver el video"
            ],
            answer: "Utilizar contraseñas diferentes",
            recommendation:
              "NUESTRA INFORMACION PERSONAL ES MUY IMPORTANTE !NUESTRO NOMBRE DIRECCION Y DEMAS DATOS NO SE LOS PODEMOS DAR A CUALQUIERA."
          },
          {
            text:
              "Tu amigo está estudiando y te pide que inicies sesión en su cuenta de correo para que le pases algunos documentos ¿Qué haces?",
            type: "mc",
            answers: [
              "Es mi amigo, así que lo haré",
              "Sé que existe un riesgo, pero lo haré de todos modos",
              "Rechazo la solicitud y le recuerdo que las contraseñas no se deben compartir"
            ],
            answer:
              "Rechazo la solicitud y le recuerdo que las contraseñas no se deben compartir",
            recommendation:
              "NO DEBES USAR LA MISMA CONTRASEÑA EN TODAS TUS CUENTAS, YA QUE SI ALGUIEN SABE ALGUNA DE ELLAS, NO PODRÁ ACCEDER A TODAS TUS CUENTAS."
          },
          {
            text:
              "Disponer de una contraseña dificil de averiguar es muy importante para proteger nuestra información. selecciona la mas segura de las 3",
            type: "mc",
            answers: [
              "1ng3N13r1a$istemaS",
              "1ng3n13r1a$istemas",
              "ingenieria$istemas"
            ],
            answer: "1ng3N13r1a$istemaS",
            recommendation:
              "LAS CONTRASEÑAS DEBEN SER DIFICIL DE AVERIGUAR, SECRETAS Y SE HAN DE CAMBIAR DE VEZ EN CUANDO."
          }
        ]
      },
      userPokemonSrc:
        "http://guidesmedia.ign.com/guides/059687/images/blackwhite/pokemans_006.gif",
      opponentPokemonSrc:
        "https://drive.google.com/uc?id=1TDQOx9xvW2w5JQ_w_-UcVqfB3JCVAo6V",
      userPokemon: "",
      opponentPokemon: "Mewtwo",
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
      userAttackDamage: [10, 20, 10, 10, 20, 10, 10, 20, 10],
      opponentAttacks: [
        "Tackle",
        "Iron Tail",
        "Rock Slide",
        "Rock Slide",
        "Tackle"
      ],
      opponentAttackDamage: [15, 15, 15, 15, 15, 15,15,15],
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
      recomendation: "",
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
    ...mapActions(["setCustomerScorePokemon", "setHasPlayedPokemon"]),
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
            //    this.recomendation = "LAS CONTRASEÑAS DEBEN SER DIFICIL DE AVERIGUAR, SECRETAS Y SE HAN DE CAMBIAR DE VEZ EN CUANDO."
            // swal(this.recomendation)
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
        // this.currentQuestion=0
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
        // this.currentQuestion=0
        const score = this.handleResults();
        this.setCustomerScorePokemon(score);
        this.setHasPlayedPokemon(true);
        this.$router.push({ name: "menu" });
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
      this.$router.push({ name: "tuto" });
    },
    startQuiz() {
      this.introStage = false;
      this.questionStage = true;
    },
    handleAnswer(e) {
      this.answers[this.currentQuestion] = e.answer;
      this.responsedAnswer = e.answer;
      this.recommendation = e.recommendation;
      if (
        this.responsedAnswer == "Luc4s2@poOY$" ||
        this.responsedAnswer ==
          "Intento memorizarla o uso un programa para la gestion de contraseñas, Son muy sencillos" ||
        this.responsedAnswer ==
          "solo doy mi nombre y direccion, si doy mi edad igual no puedo ver el video" ||
        this.responsedAnswer == "M4st3r#$" ||
        this.responsedAnswer == "Utilizar contraseñas diferentes" ||
        this.responsedAnswer ==
          "Rechazo la solicitud y le recuerdo que las contraseñas no se deben compartir" ||
        this.responsedAnswer == "1ng3N13r1a$istemaS"
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
        this.responsedAnswer == "123abc123" ||
        this.responsedAnswer ==
          "Las apunto en un papel cerca del ordenador, es donde las necesito" ||
        this.responsedAnswer == "claro tengo que ver el video" ||
        this.responsedAnswer == "m4st3r#$" ||
        this.responsedAnswer ==
          "Usar la misma contraseña para todas las cuentas" ||
        this.responsedAnswer == "Es mi amigo, así que lo haré" ||
        this.responsedAnswer == "1ng3n13r1a$istemas"
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
        this.responsedAnswer == "davi1979" ||
        this.responsedAnswer ==
          "Las comparto con mis amigos asi si un dia la necesito solo tengo que preguntar" ||
        this.responsedAnswer ==
          "no doy mi informacion personal, a de saber para que la usaran" ||
        this.responsedAnswer == "Master#" ||
        this.responsedAnswer == "No usar contraseñas" ||
        this.responsedAnswer == "Master#" ||
        this.responsedAnswer ==
          "Sé que existe un riesgo, pero lo haré de todos modos" ||
        this.responsedAnswer == "ingenieria$istemas"
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
      Swal.fire({
        title: this.recommendation,
        showClass: {
          popup: "animated fadeInDown faster"
        },
        hideClass: {
          popup: "animated fadeOutUp faster"
        }
      });
      // swal(this.recommendation)
    },
    handleResults() {
      //console.log("handle results");
      let score = 0;
      this.questions.forEach((a, index) => {
        if (this.answers[index] === a.answer) {
          this.correct++;
          score = score + 10;
        } else {
          // this.perc = ((this.correct / this.questions.length)*100).toFixed(2);
          // console.log(this.correct+' '+this.perc);
        }
      });
      return score;

      // this.perc = ((this.correct / this.questions.length) * 100).toFixed(2);
      // console.log(this.correct + " " + this.perc);
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
  font-size: 28px;
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



