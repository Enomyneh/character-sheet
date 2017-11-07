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

            character.nameParts = {};
            character.nameParts.prefix = '';
            // character.nameParts.prefix = chance.prefix({ gender: character.gender });
            character.nameParts.first = chance.first({ gender: character.gender });
            character.nameParts.last = chance.last();
            character.nameParts.suffix = '';
            // character.nameParts.suffix = chance.suffix();

            character.name = character.nameParts.prefix + ' ' + character.nameParts.first + ' ' + character.nameParts.last + ' ' + character.nameParts.suffix;
            character.birthday = chance.birthday();
            character.countryOfBirth = chance.country({ full: true });
            character.age = Math.floor((Date.now() - character.birthday) / (1000 * 60 * 60 * 24 * 365));

            character.concept = chance.profession();

            character.cabal = chance.company();

            // Attributes

            character.intelligence = chance.integer({ min: 1, max: 5 });
            character.wits = chance.integer({ min: 1, max: 5 });
            character.resolve = chance.integer({ min: 1, max: 5 });
            character.strength = chance.integer({ min: 1, max: 5 });
            character.dexterity = chance.integer({ min: 1, max: 5 });
            character.stamina = chance.integer({ min: 1, max: 5 });
            character.presence = chance.integer({ min: 1, max: 5 });
            character.manipulation = chance.integer({ min: 1, max: 5 });
            character.composure = chance.integer({ min: 1, max: 5 });


            return character;

        };

        // Initialise
        this.initialize();
    }

    return new CharacterGenerator();
});