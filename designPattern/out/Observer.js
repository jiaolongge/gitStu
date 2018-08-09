// 观察者模式
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
var Observer;
(function (Observer) {
    var Observer1 = /** @class */ (function () {
        function Observer1(name) {
            this.name = name;
        }
        // @Override
        Observer1.prototype.update = function () {
            console.log("Observer1 has received");
        };
        return Observer1;
    }());
    Observer.Observer1 = Observer1;
    var Observer2 = /** @class */ (function () {
        function Observer2(name) {
            this.name = name;
        }
        // @Override
        Observer2.prototype.update = function () {
            console.log("Observer2 has received");
        };
        return Observer2;
    }());
    Observer.Observer2 = Observer2;
    var Subject = /** @class */ (function () {
        function Subject() {
            this.ObserverArr = new Array();
        }
        Subject.prototype.add = function (observer) {
            this.ObserverArr.push(observer);
        };
        Subject.prototype.del = function (observer) {
            this.ObserverArr = this.ObserverArr.filter(function (obs) { return (obs.name !== observer.name); });
        };
        ;
        Subject.prototype.notifiyObservers = function () {
            this.ObserverArr.forEach(function (obs) { obs.update(); });
        };
        ;
        Subject.prototype.operation = function () { };
        return Subject;
    }());
    Observer.Subject = Subject;
    var MySubject = /** @class */ (function (_super) {
        __extends(MySubject, _super);
        function MySubject() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // @Override
        MySubject.prototype.operation = function () {
            console.log("update itself");
            this.notifiyObservers();
        };
        ;
        return MySubject;
    }(Subject));
    Observer.MySubject = MySubject;
    var Test = /** @class */ (function () {
        function Test() {
        }
        Test.runTest = function () {
            var mySubject = new MySubject();
            var observer1 = new Observer1("observe1");
            var observer2 = new Observer2("observe2");
            mySubject.add(observer1);
            mySubject.add(observer2);
            mySubject.del(observer1);
            mySubject.operation();
        };
        return Test;
    }());
    Observer.Test = Test;
})(Observer || (Observer = {}));
// 执行测试
Observer.Test.runTest();
//# sourceMappingURL=Observer.js.map