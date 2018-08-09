
// 责任链模式

module Chain {

	// interface IHandler {
	// 	operator(): void;
	// }

	export abstract class AbsHandler {

		protected handler: Handler;

		public setHandler(handler: Handler) {
			this.handler = handler;
		}

		public getHandler() {
			return this.handler;
		}

		public abstract operator(): void;

	}

	export class Handler extends AbsHandler {

		private name: string;

		public constructor(name: string) {

			super();
			this.name = name;

		}

		public operator() {

			console.log(this.name);
			if (this.getHandler()) {
				this.getHandler().operator();
			}

		}

	}

	export class Test {

		public static runTest(): void {

			const handler1 = new Handler("handler1");
			const handler2 = new Handler("handler2");
			const handler3 = new Handler("handler3");

			handler1.setHandler(handler2);
			handler2.setHandler(handler3);
			handler1.operator();

		}

	}

}

// 执行测试
Chain.Test.runTest();