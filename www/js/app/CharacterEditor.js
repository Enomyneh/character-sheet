define(
    [
        "models/Character",
        "app/CharacterGenerator",
        "store",
        "mousetrap"
    ],
    function(
        Character,
        CharacterGenerator,
        store,
        Mousetrap) {

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
                    this.loadedCharacter = store.get("character");
                }

                Mousetrap.bind('mod+n', function() { this.createCharacter(); return false; });
                Mousetrap.bind('mod+r', function() { this.createRandomCharacter(); return false; });
                Mousetrap.bind('mod+s', function() { this.saveLocally(); return false; });
                Mousetrap.bind('mod+o', function() { this.loadLocally(); return false; });
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
                this.loadedCharacter = store.get("character");
            };

            // Initialise
            this.initialize();
        };
    });