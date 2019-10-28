
<template>
<div class="container-fluid">
   <ul class="nav">
      <li v-if="!loggedIn">
        <router-link :to="{ name: 'login' }">Login</router-link>
      </li>
      <li v-if="!loggedIn">
        <router-link :to="{ name: 'register' }">Registro</router-link>
      </li>
      <li v-if="loggedIn">
        <router-link :to="{ name: 'logout' }">Salir</router-link>
      </li>
    </ul>
    <div class="header">
        <h1>Nivel Intermedio</h1>
        <div><span class="label">Tiempo:</span> <span class="value">{{ time }} </span></div>
        <div><span class="label">Turnos:</span> <span class="value">{{ turns }} </span></div>
        <div><span class="label">Puntaje:</span> <span class="value">{{ score }} </span></div>
        </div>
        <div class="cards">
        <div class="card" v-for="card in cards"  :key="card.name" :class="{ flipped: card.flipped, found: card.found }" @click="flipCard(card)">
            <div class="back"></div>
            <div class="front" :style="{ backgroundImage: 'url(' + card.image + ')' }"></div>
        </div>
        </div>
        <div class="splash" v-if="showSplash">
        <div class="overlay"></div>
        <div class="content">
             <div class="title">Se acabo!</div>
              <div class="title">Puntaje Obtenido: {{ score }}</div>
              <router-link :to="{ name: 'memoriadificil' }">
                    <button>Continuar!</button>
              </router-link>
        </div>
        </div>
        <div id="info" class="splash hidden">
        <div class="overlay"></div>
        <div class="content">
            <div id="info-title" class="title"></div>
            <img id="info-image" src="" height=70>
            <div id="info-description" class="score"></div>
            <button @click="closeModal()">keep playing</button>
        </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'
