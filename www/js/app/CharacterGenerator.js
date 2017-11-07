define(["models/Character", "chance"], function (Character, Chance) {

    function CharacterGenerator() {
        console.log("Initialising CharacterGenerator definition");

        // methods
        this.initialize = function () {
            console.log("Creating CharacterGenerator");
        };

        this.generateRandomCharacter = function () {
            console.log("Generating random character");

            var character = new Character();
            character.gender = chance.gender();

            character.nameParts = {};
            character.nameParts.prefix = '';
            // character.nameParts.prefix = chance.prefix({ gender: character.gender });
            character.nameParts.first = chance.first({ gender: character.gender });
            character.nameParts.last = chance.last();
            character.nameParts.suffix = '';
            // character.nameParts.suffix = chance.suffix();

            character.name = character.nameParts.prefix + ' ' + character.nameParts.first + ' ' + character.nameParts.last + ' ' + character.nameParts.suffix;
            character.birthday = chance.birthday();
            character.age = Math.floor((Date.now() - character.birthday) / (1000 * 60 * 60 * 24 * 365));

            return character;

        };

        // Initialise
        this.initialize();
    }

    return new CharacterGenerator();
});