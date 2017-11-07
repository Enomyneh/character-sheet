define(function() {

    console.log("Initialising Character definition");

    // This is specificallly a Mage the Awakening Character
    function Character() {
        this.initialize = function() {
            console.log("Creating Character");

        };

        this.name = "";
        this.age = 0;
        this.player = "Your name here";
        this.chronicle = "";
        this.concept = "";
        this.virtue = "";
        this.vice = "";

        this.intelligence = 1;
        this.wits = 1;
        this.resolve = 1;
        this.strength = 1;
        this.dexterity = 1;
        this.stamina = 1;
        this.presence = 1;
        this.manipulation = 1;
        this.composure = 1;

        this.initialize();
    }

    return Character;
});