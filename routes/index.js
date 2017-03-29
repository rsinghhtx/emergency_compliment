var express = require('express');
var router = express.Router();
var compliments = ["Your instructors love you",
"High five = ^5",
"Amanda thinks you're wicked smart!",
"Britney Jo is sooo proud of you! :)",
"Sean would totally hire you.",
"It's almost beer o'clock!"];

function randomCompliment() {
//why no function for random index of array???
var randomCompliment = compliments[Math.floor(Math.random()*compliments.length)];
return randomCompliment;
};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Random compliment', compliment: randomCompliment() } );
});

module.exports = router;
