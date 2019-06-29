// 装饰模式就是给一个对象增加一些新的功能，而且是动态的，要求装饰对象和被装饰对象实现同一个接口，装饰对象持有被装饰对象的实例
var Decorator;
(function (Decorator_1) {
    class Source {
        // @Override
        method() {
            console.log("original method");
        }
    }
    Decorator_1.Source = Source;
    class Decorator {
        constructor(source) {
            this.source = source;
        }
        //@Override
        method() {
            this.source.method();
            console.log("extend method");
        }
    }
    Decorator_1.Decorator = Decorator;
    class Test {
        static runTest() {
            const source = new Source();
            const decorator = new Decorator(source);
            decorator.method();
        }
    }
    Decorator_1.Test = Test;
})(Decorator || (Decorator = {}));
// 执行测试
Decorator.Test.runTest();
//# sourceMappingURL=Decorator.js.map