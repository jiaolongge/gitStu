// 责任链模式
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
var Chain;
(function (Chain) {
    // interface IHandler {
    // 	operator(): void;
    // }
    var AbsHandler = /** @class */ (function () {
        function AbsHandler() {
        }
        AbsHandler.prototype.setHandler = function (handler) {
            this.handler = handler;
        };
        AbsHandler.prototype.getHandler = function () {
            return this.handler;
        };
        return AbsHandler;
    }());
    Chain.AbsHandler = AbsHandler;
    var Handler = /** @class */ (function (_super) {
        __extends(Handler, _super);
        function Handler(name) {
            var _this = _super.call(this) || this;
            _this.name = name;
            return _this;
        }
        Handler.prototype.operator = function () {
            console.log(this.name);
            if (this.getHandler()) {
                this.getHandler().operator();
            }
        };
        return Handler;
    }(AbsHandler));
    Chain.Handler = Handler;
    var Test = /** @class */ (function () {
        function Test() {
        }
        Test.runTest = function () {
            var handler1 = new Handler("handler1");
            var handler2 = new Handler("handler2");
            var handler3 = new Handler("handler3");
            handler1.setHandler(handler2);
            handler2.setHandler(handler3);
            handler1.operator();
        };
        return Test;
    }());
    Chain.Test = Test;
})(Chain || (Chain = {}));
// 执行测试
Chain.Test.runTest();
//# sourceMappingURL=Chain.js.map