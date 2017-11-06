define(["models/Character"], function (Character) {

    function CharacterEditor() {

        this.initialize = function () {
            console.log("Initialising CharacterEditor");
        };

        this.createCharacter = function () {
            this.loadedCharacter = require("models/Character");
        }

    }

    return CharacterEditor();
});