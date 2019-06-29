// 责任链模式
var Chain;
(function (Chain) {
    // interface IHandler {
    // 	operator(): void;
    // }
    class AbsHandler {
        setHandler(handler) {
            this.handler = handler;
        }
        getHandler() {
            return this.handler;
        }
    }
    Chain.AbsHandler = AbsHandler;
    class Handler extends AbsHandler {
        constructor(name) {
            super();
            this.name = name;
        }
        operator() {
            console.log(this.name);
            if (this.getHandler()) {
                this.getHandler().operator();
            }
        }
    }
    Chain.Handler = Handler;
    class Test {
        static runTest() {
            const handler1 = new Handler("handler1");
            const handler2 = new Handler("handler2");
            const handler3 = new Handler("handler3");
            handler1.setHandler(handler2);
            handler2.setHandler(handler3);
            handler1.operator();
        }
    }
    Chain.Test = Test;
})(Chain || (Chain = {}));
// 执行测试
Chain.Test.runTest();
//# sourceMappingURL=Chain.js.map