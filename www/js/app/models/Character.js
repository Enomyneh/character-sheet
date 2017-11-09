define([
    'json!data/attributes.json',
    'json!data/skills.json',
    'json!data/arcana.json'
], function(
    attributes,
    skills,
    arcana) {

    console.log("Initialising Character definition");

    // This is specificallly a Mage the Awakening Character
    function Character(character) {

        this.initialize = function(character) {

            console.log("Creating Character");

            if (character) {
                for (var property in character) {
                    if (character.hasOwnProperty(property)) {
                        this[property] = character[property];
                    }
                }
            } else {

                this.name = "";
                this.age = 0;
                this.player = "Your name here";
                this.chronicle = "";
                this.concept = "";
                this.virtue = "";
                this.vice = "";

                // Skills
                skills.forEach(function(skill) {
                    this[skill.name.toLowerCase()] = 0;
                }, this);

                // Attributes
                attributes.forEach(function(attribute) {
                    this[attribute.name.toLowerCase()] = 1;
                }, this);

                // Aracana
                arcana.forEach(function(arcanum) {
                    this[arcanum.name.toLowerCase()] = 0;
                }, this);

                this.flaws = [];
                this.merits = [];
                this.derangements = [];

                this.size = 5;
                this.gnosis = 1;
                this.wisdom = 7;
                this.experience = 0;

                // Starting Values
                this.bashingDamage = 0;
                this.lethalDamage = 0;
                this.aggravatedDamage = 0;
                this.willpower = this.maxWillpower();
                this.mana = this.wisdom;

            }
        };

        this.maxHealth = function() {
            return this.size + this.stamina;
        };

        this.maxWillpower = function() {
            return this.resolve + this.composure;
        };

        this.maxMana = function() {
            // TODO work out calculation for this.
            return 10;
        };

        this.defense = function() {
            return Math.min(this.dexterity, this.wits);
        };

        this.initiativeMod = function() {
            return this.dexterity + this.composure;
        };

        this.speed = function() {
            return this.dexterity + this.strength + 5;
        };


        // Damage Calculations
        this.damage = function(type, amount) {
            switch (type) {
                case 'A':
                    break;
                case 'L':
                    break;
                case 'B':
                    break;
            }
        };

        this.initialize(character);
    }

    return Character;
});