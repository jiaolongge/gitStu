// 命令模式
// 达到命令的发出者和执行者之间解耦，实现请求和执行分开
var Command;
(function (Command_1) {
    var Receiver = /** @class */ (function () {
        function Receiver() {
        }
        Receiver.prototype.action = function () {
            console.log("commond has received");
        };
        return Receiver;
    }());
    Command_1.Receiver = Receiver;
    var Command = /** @class */ (function () {
        function Command(receiver) {
            this.receiver = receiver;
        }
        // @Override
        Command.prototype.exe = function () {
            this.receiver.action();
        };
        return Command;
    }());
    Command_1.Command = Command;
    var Invoker = /** @class */ (function () {
        function Invoker(command) {
            this.command = command;
        }
        Invoker.prototype.action = function () {
            this.command.exe();
        };
        return Invoker;
    }());
    Command_1.Invoker = Invoker;
    var Test = /** @class */ (function () {
        function Test() {
        }
        Test.runTest = function () {
            var receiver = new Receiver();
            var command = new Command(receiver);
            var invoker = new Invoker(command);
            invoker.action();
        };
        return Test;
    }());
    Command_1.Test = Test;
})(Command || (Command = {}));
// 执行测试
Command.Test.runTest();
//# sourceMappingURL=Command.js.map