import moment from 'moment'
import { mapActions, mapGetters, mapState } from 'vuex'
import $ from 'jquery'
// import tz from 'moment-timezone'
let CardTypes = [
  {
    name: "password01",
    image: "https://drive.google.com/uc?id=1biCvLfihjcX0nOR-dc-l9T9O-h9WA7Ok",
    info: "Vue.js features an incrementally adoptable architecture that focuses on declarative rendering and component composition. Advanced features required for complex applications such as routing, state management and build tooling are offered via officially maintained supporting libraries and packages."
  },
  {
    name: "express",
    image: "https://drive.google.com/uc?id=1HvX3In2N66RaYouE80a_4Z8TM8RU_cMI",
    info: "Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.[3] It has been called the de facto standard server framework for Node.js"
  },
  {
    name: "mongo",
    image: "https://drive.google.com/uc?id=14ehMU1yzV0qyLi6ix4MsPzL6x07ND99T",
    info: "MongoDB is a cross-platform document-oriented database program. It is issued under the Server Side Public License, which is currently being evaluated for OSI certification. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemata. MongoDB is developed by MongoDB Inc."
  },
  {
    name: "nodejs",
    image: "https://drive.google.com/uc?id=1T3NS3Tp_yzvzv8ZqQEGHUdecqOMJQMnL",
    info: "Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser. Typically, JavaScript is used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML and run client-side by a JavaScript engine in the user's web browser. Node.js lets developers use JavaScript to write Command Line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser."
  },
  {
    name: "webpack",
    image: "https://drive.google.com/uc?id=1VZ9byVCppEIfVuALdUMpoGyZIoWl-HO0",
    info: "Webpack is an open-source JavaScript module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset. Webpack takes modules with dependencies and generates static assets representing those modules. It is a module bundler primarily for JavaScript, but it can transform front-end assets like HTML, CSS, even images if the corresponding plugins are included."
  },
   {
    name: "mongo1",
    image: "https://drive.google.com/uc?id=1pBXtDpf63L1H2aAc8YHUx5W_37zTk_VO",
    info: "MongoDB is a cross-platform document-oriented database program. It is issued under the Server Side Public License, which is currently being evaluated for OSI certification. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemata. MongoDB is developed by MongoDB Inc."
  },
  {
    name: "nodejs2",
    image: "https://drive.google.com/uc?id=1rXtY5kYyEs2NV-otTi05yh1u_9hFMCOF",
    info: "Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser. Typically, JavaScript is used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML and run client-side by a JavaScript engine in the user's web browser. Node.js lets developers use JavaScript to write Command Line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser."
  },
  {
    name: "webpack3",
    image: "https://drive.google.com/uc?id=199Ao3nIQLKO6mh1WYyyYbzZ7BCe-4LuV",
    info: "Webpack is an open-source JavaScript module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset. Webpack takes modules with dependencies and generates static assets representing those modules. It is a module bundler primarily for JavaScript, but it can transform front-end assets like HTML, CSS, even images if the corresponding plugins are included."
  }
]
let shuffleCards = function shuffleCards() {
  let cards = [].concat(_.cloneDeep(CardTypes), _.cloneDeep(CardTypes))
  return _.shuffle(cards);
}
export default {
    data(){
        return{
            showSplash: false,
            cards: [],
            started: false,
            startTime: 0,
            turns: 0,
            flipBackTimer: null,
            timer: null,
            time: "--:--",
            score: 0
        }
    },
    watch:{
      time: function (val) {
      if (val ==='02:01') {
          this.finishGame()
      }
    }
    },
    computed: {
      ...mapState({
        scoreTotal: state => state.customer.scoreMemory
    }),
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  },
   methods: {
      ...mapActions([
       'setCustomerScore'
     ]),
    start () {
        this.continue = true
    },
    resetGame: function resetGame() {
      this.showSplash = false;
      var cards = shuffleCards();
      this.turns = 0;
      this.score = 0;
      this.started = false;
      this.startTime = 0;

      _.each(cards, function (card) {
        card.flipped = false;
        card.found = false;
      });

      this.cards = cards;
    },

    closeModal: function closeModal() {
      $("#info").fadeOut("fast");
    },

    showModal: function showModal() {
      $("#info").fadeIn("slow");
    },

    flippedCards: function flippedCards() {
      return _.filter(this.cards, function (card) { return card.flipped; });
    },

    sameFlippedCard: function sameFlippedCard() {
      var flippedCards = this.flippedCards();
      if (flippedCards.length == 2) {
        if (flippedCards[0].name == flippedCards[1].name)
          return true;
      }
    },

    capitalizeString: function capitalizeString(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },

    showInfoAboutFramework: function showInfoAboutFramework() {
      this.showModal();
      var flippedCard = this.flippedCards()[0];
      $("#info-title").html("Want to learn more about " + this.capitalizeString(flippedCard.name) + "?");
      $("#info-description").html(flippedCard.info);
      $("#info-image").attr("src", flippedCard.image);
    },

    setCardFounds: function setCardFounds() {
      _.each(this.cards, function (card) {
        if (card.flipped)
          card.found = true;
      });
    },

    checkAllFound: function checkAllFound() {
      var foundCards = _.filter(this.cards, function (card) { return card.found; });
      if (foundCards.length == this.cards.length)
        return true;
    },

    startGame: function startGame() {
      var _this = this;
      this.started = true;
      this.startTime = moment()
      this.timer = setInterval(function () {
        // _this.updateScore()
        _this.time = moment(moment().diff(_this.startTime)).format("mm:ss");
      }, 1000);
    },

    updateScore: function updateScore() {
      var elapsedTime = moment().diff(this.startTime, 'seconds')
      var score =  10
      // var score = 1000 - elapsedTime * 2 - this.turns * 10
      this.score = this.score + score
      // this.score = Math.max(score, 0)
    },

    finishGame: function finishGame() {
      this.started = false;
      clearInterval(this.timer);
      // this.updateScore();
      this.setCustomerScore(this.$store.state.customer.scoreMemory +this.score)
      this.showSplash = true;
    },

    flipCard: function flipCard(card) {
      var _this2 = this;
      if (card.found || card.flipped) return;

      if (!this.started) {
        this.startGame();
      }

      var flipCount = this.flippedCards().length;
      if (flipCount == 0) {
        card.flipped = !card.flipped;
      } else
        if (flipCount == 1) {
          card.flipped = !card.flipped;
          this.turns += 1;
          if (this.sameFlippedCard()) {
            // Match!
            this.updateScore();
            // this.showInfoAboutFramework();
            this.flipBackTimer = setTimeout(function () {
              _this2.clearFlipBackTimer();
              _this2.setCardFounds();
              _this2.clearFlips();

              if (_this2.checkAllFound()) {
                _this2.finishGame();
              }

            }, 200);
          } else {
            // Wrong match
               this.flipBackTimer = setTimeout(function () {
              _this2.clearFlipBackTimer();
              _this2.clearFlips();
            }, 1000);
           
          }
        }
    },

    clearFlips: function clearFlips() {
      _.map(this.cards, function (card) { return card.flipped = false; });
    },

    clearFlipBackTimer: function clearFlipBackTimer() {
      clearTimeout(this.flipBackTimer);
      this.flipBackTimer = null;
    }
  },

  created () {
    this.resetGame()
  }
}
</script>

