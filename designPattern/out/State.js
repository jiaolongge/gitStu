// 状态模式
// 当对象的状态改变时，同时改变其行为。可用于权限管理
var State;
(function (State_1) {
    var State = /** @class */ (function () {
        function State() {
        }
        State.prototype.getValue = function () {
            return this.value;
        };
        State.prototype.setValue = function (value) {
            this.value = value;
        };
        State.prototype.method1 = function () {
            console.log("method1 working...");
        };
        State.prototype.method2 = function () {
            console.log("method2 working...");
        };
        return State;
    }());
    State_1.State = State;
    var Context = /** @class */ (function () {
        function Context(state) {
            this.state = state;
        }
        Context.prototype.getState = function () {
            return this.state;
        };
        Context.prototype.setState = function (state) {
            this.state = state;
        };
        Context.prototype.method = function () {
            if (this.state.getValue() === "state1") {
                this.state.method1();
            }
            else if (this.state.getValue() === "state2") {
                this.state.method2();
            }
        };
        return Context;
    }());
    State_1.Context = Context;
    var Test = /** @class */ (function () {
        function Test() {
        }
        Test.runTest = function () {
            var state = new State();
            var context = new Context(state);
            state.setValue("state1");
            context.method();
            state.setValue("state2");
            context.method();
        };
        return Test;
    }());
    State_1.Test = Test;
})(State || (State = {}));
// 执行测试
State.Test.runTest();
//# sourceMappingURL=State.js.map