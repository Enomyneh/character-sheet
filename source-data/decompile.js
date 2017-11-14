var fs = require('fs');

var type = "spells";
var array = JSON.parse(fs.readFileSync(type + '.json', 'utf8'));

array.forEach(item => {
    var name = item.name.toLowerCase().replace(/ /g, "-").replace(/[^0-9a-z-]/gi, '').replace(/--/g, "-") + ".json";
    fs.writeFile("./" + type + "/" + name, JSON.stringify(item), null);
});