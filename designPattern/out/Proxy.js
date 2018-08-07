var Proxy;
(function (Proxy_1) {
    var Source = /** @class */ (function () {
        function Source() {
        }
        // @Override
        Source.prototype.method = function () {
            console.log("original method");
        };
        return Source;
    }());
    Proxy_1.Source = Source;
    var Proxy = /** @class */ (function () {
        function Proxy() {
            this.source = new Source();
        }
        // @Override
        Proxy.prototype.method = function () {
            console.log("before proxy");
            this.source.method();
            console.log("end proxy");
        };
        return Proxy;
    }());
    Proxy_1.Proxy = Proxy;
    var Test = /** @class */ (function () {
        function Test() {
        }
        Test.runTest = function () {
            var proxy = new Proxy();
            proxy.method();
        };
        return Test;
    }());
    Proxy_1.Test = Test;
})(Proxy || (Proxy = {}));
// 执行测试
Proxy.Test.runTest();
// export {Proxy}
// export = Proxy;
//# sourceMappingURL=Proxy.js.map