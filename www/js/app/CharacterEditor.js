define(["models/Character", "app/CharacterGenerator"], function(Character, CharacterGenerator) {

    function CharacterEditor() {
        console.log("Initialising CharacterEditor definition");

        // fields
        this.loadedCharacter = undefined;

        // methods
        this.initialize = function() {
            console.log("Creating CharacterEditor");
            this.loadedCharacter = new Character();
        };

        this.createCharacter = function() {
            console.log("New character");
            this.loadedCharacter = new Character();
        };

        this.createRandomCharacter = function() {
            this.loadedCharacter = CharacterGenerator.generateRandomCharacter();
        };

        // Initialise
        this.initialize();
    }

    return CharacterEditor;
});