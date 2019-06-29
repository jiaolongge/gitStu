var Proxy;
(function (Proxy_1) {
    class Source {
        // @Override
        method() {
            console.log("original method");
        }
    }
    Proxy_1.Source = Source;
    class Proxy {
        constructor() {
            this.source = new Source();
        }
        // @Override
        method() {
            console.log("before proxy");
            this.source.method();
            console.log("end proxy");
        }
    }
    Proxy_1.Proxy = Proxy;
    class Test {
        static runTest() {
            const proxy = new Proxy();
            proxy.method();
        }
    }
    Proxy_1.Test = Test;
})(Proxy || (Proxy = {}));
// 执行测试
Proxy.Test.runTest();
// export {Proxy}
// export = Proxy;
//# sourceMappingURL=Proxy.js.map