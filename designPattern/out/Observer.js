// 观察者模式
var Observer;
(function (Observer) {
    class Observer1 {
        constructor(name) {
            this.name = name;
        }
        // @Override
        update() {
            console.log("Observer1 has received");
        }
    }
    Observer.Observer1 = Observer1;
    class Observer2 {
        constructor(name) {
            this.name = name;
        }
        // @Override
        update() {
            console.log("Observer2 has received");
        }
    }
    Observer.Observer2 = Observer2;
    class Subject {
        constructor() {
            this.ObserverArr = new Array();
        }
        add(observer) {
            this.ObserverArr.push(observer);
        }
        del(observer) {
            this.ObserverArr = this.ObserverArr.filter((obs) => (obs.name !== observer.name));
        }
        ;
        notifiyObservers() {
            this.ObserverArr.forEach((obs) => { obs.update(); });
        }
        ;
        operation() { }
    }
    Observer.Subject = Subject;
    class MySubject extends Subject {
        // @Override
        operation() {
            console.log("update itself");
            this.notifiyObservers();
        }
        ;
    }
    Observer.MySubject = MySubject;
    class Test {
        static runTest() {
            const mySubject = new MySubject();
            const observer1 = new Observer1("observe1");
            const observer2 = new Observer2("observe2");
            mySubject.add(observer1);
            mySubject.add(observer2);
            mySubject.del(observer1);
            mySubject.operation();
        }
    }
    Observer.Test = Test;
})(Observer || (Observer = {}));
// 执行测试
Observer.Test.runTest();
//# sourceMappingURL=Observer.js.map