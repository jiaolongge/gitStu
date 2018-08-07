// 装饰模式就是给一个对象增加一些新的功能，而且是动态的，要求装饰对象和被装饰对象实现同一个接口，装饰对象持有被装饰对象的实例
var Decorator;
(function (Decorator_1) {
    var Source = /** @class */ (function () {
        function Source() {
        }
        // @Override
        Source.prototype.method = function () {
            console.log("original method");
        };
        return Source;
    }());
    Decorator_1.Source = Source;
    var Decorator = /** @class */ (function () {
        function Decorator(source) {
            this.source = source;
        }
        //@Override
        Decorator.prototype.method = function () {
            this.source.method();
            console.log("extend method");
        };
        return Decorator;
    }());
    Decorator_1.Decorator = Decorator;
    var Test = /** @class */ (function () {
        function Test() {
        }
        Test.runTest = function () {
            var source = new Source();
            var decorator = new Decorator(source);
            decorator.method();
        };
        return Test;
    }());
    Decorator_1.Test = Test;
})(Decorator || (Decorator = {}));
// 执行测试
Decorator.Test.runTest();
//# sourceMappingURL=Decorator.js.map