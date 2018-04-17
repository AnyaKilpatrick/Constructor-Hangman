var Word = require("./word.js");
var inquirer = require("inquirer");

//Global Variables
var newWord; //new Word object
var count=10;//remaining guesses
var correct = 0; //used to count characters that were guessed right
// OBJECT
var app = {
    cars: ["Ford", "Jaguar", "Porsche", "Volkswagen", "Hyundai", "Lamborghini", "Chevrolet", "Lexus", "Mitsubishi", "Mazda", "Bentley", "Subaru", "Ferrari"],
    welcome: function(){
        console.log('\x1b[36m%s\x1b[0m',"Welcome to Hangman Game!\nTry to guess a hidden word. Little hint: it's a name of a car brand ;)\nYou have only 10 chances for mistake.\nGOOD LUCK!");
    },
    startOver: function(){
        correct=0; //setting amount of guessed letters back to 0
        count=10; // and ramaining guesses back to 5
        app.randomWord();
    },
    randomWord: function(err){
        var randomPick = app.cars[Math.floor(Math.random() * app.cars.length)];//randomly selecting a word
        newWord = new Word(randomPick);//creating a new Word object
        // console.log(newWord.string);//console.log a word for testing
        newWord.createArray();//creating an array of new Letter objects based on new word
        newWord.toString();//turning array of characters into a string
    },
    inquirer: function(){
        if(count>0){ //as long as there are more then 0 ramaining guesses..
            inquirer.prompt([
                {
                    name:"guessedLetter",
                    message: "Guess a letter!"
                }
            ]).then(function(answers){
                var currentCorrect = 0; //this variable will be compared to "correct" variable, to define if number of guessed letters was increased
                newWord.guessedLetter = answers.guessedLetter; //passing a string to word object 
                newWord.trueORfalse(); //check for matching (to reveal new letters)
                newWord.toString(); //display as a string

                for (var n=0; n<newWord.array.length; n++){
                    //looping through all the letters to check if a count of guessed letters (true statements) went up
                    if (newWord.array[n].isGuessed === true){
                        currentCorrect++;
                    }
                }

                if (currentCorrect>correct){ //if it did go up
                    console.log("\x1b[36m%s\x1b[0m","CORRECT!!!"); //log "correct"
                    correct = currentCorrect; //set these varibale to equal
                }else{ //if stayed the same
                    count--;
                    console.log("\x1b[31m","INCORRECT!! Remaining guesses: "+ count); //log "incorrect"
                }
                
                if(currentCorrect === newWord.string.length){ //if amount of guessed letters is the same as word length 
                    console.log("\x1b[36m%s\x1b[0m","Yay! You got it all right!\nNext word!");
                    app.startOver();
                }

                app.inquirer();
            })
        }else{//if 0 remaining guesses
            console.log("\x1b[31m","Game Over!");
        }
    }
}
app.welcome();
app.randomWord();
app.inquirer();
