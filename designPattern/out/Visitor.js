// 访问者模式
// 访问者模式把数据结构和作用于结构上的操作解耦合，使得操作集合可相对自由地演化。访问者模式适用于数据结构相对稳定算法又易变化的系统。
// 因为访问者模式使得算法操作增加变得容易。若系统数据结构对象易于变化，经常有新的数据对象增加进来，则不适合使用访问者模式。访问者模式的优点是增加操作很容易，因为增加操作意味着增加新的访问者。
// 访问者模式将有关行为集中到一个访问者对象中，其改变不影响系统数据结构。其缺点就是增加新的数据结构很困难。
var Visitor;
(function (Visitor_1) {
    class Visitor {
        // @Override
        visit(subject) {
            console.log("处理subject数据:" + subject.getSubject());
        }
    }
    Visitor_1.Visitor = Visitor;
    class Subject {
        // @Override
        accept(visitor) {
            visitor.visit(this);
        }
        // @Override
        getSubject() {
            return "这是subject数据";
        }
    }
    Visitor_1.Subject = Subject;
    class Test {
        static runTest() {
            const subject = new Subject();
            const visitor = new Visitor();
            subject.accept(visitor);
        }
    }
    Visitor_1.Test = Test;
})(Visitor || (Visitor = {}));
// 执行测试
Visitor.Test.runTest();
//# sourceMappingURL=Visitor.js.map