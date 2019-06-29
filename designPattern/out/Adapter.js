// 适配器模式
// 适配器模式将某个类的接口转换成客户端期望的另一个接口表示，目的是消除由于接口不匹配所造成的类的兼容性问题。
// 主要分为三类：类的适配器模式、对象的适配器模式、接口的适配器模式。
// 类的适配器模式 利用继承
var Adapter_01;
(function (Adapter_01) {
    // Source 类有一个方法待适配
    class Source {
        method1() {
            console.log("this is original method");
        }
    }
    Adapter_01.Source = Source;
    class Adapter extends Source {
        //@Override
        method2() {
            console.log("this is target method");
        }
        ;
    }
    Adapter_01.Adapter = Adapter;
    class Test {
        static runTest() {
            const adapter = new Adapter();
            adapter.method1();
            adapter.method2();
        }
    }
    Adapter_01.Test = Test;
})(Adapter_01 || (Adapter_01 = {}));
// 对象的适配器模式 通过持有Source类的实例实现功能增强
var Adapter_02;
(function (Adapter_02) {
    // Source 类有一个方法待适配
    class Source {
        method1() {
            console.log("this is original method");
        }
    }
    Adapter_02.Source = Source;
    class Adapter {
        constructor(source) {
            this.source = source;
        }
        //@Override
        method1() {
            this.source.method1();
        }
        ;
        // @Override
        method2() {
            console.log("this is target method");
        }
        ;
    }
    Adapter_02.Adapter = Adapter;
    class Test {
        static runTest() {
            const source = new Source();
            const adapter = new Adapter(source);
            adapter.method1();
            adapter.method2();
        }
    }
    Adapter_02.Test = Test;
})(Adapter_02 || (Adapter_02 = {}));
// 接口的适配器模式 借助抽象类这个桥梁，不与直接要实现的接口打交道，避免实现所有方法
var Adapter_03;
(function (Adapter_03) {
    class Adapter {
        // @Override
        method1() { }
        ;
        // @Override
        method2() { }
        ;
        // @Override
        method3() { }
        ;
    }
    Adapter_03.Adapter = Adapter;
    class SourceSub extends Adapter {
        // @Override
        method1() {
            console.log("现在我只实现一个方法");
        }
    }
    Adapter_03.SourceSub = SourceSub;
    class Test {
        static runTest() {
            const sourceSub = new SourceSub();
            sourceSub.method1();
        }
    }
    Adapter_03.Test = Test;
})(Adapter_03 || (Adapter_03 = {}));
// 执行测试
Adapter_01.Test.runTest();
Adapter_02.Test.runTest();
Adapter_03.Test.runTest();
//# sourceMappingURL=Adapter.js.map