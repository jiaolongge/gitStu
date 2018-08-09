// 模板方法模式
// 通过调用抽象类调用子类方法 
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
var TemplateMethod;
(function (TemplateMethod) {
    //父类咖啡
    var Beverage = /** @class */ (function () {
        function Beverage(name) {
            this.name = name;
            console.log('构造函数的' + name);
        }
        ;
        //共用boilWater，子类不会修改它
        Beverage.prototype.boilWater = function () {
            console.log('把水煮沸');
        };
        ;
        Beverage.prototype.brew = function () {
            throw new Error('子类必须重写 brew 方法');
        };
        ;
        Beverage.prototype.pourInCup = function () {
            throw new Error('子类必须重写 pourInCup 方法');
        };
        ;
        Beverage.prototype.addCondiments = function () {
            throw new Error('子类必须重写 addCondiments 方法');
        };
        ;
        Beverage.prototype.customerWantsCondiments = function () {
            return true; // 默认需要调料
        };
        ;
        Beverage.prototype.init = function () {
            this.boilWater();
            this.brew();
            this.pourInCup();
            if (this.customerWantsCondiments()) { // 如果挂钩返回 true，则需要调料
                this.addCondiments();
            }
        };
        ;
        return Beverage;
    }());
    TemplateMethod.Beverage = Beverage;
    //子类咖啡，继承父类饮料
    var CoffeeWithHook = /** @class */ (function (_super) {
        __extends(CoffeeWithHook, _super);
        function CoffeeWithHook(name) {
            //调用父类的构造函数,演示一下super怎么用，下面传了‘名字’字符串
            return _super.call(this, name) || this;
        }
        CoffeeWithHook.prototype.brew = function () {
            console.log('用沸水冲泡咖啡');
        };
        ;
        CoffeeWithHook.prototype.pourInCup = function () {
            console.log('把咖啡倒进杯子');
        };
        ;
        CoffeeWithHook.prototype.addCondiments = function () {
            console.log('加糖和牛奶');
        };
        ;
        CoffeeWithHook.prototype.customerWantsCondiments = function () {
            // return window.confirm('请问需要调料吗？');
            return true;
        };
        ;
        return CoffeeWithHook;
    }(Beverage));
    TemplateMethod.CoffeeWithHook = CoffeeWithHook;
    ;
    var Test = /** @class */ (function () {
        function Test() {
        }
        Test.runTest = function () {
            var coffeeWithHook = new CoffeeWithHook('名字');
            coffeeWithHook.init();
        };
        return Test;
    }());
    TemplateMethod.Test = Test;
})(TemplateMethod || (TemplateMethod = {}));
// 执行测试
TemplateMethod.Test.runTest();
//# sourceMappingURL=TemplateMethod.js.map