<style scoped>
    @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900|Dosis:300,400,600,700,800|Droid+Sans:400,700|Lato:300,400,700,900|PT+Sans:400,700|Ubuntu:300,400,500,700|Open+Sans:400,300,600,700|Roboto:400,300,500,700,900|Roboto+Condensed:400,300,700|Open+Sans+Condensed:300,700|Work+Sans:400,300,700|Play:400,700|Maven+Pro:400,500,700,900&subset=latin,latin-ext);

@import url('https://fonts.googleapis.com/css?family=Press+Start+2P');

html {
  font-family: 'Open Sans', 'Helvetica', 'Arial', sans-serif;
}

.header {
  font-family: 'Press Start 2P', 'Helvetica', 'Arial', sans-serif;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #555;
}

.header div {
  display: inline-block;
  width: 30%;
}

.header .value {
  font-weight: bold;
}

.cards .card {
  position: relative;
  display: inline-block;
  width: 90px;
  height: 130px;
  margin: 1em 2em;
  -moz-transition: opacity 0.5s;
  -o-transition: opacity 0.5s;
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
}

.cards .card .front,
.cards .card .back {
  border: 1px solid lightgray;
  border-radius: 5px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: White;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -moz-transition: -moz-transform 0.6s;
  -o-transition: -o-transform 0.6s;
  -webkit-transition: -webkit-transform 0.6s;
  transition: transform 0.6s;
  -moz-transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.cards .card .back {
  background-image: url("https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/game-arcade-pattern-mps.jpg");
  background-size: 90%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 12px;
}

.cards .card .front {
  -moz-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center;
}

.cards .card.flipped .back,
.cards .card.found .back {
  -moz-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.cards .card.flipped .front,
.cards .card.found .front {
  -moz-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
}

.cards .card.found {
  opacity: 0.3;
}

.splash {
  color: white;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.splash .overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
}

.splash .content {
  position: absolute;
  left: 0;
  right: 0;
  top: 30px;
  max-width: 500px;
  margin: auto;
  text-align: center;
  background-color: rgba(51, 51, 51, 0.9);
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  -moz-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.8);
  -webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.8);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.8);
  padding: 1em;
}

.splash .content .title {
  font-size: 1.8em;
  padding: 0.5em;
}

.splash .content .score {
  padding: 0.5em;
}

.splash .content button {
  font-family: 'Press Start 2P', 'Helvetica', 'Arial', sans-serif; margin-top: 1.0em;
  margin-top: 1.0em;
  background-color: #444;
  padding: 20px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  border: 1px solid #555;
  color: White;
  font-size: 1.4em;
}

.container {
  max-width: 620px;
  margin: 30px auto 30px auto;
}

#info {
  text-align: center;
}

#info-title {
  font-weight: bolder;
}

.hidden {
  display: none;
}
</style>