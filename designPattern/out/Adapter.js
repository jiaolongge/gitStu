// 适配器模式
// 适配器模式将某个类的接口转换成客户端期望的另一个接口表示，目的是消除由于接口不匹配所造成的类的兼容性问题。
// 主要分为三类：类的适配器模式、对象的适配器模式、接口的适配器模式。
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类的适配器模式 利用继承
var Adapter_01;
(function (Adapter_01) {
    // Source 类有一个方法待适配
    var Source = /** @class */ (function () {
        function Source() {
        }
        Source.prototype.method1 = function () {
            console.log("this is original method");
        };
        return Source;
    }());
    Adapter_01.Source = Source;
    var Adapter = /** @class */ (function (_super) {
        __extends(Adapter, _super);
        function Adapter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        //@Override
        Adapter.prototype.method2 = function () {
            console.log("this is target method");
        };
        ;
        return Adapter;
    }(Source));
    Adapter_01.Adapter = Adapter;
    var Test = /** @class */ (function () {
        function Test() {
        }
        Test.runTest = function () {
            var adapter = new Adapter();
            adapter.method1();
            adapter.method2();
        };
        return Test;
    }());
    Adapter_01.Test = Test;
})(Adapter_01 || (Adapter_01 = {}));
// 对象的适配器模式 通过持有Source类的实例实现功能增强
var Adapter_02;
(function (Adapter_02) {
    // Source 类有一个方法待适配
    var Source = /** @class */ (function () {
        function Source() {
        }
        Source.prototype.method1 = function () {
            console.log("this is original method");
        };
        return Source;
    }());
    Adapter_02.Source = Source;
    var Adapter = /** @class */ (function () {
        function Adapter(source) {
            this.source = source;
        }
        //@Override
        Adapter.prototype.method1 = function () {
            this.source.method1();
        };
        ;
        // @Override
        Adapter.prototype.method2 = function () {
            console.log("this is target method");
        };
        ;
        return Adapter;
    }());
    Adapter_02.Adapter = Adapter;
    var Test = /** @class */ (function () {
        function Test() {
        }
        Test.runTest = function () {
            var source = new Source();
            var adapter = new Adapter(source);
            adapter.method1();
            adapter.method2();
        };
        return Test;
    }());
    Adapter_02.Test = Test;
})(Adapter_02 || (Adapter_02 = {}));
// 接口的适配器模式 借助抽象类这个桥梁，不与直接要实现的接口打交道，避免实现所有方法
var Adapter_03;
(function (Adapter_03) {
    var Adapter = /** @class */ (function () {
        function Adapter() {
        }
        // @Override
        Adapter.prototype.method1 = function () { };
        ;
        // @Override
        Adapter.prototype.method2 = function () { };
        ;
        // @Override
        Adapter.prototype.method3 = function () { };
        ;
        return Adapter;
    }());
    Adapter_03.Adapter = Adapter;
    var SourceSub = /** @class */ (function (_super) {
        __extends(SourceSub, _super);
        function SourceSub() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // @Override
        SourceSub.prototype.method1 = function () {
            console.log("现在我只实现一个方法");
        };
        return SourceSub;
    }(Adapter));
    Adapter_03.SourceSub = SourceSub;
    var Test = /** @class */ (function () {
        function Test() {
        }
        Test.runTest = function () {
            var sourceSub = new SourceSub();
            sourceSub.method1();
        };
        return Test;
    }());
    Adapter_03.Test = Test;
})(Adapter_03 || (Adapter_03 = {}));
// 执行测试
Adapter_01.Test.runTest();
Adapter_02.Test.runTest();
Adapter_03.Test.runTest();
//# sourceMappingURL=Adapter.js.map