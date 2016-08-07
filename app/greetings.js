var Greeter = (function () {
    function greeter(message) {
        this.message = message;
    }
    greeter.prototype.greet = function () {
        return "Hello," + this.message;
    };
    return greeter;
}());
var greeters = [];
greeters.push(new Greeter("world"));
greeters.push(new Greeter("how are you?"));
greeters.push(new Greeter("my baby, hello my honey, hello my ragtime gal!"));
console.log(greeters);
for (var _i = 0, greeters_1 = greeters; _i < greeters_1.length; _i++) {
    var greeter = greeters_1[_i];
    alert(greeter.greet());
}
