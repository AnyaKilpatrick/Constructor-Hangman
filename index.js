var Word = require("./word.js");
var inquirer = require("inquirer");
//Global Variables
var newWord;
var count=5;
// OBJECT
var app = {
    cars: ["Ford", "Jaguar", "Porsche", "Volkswagen", "Hyundai", "Lamborghini", "Chevrolet"],
    randomWord: function(err){
        if(err) return console.log(err);
        var randomPick = app.cars[Math.floor(Math.random() * app.cars.length)];
        newWord = new Word(randomPick);
        console.log(newWord.string);
        newWord.createArray();
        newWord.toString();
    },
    inquirer: function(){
        if(count>0){
            inquirer.prompt([
                {
                    name:"guessedLetter",
                    message: "Guess a letter!"
                }
            ]).then(function(answers){
                newWord.guessedLetter = answers.guessedLetter;
                // console.log(newWord);
                newWord.trueORfalse();
                newWord.toString();
                // newWord.guessedRightLetter.push(answers.guessedLetter);
                // newWord.revealLetter();
                count--;
                console.log("count: "+count);
                app.inquirer();
            })
        }

    }
}
app.randomWord();
app.inquirer();