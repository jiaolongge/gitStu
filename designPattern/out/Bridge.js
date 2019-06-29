// 桥接模式
var Bridge;
(function (Bridge_1) {
    class Source1 {
        //@Override
        method() {
            console.log("this is the first sub");
        }
    }
    Bridge_1.Source1 = Source1;
    class Source2 {
        //@Override
        method() {
            console.log("this is the second sub");
        }
    }
    Bridge_1.Source2 = Source2;
    class Bridge {
        method() {
            this.source.method();
        }
        getSource() {
            return this.source;
        }
        setSource(source) {
            this.source = source;
        }
    }
    Bridge_1.Bridge = Bridge;
    class MyBridge extends Bridge {
        //@Override
        method() {
            this.getSource().method();
        }
    }
    Bridge_1.MyBridge = MyBridge;
    class Test {
        static runTest() {
            const source1 = new Source1();
            const source2 = new Source2();
            const bridge = new MyBridge();
            bridge.setSource(source1);
            bridge.method();
            bridge.setSource(source2);
            bridge.method();
        }
    }
    Bridge_1.Test = Test;
})(Bridge || (Bridge = {}));
// 执行测试
Bridge.Test.runTest();
//# sourceMappingURL=Bridge.js.map