define(function () {

    console.log("Initialising Character definition");

    // This is specificallly a Mage the Awakening Character
    function Character() {
        this.initialize = function () {
            console.log("Creating Character");

        };

        this.name = "";
        this.age = 0;
        this.player = "Your name here";
        this.chronicle = "";
        this.concept = "";
        this.virtue = "";
        this.vice = "";

        this.attributes = {};

        this.initialize();
    }

    return Character;
});