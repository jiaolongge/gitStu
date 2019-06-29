// 中介者模式
// 中介者模式也是用来降低类类之间的耦合的，因为如果类类之间有依赖关系的话，不利于功能的拓展和维护，因为只要修改一个对象，其它关联的对象都得进行修改。
// 如果使用中介者模式，只需关心和Mediator类的关系，具体类类之间的关系及调度交给Mediator就行
var Mediator;
(function (Mediator_1) {
    class User {
        constructor(mediator) {
            this.mediator = mediator;
        }
        getMediator() {
            return this.mediator;
        }
    }
    Mediator_1.User = User;
    class User1 extends User {
        constructor(mediator) {
            super(mediator);
        }
        // @Override
        work() {
            console.log("User1 working...");
        }
    }
    Mediator_1.User1 = User1;
    class User2 extends User {
        constructor(mediator) {
            super(mediator);
        }
        // @Override
        work() {
            console.log("User2 working...");
        }
    }
    Mediator_1.User2 = User2;
    class Mediator {
        // @Override
        createMediator() {
            this.user1 = new User1(this);
            this.user2 = new User2(this);
        }
        ;
        // @Override
        workAll() {
            this.user1.work();
            this.user2.work();
        }
        ;
    }
    Mediator_1.Mediator = Mediator;
    class Test {
        static runTest() {
            const mediator = new Mediator();
            mediator.createMediator();
            mediator.workAll();
        }
    }
    Mediator_1.Test = Test;
})(Mediator || (Mediator = {}));
// 执行测试
Mediator.Test.runTest();
//# sourceMappingURL=Mediator.js.map