function Letter(character){
    this.character = "_";
    this.isGuessed = false;
    this.guessedLetter = "";
    // this.guessedByUser = [];
    this.guess = function(){
        if(this.isGuessed) return this.character = character;
        this.character = "_";
    }
    this.checkCharacter= function(){
        if (character === this.guessedLetter) return this.isGuessed = true; //change this line
    }
}

module.exports = Letter;
