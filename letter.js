//constructor
function Letter(character){
    this.character = "_";//A string value to store the underlying character for the letter
    this.isGuessed = false;//A boolean value that stores whether that letter has been guessed yet
    this.guessedLetter = "";//empty until user starts guessing letters in prompt
    this.guess = function(){
    //returns the underlying character if the letter has been guessed, or a placeholder if the letter has not been guessed
        if(this.isGuessed) return this.character = character;
        this.character = "_";
    }
    //takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.checkCharacter= function(){
        if (character === this.guessedLetter) return this.isGuessed = true;
    }
}

module.exports = Letter;
