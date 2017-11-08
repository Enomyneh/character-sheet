define([
    'json!data/attributes.json',
    'json!data/skills.json',
    'json!data/arcana.json'
], function(
    attributes,
    skills,
    aracana) {

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

        this.initialize();
    }

    return Character;
});