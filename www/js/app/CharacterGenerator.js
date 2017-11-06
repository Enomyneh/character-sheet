define(["models/Character", "chance"], function(Character, Chance) {

    function CharacterGenerator() {
        console.log("Initialising CharacterGenerator definition");

        // methods
        this.initialize = function() {
            console.log("Creating CharacterGenerator");
        };

        this.generateRandomCharacter = function() {
            console.log("Generating random character");

            var character = new Character();
            character.gender = chance.gender();

            character.name = {};
            character.name.prefix = chance.prefix({ gender: character.gender });
            character.name.first = chance.first({ gender: character.gender });
            character.name.last = chance.last();
            character.name.suffix = chance.suffix();

            character.birthday = chance.birthday();

            return character;

        };

        // Initialise
        this.initialize();
    }

    return new CharacterGenerator();
});