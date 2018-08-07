// 桥接模式
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
var Bridge;
(function (Bridge_1) {
    var Source1 = /** @class */ (function () {
        function Source1() {
        }
        //@Override
        Source1.prototype.method = function () {
            console.log("this is the first sub");
        };
        return Source1;
    }());
    Bridge_1.Source1 = Source1;
    var Source2 = /** @class */ (function () {
        function Source2() {
        }
        //@Override
        Source2.prototype.method = function () {
            console.log("this is the second sub");
        };
        return Source2;
    }());
    Bridge_1.Source2 = Source2;
    var Bridge = /** @class */ (function () {
        function Bridge() {
        }
        Bridge.prototype.method = function () {
            this.source.method();
        };
        Bridge.prototype.getSource = function () {
            return this.source;
        };
        Bridge.prototype.setSource = function (source) {
            this.source = source;
        };
        return Bridge;
    }());
    Bridge_1.Bridge = Bridge;
    var MyBridge = /** @class */ (function (_super) {
        __extends(MyBridge, _super);
        function MyBridge() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        //@Override
        MyBridge.prototype.method = function () {
            this.getSource().method();
        };
        return MyBridge;
    }(Bridge));
    Bridge_1.MyBridge = MyBridge;
    var Test = /** @class */ (function () {
        function Test() {
        }
        Test.runTest = function () {
            var source1 = new Source1();
            var source2 = new Source2();
            var bridge = new MyBridge();
            bridge.setSource(source1);
            bridge.method();
            bridge.setSource(source2);
            bridge.method();
        };
        return Test;
    }());
    Bridge_1.Test = Test;
})(Bridge || (Bridge = {}));
// 执行测试
Bridge.Test.runTest();
//# sourceMappingURL=Bridge.js.map