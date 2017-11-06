define(function() {

    console.log("Initialising Character definition");

    function Character() {
        this.initialize = function() {
            console.log("Creating Character");

        };

        this.gender = "";

        this.name = {};
        this.name.prefix = "";
        this.name.first = "";
        this.name.last = "";
        this.name.suffix = "";

        this.birthday = "";

        this.initialize();
    }

    return Character;
});