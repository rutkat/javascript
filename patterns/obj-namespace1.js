// If you need to create a reference to an existing method of an object, 
// be sure to do it within that object's namespace to preserve the value of 'this'.
var MyObject = function() {}

MyObject.prototype.whoAmI = function() {
    console.log(this === window ? "window" : "MyObj");
};

var obj = new MyObject();
obj.w = obj.whoAmI;   // still in the obj namespace

obj.whoAmI();  // outputs "MyObj" (as expected)
obj.w();       // outputs "MyObj" (as expected)
