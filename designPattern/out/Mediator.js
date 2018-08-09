// 中介者模式
// 中介者模式也是用来降低类类之间的耦合的，因为如果类类之间有依赖关系的话，不利于功能的拓展和维护，因为只要修改一个对象，其它关联的对象都得进行修改。
// 如果使用中介者模式，只需关心和Mediator类的关系，具体类类之间的关系及调度交给Mediator就行
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
var Mediator;
(function (Mediator_1) {
    var User = /** @class */ (function () {
        function User(mediator) {
            this.mediator = mediator;
        }
        User.prototype.getMediator = function () {
            return this.mediator;
        };
        return User;
    }());
    Mediator_1.User = User;
    var User1 = /** @class */ (function (_super) {
        __extends(User1, _super);
        function User1(mediator) {
            return _super.call(this, mediator) || this;
        }
        // @Override
        User1.prototype.work = function () {
            console.log("User1 working...");
        };
        return User1;
    }(User));
    Mediator_1.User1 = User1;
    var User2 = /** @class */ (function (_super) {
        __extends(User2, _super);
        function User2(mediator) {
            return _super.call(this, mediator) || this;
        }
        // @Override
        User2.prototype.work = function () {
            console.log("User2 working...");
        };
        return User2;
    }(User));
    Mediator_1.User2 = User2;
    var Mediator = /** @class */ (function () {
        function Mediator() {
        }
        // @Override
        Mediator.prototype.createMediator = function () {
            this.user1 = new User1(this);
            this.user2 = new User2(this);
        };
        ;
        // @Override
        Mediator.prototype.workAll = function () {
            this.user1.work();
            this.user2.work();
        };
        ;
        return Mediator;
    }());
    Mediator_1.Mediator = Mediator;
    var Test = /** @class */ (function () {
        function Test() {
        }
        Test.runTest = function () {
            var mediator = new Mediator();
            mediator.createMediator();
            mediator.workAll();
        };
        return Test;
    }());
    Mediator_1.Test = Test;
})(Mediator || (Mediator = {}));
// 执行测试
Mediator.Test.runTest();
//# sourceMappingURL=Mediator.js.map