// 状态模式
// 当对象的状态改变时，同时改变其行为。可用于权限管理
var State;
(function (State_1) {
    class State {
        getValue() {
            return this.value;
        }
        setValue(value) {
            this.value = value;
        }
        method1() {
            console.log("method1 working...");
        }
        method2() {
            console.log("method2 working...");
        }
    }
    State_1.State = State;
    class Context {
        constructor(state) {
            this.state = state;
        }
        getState() {
            return this.state;
        }
        setState(state) {
            this.state = state;
        }
        method() {
            if (this.state.getValue() === "state1") {
                this.state.method1();
            }
            else if (this.state.getValue() === "state2") {
                this.state.method2();
            }
        }
    }
    State_1.Context = Context;
    class Test {
        static runTest() {
            const state = new State();
            const context = new Context(state);
            state.setValue("state1");
            context.method();
            state.setValue("state2");
            context.method();
        }
    }
    State_1.Test = Test;
})(State || (State = {}));
// 执行测试
State.Test.runTest();
//# sourceMappingURL=State.js.map