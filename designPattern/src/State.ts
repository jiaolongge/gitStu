// 状态模式
// 当对象的状态改变时，同时改变其行为。可用于权限管理
module State {

	export class State {

		private value: string;

		public getValue(): string {
			return this.value;
		}

		public setValue(value: string) {
			this.value = value;
		}

		public method1(): void {
			console.log("method1 working...")
		}

		public method2(): void {
			console.log("method2 working...")
		}

	}

	export class Context {

		private state: State;

		public constructor(state: State) {
			this.state = state;
		}

		public getState(): State {
			return this.state;
		}

		public setState(state: State): void {
			this.state = state;
		}

		public method(): void {

			if (this.state.getValue() === "state1") {
				this.state.method1();
			} else if (this.state.getValue() === "state2") {
				this.state.method2();
			}

		}

	}

	export class Test {

		public static runTest(): void {
			const state = new State();
			const context = new Context(state);

			state.setValue("state1");
			context.method();
			state.setValue("state2");
			context.method();

		}
	}

}

// 执行测试
State.Test.runTest();