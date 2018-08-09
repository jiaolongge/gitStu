// 策略模式
// 定义一系列算法，并将每个算法封装起来，使它们可以相互替换，且算法的替换不会影响到使用算法的用户。
// 需要设计一个接口，为一系列实现类提供统一的方法，多个实现类实现该接口，设计一个抽象类（可有可无，属于辅助类），提供辅助函数
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
var Strategy;
(function (Strategy) {
    var AbsCalcalator = /** @class */ (function () {
        function AbsCalcalator() {
        }
        AbsCalcalator.prototype.split = function (exp, opt) {
            var splitedStr = exp.split(opt);
            var numArr = new Array(2);
            numArr[0] = parseInt(splitedStr[0]);
            numArr[1] = parseInt(splitedStr[1]);
            return numArr;
        };
        return AbsCalcalator;
    }());
    Strategy.AbsCalcalator = AbsCalcalator;
    var Plus = /** @class */ (function (_super) {
        __extends(Plus, _super);
        function Plus() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        //@Override
        Plus.prototype.calculate = function (exp) {
            var numberArr = this.split(exp, "+");
            return numberArr[0] + numberArr[1];
        };
        return Plus;
    }(AbsCalcalator));
    Strategy.Plus = Plus;
    var Minus = /** @class */ (function (_super) {
        __extends(Minus, _super);
        function Minus() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        //@Override
        Minus.prototype.calculate = function (exp) {
            var numberArr = this.split(exp, "-");
            return numberArr[0] - numberArr[1];
        };
        return Minus;
    }(AbsCalcalator));
    Strategy.Minus = Minus;
    var Multiply = /** @class */ (function (_super) {
        __extends(Multiply, _super);
        function Multiply() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        //@Override
        Multiply.prototype.calculate = function (exp) {
            var numberArr = this.split(exp, "*");
            return numberArr[0] * numberArr[1];
        };
        return Multiply;
    }(AbsCalcalator));
    Strategy.Multiply = Multiply;
    var Test = /** @class */ (function () {
        function Test() {
        }
        Test.runTest = function () {
            var expPlu = "8+2";
            var expMinus = "8-2";
            var expMultiply = "8*2";
            var resPlu = new Plus().calculate(expPlu);
            var resMinus = new Minus().calculate(expMinus);
            var resMultiply = new Multiply().calculate(expMultiply);
            console.log(resPlu, resMinus, resMultiply);
        };
        return Test;
    }());
    Strategy.Test = Test;
})(Strategy || (Strategy = {}));
// 执行测试
Strategy.Test.runTest();
//# sourceMappingURL=Strategy.js.map