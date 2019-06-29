// 命令模式
// 达到命令的发出者和执行者之间解耦，实现请求和执行分开
var Command;
(function (Command_1) {
    class Receiver {
        action() {
            console.log("commond has received");
        }
    }
    Command_1.Receiver = Receiver;
    class Command {
        constructor(receiver) {
            this.receiver = receiver;
        }
        // @Override
        exe() {
            this.receiver.action();
        }
    }
    Command_1.Command = Command;
    class Invoker {
        constructor(command) {
            this.command = command;
        }
        action() {
            this.command.exe();
        }
    }
    Command_1.Invoker = Invoker;
    class Test {
        static runTest() {
            const receiver = new Receiver();
            const command = new Command(receiver);
            const invoker = new Invoker(command);
            invoker.action();
        }
    }
    Command_1.Test = Test;
})(Command || (Command = {}));
// 执行测试
Command.Test.runTest();
//# sourceMappingURL=Command.js.map