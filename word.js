var Letter = require("./letter.js");
//Global Variable
var newCharacter;
//constructor
function Word(word){
    this.string = word;
    this.array = [];
    this.guessedLetter = "";
    // this.guessedRightLetter = [];
    this.createArray = function(){
        //creating an array of new Letter objects representing the letters of the underlying word
        for (var l=0; l<this.string.length; l++){
            newCharacter = new Letter(this.string[l]);
            this.array.push(newCharacter);
        }
    };
    this.toString = function(){
        // console.log(this.array);
        //pushing current word characters to array, so we can turn them into a string
        var arr=[];
        for (var w = 0; w<this.array.length; w++){
            this.array[w].guess();
            arr.push(this.array[w].character);              
        }
        console.log(arr.slice(',').join(" "));
    };
    this.trueORfalse = function(err){
        console.log(this.array.length);
        for (var i=0; i<this.string.length; i++){
            this.array[i].guessedLetter = this.guessedLetter;
            this.array[i].checkCharacter();
        }
    };
}

module.exports = Word;
