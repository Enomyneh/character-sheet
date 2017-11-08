define(
    [
        "models/Character",
        "app/CharacterGenerator",
        "store"
    ],
    function(
        Character,
        CharacterGenerator,
        store) {

        return function CharacterEditor() {
            console.log("Initialising CharacterEditor definition");

            // fields
            this.loadedCharacter = {};
            this.counter = 10;

            // methods
            this.initialize = function() {
                console.log("Creating CharacterEditor");
                if (!store.get("character")) {
                    this.loadedCharacter = new Character();
                } else {
                    this.loadedCharacter = new Character(store.get("character"));
                }
            };

            this.createCharacter = function() {
                console.log("New character");
                this.loadedCharacter = new Character();
                this.counter++;
            };

            this.createRandomCharacter = function() {
                this.loadedCharacter = CharacterGenerator.generateRandomCharacter();
                this.counter++;
            };

            this.saveLocally = function() {
                store.set("character", this.loadedCharacter);
            };

            this.loadLocally = function() {
                this.loadedCharacter = new Character(store.get("character"));
            };

            // Initialise
            this.initialize();
        };
    });