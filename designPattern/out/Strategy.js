// 策略模式
// 定义一系列算法，并将每个算法封装起来，使它们可以相互替换，且算法的替换不会影响到使用算法的用户。
// 需要设计一个接口，为一系列实现类提供统一的方法，多个实现类实现该接口，设计一个抽象类（可有可无，属于辅助类），提供辅助函数
var Strategy;
(function (Strategy) {
    class AbsCalcalator {
        split(exp, opt) {
            let splitedStr = exp.split(opt);
            let numArr = new Array(2);
            numArr[0] = parseInt(splitedStr[0]);
            numArr[1] = parseInt(splitedStr[1]);
            return numArr;
        }
    }
    Strategy.AbsCalcalator = AbsCalcalator;
    class Plus extends AbsCalcalator {
        //@Override
        calculate(exp) {
            let numberArr = this.split(exp, "+");
            return numberArr[0] + numberArr[1];
        }
    }
    Strategy.Plus = Plus;
    class Minus extends AbsCalcalator {
        //@Override
        calculate(exp) {
            let numberArr = this.split(exp, "-");
            return numberArr[0] - numberArr[1];
        }
    }
    Strategy.Minus = Minus;
    class Multiply extends AbsCalcalator {
        //@Override
        calculate(exp) {
            let numberArr = this.split(exp, "*");
            return numberArr[0] * numberArr[1];
        }
    }
    Strategy.Multiply = Multiply;
    class Test {
        static runTest() {
            let expPlu = "8+2";
            let expMinus = "8-2";
            let expMultiply = "8*2";
            let resPlu = new Plus().calculate(expPlu);
            let resMinus = new Minus().calculate(expMinus);
            let resMultiply = new Multiply().calculate(expMultiply);
            console.log(resPlu, resMinus, resMultiply);
        }
    }
    Strategy.Test = Test;
})(Strategy || (Strategy = {}));
// 执行测试
Strategy.Test.runTest();
//# sourceMappingURL=Strategy.js.map