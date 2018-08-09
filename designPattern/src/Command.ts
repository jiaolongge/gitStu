// 命令模式
// 达到命令的发出者和执行者之间解耦，实现请求和执行分开
module Command {

	interface ICommand {
		exe(): void;
	}

	export class Receiver {

		public action(): void {
			console.log("commond has received");
		}

	}

	export class Command implements ICommand {

		private receiver: Receiver;

		public constructor(receiver: Receiver) {
			this.receiver = receiver;
		}

		// @Override
		public exe(): void {
			this.receiver.action();
		}

	}

	export class Invoker {

		private command: Command;

		public constructor(command: Command) {
			this.command = command;
		}

		public action(): void {
			this.command.exe();
		}

	}

	export class Test {

		public static runTest(): void {

			const receiver: Receiver = new Receiver();
			const command: Command = new Command(receiver);
			const invoker: Invoker = new Invoker(command);
			
			invoker.action();

		}

	}

}

// 执行测试
Command.Test.runTest();