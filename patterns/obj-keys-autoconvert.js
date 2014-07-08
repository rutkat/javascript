// when objects are used as keys for map, javascript uses each object's toStrong() to "[Object object]"
var foo = new Object();
var bar = new Object();
var map = new Object();

map[foo] = "foo";    // --> map["[Object object]"] = "foo";
map[bar] = "bar";    // --> map["[Object object]"] = "bar";
                     // NOTE: second mapping REPLACES first mapping!

alert(map[foo]);     // --> alert(map["[Object object]"]);
                     // and since map["[Object object]"] = "bar",
